// src/app/skills/page.tsx
"use client"; 
import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Settings, Cloud, Layers, Terminal, TrendingUp, Users, GitBranch, Cpu, Link2, Palette, Briefcase, CheckCircle, Search, ShieldCheck, Lightbulb, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom SVG Logo Components
const Html5Logo = ({ className }: { className?: string }) => (
  <img src="/html-1.svg" alt="HTML5 Logo" className={cn("h-10 w-10", className)} />
);


const Css3Logo = ({ className }: { className?: string }) => (
  <img src="/css-3.svg" alt="CSS3 Logo" className={cn("h-10 w-10", className)} />
);

const JavaScriptLogo = ({ className }: { className?: string }) => (
  <img src="/javascript-r.svg" alt="JavaScript Logo" className={cn("h-10 w-10", className)} />
);

const ReactLogo = ({ className }: { className?: string }) => (
  <img src="/react-1.svg" alt="React Logo" className={cn("h-10 w-10", className)} />
);

const NodeJsLogo = ({ className }: { className?: string }) => (
  <img src="/nodejs-icon.svg" alt="Node.js Logo" className={cn("h-10 w-10", className)} />
);

const TypeScriptLogo = ({ className }: { className?: string }) => (
  <img src="/typescript.svg" alt="TypeScript Logo" className={cn("h-10 w-10", className)} />
);

const TailwindCssLogo = ({ className }: { className?: string }) => (
  <img src="/tailwind-css-2.svg" alt="Tailwind CSS Logo" className={cn("h-10 w-10", className)} />
);
const MaterialUiLogo = ({ className }: { className?: string }) => ( 
  <img src="/material-ui-1.svg" alt="Material UI Logo" className={cn("h-10 w-10", className)} />
);

const BootstrapLogo = ({ className }: { className?: string }) => (
  <img src="/bootstrap-5-1.svg" alt="Bootstrap Logo" className={cn("h-10 w-10", className)} />
);

const ReduxLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={cn("h-10 w-10", className)}>
    <g transform="translate(50,50)" fill="currentColor">
      <path d="M0-38c17.35,0,27.88,12.24,27.88,28.49,0,16.06-10.72,28.09-27.88,28.09S-27.88,8.12-27.88-9.51C-27.88-25.76-17.35-38,0-38Zm0,8.36c-10.72,0-19.52,8.55-19.52,19.73s8.8,20.13,19.52,20.13,19.52-8.95,19.52-20.13S10.72-29.64,0-29.64Z"/>
      <path d="M0-24.92c10.72,0,19.52,8.55,19.52,19.73s-8.8,20.13-19.52,20.13S-19.52,3.36-19.52-7.82c0-11.18,8.8-17.1,19.52-17.1Zm0,31.73c5.2,0,9.56-4.17,9.56-9.35s-4.36-9.35-9.56-9.35-9.56,4.17-9.56,9.35S-5.2,6.81,0,6.81Z" transform="rotate(60)"/>
      <path d="M0-24.92c10.72,0,19.52,8.55,19.52,19.73s-8.8,20.13-19.52,20.13S-19.52,3.36-19.52-7.82c0-11.18,8.8-17.1,19.52-17.1Zm0,31.73c5.2,0,9.56-4.17,9.56-9.35s-4.36-9.35-9.56-9.35-9.56,4.17-9.56,9.35S-5.2,6.81,0,6.81Z" transform="rotate(-60)"/>
    </g>
  </svg>
);

// Skill interface and dat

interface Skill {
  name: string;
  icon?: React.ElementType; // Lucide icon
  customIcon?: React.ReactNode;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React JS', customIcon: <ReactLogo /> },
      { name: 'HTML5', customIcon: <Html5Logo /> },
      { name: 'CSS3', customIcon: <Css3Logo /> },
      { name: 'JavaScript (ES6+)', customIcon: <JavaScriptLogo /> },
      { name: 'TypeScript', customIcon: <TypeScriptLogo /> },
      { name: 'Bootstrap', customIcon: <BootstrapLogo /> }, 
      { name: 'Material-UI', customIcon:  <MaterialUiLogo /> },
      { name: 'Tailwind CSS', customIcon: <TailwindCssLogo /> },
    ],
  },
  {
    name: 'Backend Development',
    icon: Cpu,
    skills: [
      { name: 'Node.js', customIcon: <NodeJsLogo /> },
      { name: 'Express.js', icon: Settings }, 
    ],
  },
  {
    name: 'State Management',
    icon: Layers,
    skills: [
      { name: 'Redux & Redux Toolkit', customIcon: <ReduxLogo /> }, 
      { name: 'Context API', icon: Layers },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
    ],
  },
  {
    name: 'Version Control & Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Visual Studio Code', icon: Terminal }, 
    ],
  },
  {
    name: 'APIs & Authentication',
    icon: Link2,
    skills: [
      { name: 'REST APIs', icon: Link2 },
      { name: 'JSON', icon: Code }, 
      { name: 'JWT Authentication', icon: ShieldCheck },
    ],
  },
  {
    name: 'Deployment & Cloud',
    icon: Cloud,
    skills: [
      { name: 'AWS EC2', icon: Cloud },
      { name: 'AWS Lambda', icon: Cloud },
      { name: 'AWS S3 Bucket', icon: Cloud },
      { name: 'AWS DocumentDB', icon: Cloud },
      { name: 'AWS CloudFront', icon: Cloud },
      { name: 'Netlify', icon: Cloud },
      { name: 'Heroku', icon: Cloud },
      { name: 'cPanel', icon: Settings },
      { name: 'Vercel', icon: Cloud },
      { name: 'Cloudinary', icon: Cloud },
    ],
  },
  {
    name: 'Operating Systems',
    icon: Terminal,
    skills: [
      { name: 'Linux (Ubuntu)', icon: Terminal },
      { name: 'Windows', icon: Terminal }, 
    ],
  },
  {
    name: 'Digital Marketing',
    icon: TrendingUp,
    skills: [
      { name: 'Website Audit', icon: Search },
      { name: 'SEO & Keyword Research', icon: Search },
      { name: 'Google Analytics', icon: TrendingUp },
      { name: 'Social Media Marketing', icon: Users },
      { name: 'Email Marketing', icon: Mail },
      { name: 'Wordpress', icon: Palette }, 
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving & Logical Thinking', icon: Lightbulb },
      { name: 'Professional Communication', icon: Briefcase },
      { name: 'Team Collaboration', icon: Users },
      { name: 'Adaptability & Facing Challenges', icon: ShieldCheck },
      { name: 'Multitasking & Punctuality', icon: CheckCircle },
    ],
  },
];

export default function SkillsPage() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 -z-10">
        <div className="absolute top-1/10 left-1/5 w-24 h-24 bg-primary/10 rounded-full animate-subtle-float animation-delay-0 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/15 rounded-lg animate-subtle-float animation-delay-1000 blur-lg transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-primary/5 rounded-xl animate-subtle-float animation-delay-2000 blur-md"></div>
        <div className="absolute bottom-1/5 left-1/6 w-28 h-28 bg-secondary/10 rounded-full animate-subtle-float animation-delay-500 blur-xl"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary animate-fadeInUp relative z-10">My Expertise</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {skillData.map((category, categoryIndex) => (
          <Card 
            key={category.name} 
            className="bg-card/80 backdrop-blur-sm shadow-xl hover:shadow-primary/30 transition-all duration-300 animate-fadeInUp group"
            style={{ animationDelay: `${categoryIndex * 0.1 + 0.2}s` }}
          >
            <CardHeader className="flex flex-row items-center space-x-3 pb-4">
              <category.icon className="h-8 w-8 text-primary group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300" />
              <CardTitle className="text-2xl text-primary/90">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-card/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fadeInUp"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3}s` }}
                    title={skill.name}
                  >
                    {skill.customIcon ? (
                      React.cloneElement(skill.customIcon as React.ReactElement, { className: 'h-10 w-10 mb-2 text-primary/90 group-hover:text-primary transition-colors' })
                    ) : skill.icon ? (
                      <skill.icon className="h-10 w-10 mb-2 text-primary/90 group-hover:text-primary transition-colors" />
                    ) : (
                      <Palette className="h-10 w-10 mb-2 text-primary/90 group-hover:text-primary transition-colors" /> // Fallback icon
                    )}
                    <span className="text-xs sm:text-sm text-center text-foreground/80 group-hover:text-foreground/95 line-clamp-2">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
