// src/components/shared/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  screenshots: string[];
  imageHint: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  animationDelay?: string;
}

export default function ProjectCard({ project, animationDelay = '0s' }: ProjectCardProps) {
  return (
    <Card
      className="bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-primary/30 hover:border-primary/50 animate-fadeInUp group"
      style={{ animationDelay }}
    >
      <Link href={`/projects/${project.slug}`} className="flex flex-col flex-grow">
        <CardHeader className="p-0">
          <div className="aspect-video relative">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={project.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-2xl mb-2 text-primary/90 group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription className="text-foreground/80 mb-4 min-h-[60px]">{project.description}</CardDescription>
        </CardContent>
      </Link>
      <div className="p-6 pt-0"> {/* Wrapper for tech stack and footer to keep them outside the Link */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/30">
              {tech}
            </Badge>
          ))}
        </div>
        <CardFooter className="p-0 flex justify-end space-x-3">
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button asChild size="sm" className="hover:opacity-90">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
