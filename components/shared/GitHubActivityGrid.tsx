// src/components/shared/GitHubActivityGrid.tsx
'use client';

import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { addDays, format, subDays } from 'date-fns';
import React, { useEffect, useState } from 'react';

const NUM_WEEKS = 26; // Display ~6 months of activity
const DAYS_IN_WEEK = 7;

interface DayData {
  date: Date;
  commits: number;
  level: number; // 0 (no activity) to 4 (high activity)
}

const GitHubActivityGrid: React.FC = () => {
  const [activityData, setActivityData] = useState<DayData[]>([]);

  useEffect(() => {
    const generateSimulatedData = (): DayData[] => {
      const data: DayData[] = [];
      const today = new Date();
      // Determine the end date for the grid: Saturday of the current week
      const endOfWeekSaturday = addDays(today, 6 - today.getDay());

      const totalDaysInGrid = NUM_WEEKS * DAYS_IN_WEEK;
      // Determine the start date for the grid
      const gridStartDate = subDays(endOfWeekSaturday, totalDaysInGrid - 1);

      for (let i = 0; i < totalDaysInGrid; i++) {
        const currentDate = addDays(gridStartDate, i);
        
        const commits =
          Math.random() < 0.6 // 60% chance of 0 commits
            ? 0
            : Math.floor(Math.random() * (Math.random() < 0.8 ? 5 : 12)) + 1; // Skew towards fewer commits, but allow some bursts

        let level = 0;
        if (commits > 0 && commits <= 2) level = 1;
        else if (commits > 2 && commits <= 4) level = 2;
        else if (commits > 4 && commits <= 7) level = 3;
        else if (commits > 7) level = 4;

        data.push({
          date: currentDate,
          commits,
          level,
        });
      }
      return data;
    };

    setActivityData(generateSimulatedData());
  }, []);

  const getActivityColor = (level: number): string => {
    switch (level) {
      case 1:
        return 'bg-primary/20 hover:ring-1 hover:ring-primary/40';
      case 2:
        return 'bg-primary/40 hover:ring-1 hover:ring-primary/60';
      case 3:
        return 'bg-primary/60 hover:ring-1 hover:ring-primary/80';
      case 4:
        return 'bg-primary/80 hover:ring-1 hover:ring-primary';
      default: // Level 0
        return 'bg-muted/30 dark:bg-muted/50 hover:ring-1 hover:ring-muted-foreground/30';
    }
  };

  if (activityData.length === 0) {
    const placeholderHeight = `${DAYS_IN_WEEK * (10 + 2) - 2}px`; // 10px square + 2px gap
    const placeholderWidth = `${NUM_WEEKS * (10 + 2) - 2}px`;
    return (
      <div
        style={{ height: placeholderHeight, width: placeholderWidth }}
        className="bg-muted/20 rounded-md animate-pulse"
        aria-label="Loading GitHub activity grid..."
      ></div>
    );
  }

  return (
    <TooltipProvider delayDuration={100}>
      <div
        className="grid grid-rows-7 grid-flow-col gap-0.5 p-1 bg-transparent rounded-md"
        aria-label="Simulated GitHub contribution grid"
      >
        {activityData.map((day, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  'w-2.5 h-2.5 rounded-sm transition-all', // 10px by 10px, with small rounding
                  getActivityColor(day.level)
                )}
                aria-label={`Activity on ${format(day.date, 'MMM d, yyyy')}: ${day.commits} contributions`}
              />
            </TooltipTrigger>
            <TooltipContent className="bg-popover text-popover-foreground p-2 text-xs rounded-md shadow-lg border">
              <p className="font-semibold">
                {day.commits} contribution{day.commits !== 1 ? 's' : ''}
              </p>
              <p className="text-muted-foreground">{format(day.date, 'EEEE, MMMM d, yyyy')}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default GitHubActivityGrid;
