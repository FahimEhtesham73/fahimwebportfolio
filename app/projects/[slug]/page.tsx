// src/app/projects/[slug]/page.tsx
import { projectsData } from '@/app/projects/page';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Helper function to generate AI hints for screenshots
function getScreenshotHint(projectTitle: string): string {
  const firstWord = (projectTitle.split(' ')[0] || 'project').toLowerCase();
  const keyword = firstWord.replace(/[^a-z0-9]/gi, '');
  return `${keyword} interface`;
}

// Make the component async
export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // For some Next.js versions, you might need to use this pattern instead:
  const slug = (await params).slug;
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto">
        <Link href="/projects" className="inline-flex items-center text-sm text-primary hover:underline mb-8">
          &larr; Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{project.title}</h1>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/30 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-3">
            {project.screenshots && project.screenshots.length > 0 ? (
              <Card className="overflow-hidden shadow-xl bg-card/80 backdrop-blur-sm">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {project.screenshots.map((screenshotUrl, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={screenshotUrl}
                            alt={`${project.title} - Screenshot ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                            className="object-contain rounded-md"
                            data-ai-hint={getScreenshotHint(project.title)}
                            priority={index === 0} 
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.screenshots.length > 1 && (
                    <>
                      <CarouselPrevious className="ml-16 md:ml-12 text-primary hover:text-primary-foreground hover:bg-primary" />
                      <CarouselNext className="mr-16 md:mr-12 text-primary hover:text-primary-foreground hover:bg-primary" />
                    </>
                  )}
                </Carousel>
              </Card>
            ) : (
              <div className="aspect-[4/3] relative bg-muted rounded-lg flex items-center justify-center">
                <p className="text-foreground/50">No screenshots available.</p>
              </div>
            )}
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-primary/90 mb-3">About this project</h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                 {project.githubUrl && (
                  <Button asChild variant="outline" size="sm" className="w-full mt-6 hover:bg-primary/10 hover:text-primary">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <Button asChild size="sm" className="w-full mt-3 hover:opacity-90">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-semibold text-primary/90 mb-4">Project Overview</h2>
          <div className="text-foreground/80 leading-relaxed space-y-4 text-lg" dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br />') }} />
        </div>
      </div>
    </SectionWrapper>
  );
}

export async function generateStaticParams() {
  return projectsData.map(project => ({
    slug: project.slug,
  }));
}