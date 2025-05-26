
// src/app/page.tsx
import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Mail, ExternalLink, Briefcase, Lightbulb, LayoutGrid, Settings, Database as DatabaseIcon, Layers as LayersIcon } from 'lucide-react'; // Renamed Database and Layers to avoid conflict
import TypingText from '@/components/shared/TypingText';
import GitHubActivityGrid from '@/components/shared/GitHubActivityGrid';
import ProjectCard from '@/components/shared/ProjectCard';
import { projectsData } from '@/app/projects/page';
import { type SkillCategory, skillData } from '@/lib/skillsData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Html5Logo,
  Css3Logo,
  JavaScriptLogo,
  ReactLogo,
  NodeJsLogo,
  ReduxLogo,
  TypeScriptLogo,
  TailwindCssLogo
} from '@/components/shared/SkillLogos';

// Select first 2 projects for preview
const featuredProjects = projectsData.slice(0, 2);

// Select first 4 skill categories for preview
const keySkillCategories = skillData.slice(0, 4);

// Helper map for custom icons on the homepage preview
const homePageCustomIconComponents: Record<string, React.ElementType> = {
  ReactLogo,
  Html5Logo,
  Css3Logo,
  NodeJsLogo,
  ReduxLogo,
  JavaScriptLogo,
  TypeScriptLogo,
  TailwindCssLogo,
};


export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <SectionWrapper className="w-full text-center"> {/* Hero section already has relative overflow-hidden implicitly via its own style or explicit relative children */}
        {/* Decorative background elements for HERO - UNCHANGED */}
        <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full animate-subtle-float animation-delay-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/40 rounded-full animate-subtle-float animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/5 w-16 h-16 bg-primary/20 rounded-full animate-subtle-float animation-delay-1000"></div>
        </div>

        <div className="relative z-10" style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Image
            src="https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/fahimPro.png?updatedAt=1748247154426"
            alt="MD. Ehtesamul Haque Fahim"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-6 border-4 border-primary/50 shadow-lg animate-fadeInUp object-contain"
            data-ai-hint="developer portrait"
            priority
          />

          <p className="text-2xl md:text-3xl text-neon-glow mb-1 animate-fadeInUp animation-delay-200">
            Hello, I&apos;m
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-neon-glow animate-fadeInUp animation-delay-300"
          >
            <TypingText
              text="MD. Ehtesamul Haque Fahim"
              typingSpeed={100}
              initialDelayForTyping={900}
              className="inline-block"
              cursorClassName="inline-block w-[3px] h-[0.85em] bg-primary animate-blink align-text-bottom ml-1"
            />
          </h1>
          <p className="text-xl md:text-2xl text-neon-glow mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-500">
            Full Stack Software Developer
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              size="lg"
              className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-700 w-full sm:w-auto"
            >
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-800 w-full sm:w-auto"
            >
              <Link href="/contact">
                Get In Touch <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-900 w-full sm:w-auto"
            >
              <Link href="/resume.pdf" target="_blank" download="MD_Ehtesamul_Haque_Fahim_Resume.pdf">
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="quick-intro" className="w-full" style={{ animationDelay: '0.8s' }}>
        <div className="absolute inset-0 pointer-events-none opacity-15 -z-10">
          <div className="absolute top-1/5 left-1/6 w-24 h-24 bg-primary/20 rounded-full animate-subtle-float blur-lg animation-delay-300"></div>
          <div className="absolute bottom-1/5 right-1/6 w-20 h-20 bg-secondary/30 rounded-xl animate-subtle-float blur-md animation-delay-800 transform rotate-[-15deg]"></div>
        </div>
        <div className="relative z-10 flex justify-center">
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl animate-fadeInUp w-full max-w-3xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 md:p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">A Glimpse About Me</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                As a developer, I leverage a combination of object-oriented and functional programming to efficiently solve challenges. My enthusiasm for learning extends to embracing new technology stacks. Moreover, I excel as a team player and demonstrate strong leadership skills, effectively collaborating with colleagues to achieve our shared objectives.
              </p>
              <Button asChild variant="link" className="text-primary px-0 mt-4 text-lg hover:underline transform hover:scale-105 transition-transform duration-300">
                <Link href="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Key Skills Preview Section */}
      <SectionWrapper id="skills-preview" className="w-full" style={{ animationDelay: '1.0s' }}>
        <div className="absolute inset-0 pointer-events-none opacity-15 -z-10">
          <div className="absolute top-1/6 right-1/5 w-28 h-28 bg-primary/15 rounded-full animate-subtle-float blur-xl animation-delay-500 transform -rotate-12"></div>
          <div className="absolute bottom-1/6 left-1/5 w-20 h-20 bg-secondary/25 opacity-50 rounded-lg animate-subtle-float blur-lg animation-delay-1000"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {keySkillCategories.map((category, index) => (
              <Card
                key={category.name}
                className="bg-card/70 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fadeInUp group border border-transparent hover:border-primary/40 flex flex-col"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardHeader className="flex flex-row items-center space-x-3 pb-3 pt-6 px-6">
                  <category.icon className="h-10 w-10 text-primary mb-0 group-hover:scale-110 transition-transform duration-300 shrink-0" />
                  <CardTitle className="text-xl font-semibold text-primary/90 group-hover:text-primary">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-2">
                  <ul className="space-y-2">
                    {category.skills.slice(0, 3).map((skill) => {
                      const IconComponent = skill.customIconKey ? homePageCustomIconComponents[skill.customIconKey] : skill.icon;
                      return (
                        IconComponent ? (
                          <li key={skill.name} className="flex items-center space-x-2 p-1 rounded-md hover:bg-primary/10 transition-colors group/skillitem">
                            <IconComponent className="h-5 w-5 text-foreground/70 group-hover/skillitem:text-primary transition-colors shrink-0" />
                            <span className="text-sm text-foreground/80 group-hover/skillitem:text-primary transition-colors truncate" title={skill.name}>
                              {skill.name}
                            </span>
                          </li>
                        ) : null
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300">
              <Link href="/skills">
                Explore All Skills <Lightbulb className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Projects Preview Section */}
      <SectionWrapper id="projects-preview" className="w-full" style={{ animationDelay: '1.2s' }}>
        <div className="absolute inset-0 pointer-events-none opacity-10 -z-10">
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-subtle-float blur-2xl animation-delay-200"></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-secondary/20 rounded-full animate-subtle-float blur-xl animation-delay-700 transform rotate-45"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                animationDelay={`${0.3 + index * 0.15}s`}
              />
            ))}
          </div>
          <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300">
              <Link href="/projects">
                See All Projects <LayoutGrid className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="github-activity" className="w-full" style={{ animationDelay: '1.4s' }}>
        <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
          <div className="absolute top-1/5 right-1/6 w-24 h-24 bg-primary/10 rounded-lg animate-subtle-float blur-lg animation-delay-400 transform -rotate-6"></div>
          <div className="absolute bottom-1/5 left-1/6 w-20 h-20 bg-secondary/15 rounded-full animate-subtle-float blur-md animation-delay-900"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            My GitHub Journey
          </h2>
          <div className="flex justify-center mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="overflow-x-auto p-2 bg-card/30 dark:bg-card/50 rounded-lg shadow-inner transition-all duration-300 hover:shadow-xl hover:bg-card/40 dark:hover:bg-card/60">
              <GitHubActivityGrid />
            </div>
          </div>
          <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300">
              <Link href="https://github.com/FahimEhtesham73" target="_blank" rel="noopener noreferrer">
                View My GitHub Profile <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

