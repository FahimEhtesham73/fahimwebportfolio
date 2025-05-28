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
const ExpressJSLogo = ({ className }: { className?: string }) => (
  <img src="/Express.svg" alt="Express Logo" className={cn("h-10 w-10", className)} />
);

const ReduxLogo = ({ className }: { className?: string }) => (
  <img src="/redux.svg" alt="redux Logo" className={cn("h-10 w-10", className)} />
);

const ContextApiLogo = ({ className }: { className?: string }) => (
  <img src='/FastAPI.svg' alt='Context API Logo' className={cn("h-10 w-10", className)} />
)

const MongoDBlogo = ({ className }: { className?: string }) => (
  <img src='/MongoDB.svg' alt='MongoDB Logo' className={cn("h-10 w -10", className)} />
)
const MySQLlogo = ({ className }: { className?: string }) => (
  <img src='/MySQL.svg' alt='MySQLLogo' className={cn("h-10 w -10", className)} />
)

const GitBranchLogo = ({ className }: { className?: string }) => (
  <img src='/Git.svg' alt='gitlogo' className={cn("h-10 w -10", className)} />
)
const VScodeLogo = ({ className }: { className?: string }) => (
  <img src='/vs.svg' alt='vs code logo' className={cn("h-10 w -10", className)} />
)

const RestApiLogo = ({ className }: { className?: string }) => (
  <img src='/FastAPI.svg' alt='rest API Logo' className={cn("h-10 w-10", className)} />
)
const JSONlogo = ({ className }: { className?: string }) => (
  <img src='/FastAPI.svg' alt='JSONlogo' className={cn("h-10 w-10", className)} />
)

const JwtLogo = ({ className }: { className?: string }) => (
  <img src='/icons8-jwt-480.svg' alt='jwtlogo' className={cn("h-10 w-10", className)} />
)
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
      { name: 'Material-UI', customIcon: <MaterialUiLogo /> },
      { name: 'Tailwind CSS', customIcon: <TailwindCssLogo /> },
    ],
  },
  {
    name: 'Backend Development',
    icon: Cpu,
    skills: [
      { name: 'Node.js', customIcon: <NodeJsLogo /> },
      { name: 'Express.js', customIcon: <ExpressJSLogo /> },
    ],
  },
  {
    name: 'State Management',
    icon: Layers,
    skills: [
      { name: 'Redux & Redux Toolkit', customIcon: <ReduxLogo /> },
      { name: 'Context API', customIcon: <ContextApiLogo /> },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', customIcon: <MongoDBlogo /> },
      { name: 'MySQL', customIcon: <MySQLlogo /> },
    ],
  },
  {
    name: 'Version Control & Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git & GitHub', customIcon: <GitBranchLogo /> },
      { name: 'Visual Studio Code', customIcon: <VScodeLogo /> },
    ],
  },
  {
    name: 'APIs & Authentication',
    icon: Link2,
    skills: [
      { name: 'REST APIs', customIcon: <RestApiLogo /> },
      { name: 'JSON', customIcon: <JSONlogo /> },
      { name: 'JWT Authentication', customIcon: <JwtLogo /> },
    ],
  },
  {
    name: 'Deployment & Cloud',
    icon: Cloud,
    skills: [
      { name: 'AWS EC2', customIcon: <img src="/AWS.svg" alt="AWS EC2" className="h-10 w-10" /> },
      { name: 'AWS Lambda', customIcon: <img src="/AWS.svg" alt="AWS Lambda" className="h-10 w-10" /> },
      { name: 'AWS S3 Bucket', customIcon: <img src="/AWS.svg" alt="AWS S3 Bucket" className="h-10 w-10" /> },
      { name: 'AWS DocumentDB', customIcon: <img src="/AWS.svg" alt="AWS DocumentDB" className="h-10 w-10" /> },
      { name: 'AWS CloudFront', customIcon: <img src="/AWS.svg" alt="AWS CloudFront" className="h-10 w-10" /> },
      { name: 'Netlify', customIcon: <img src="/netlify-svgrepo-com.svg" alt="Netlify" className="h-10 w-10" /> },
      { name: 'Heroku', customIcon: <img src="/Heroku.svg" alt="Heroku" className="h-10 w-10" /> },
      { name: 'cPanel', customIcon: <img src="/cpanel-svgrepo-com.svg" alt="cPanel" className="h-10 w-10" /> },
      { name: 'Vercel', customIcon: <img src="/Vercel.svg" alt="Vercel" className="h-10 w-10" /> },
      { name: 'Cloudinary', customIcon: <img src="/cloudinary-svgrepo-com.svg" alt="Cloudinary" className="h-10 w-10" /> },
    ],
  },
  {
    name: 'Operating Systems',
    icon: Terminal,
    skills: [
      { name: 'Linux (Ubuntu)', customIcon: <img src="/Linux.svg" alt="Ubuntu" className="h-10 w-10" /> },
      { name: 'Windows', customIcon: <img src="/Windows11.svg" alt="Windows" className="h-10 w-10" /> },
    ],
  },
  {
    name: 'Digital Marketing',
    icon: TrendingUp,
    skills: [
      { name: 'Website Audit', customIcon: <img src="/audit-check-glass-svgrepo-com.svg" alt="Audit" className="h-10 w-10" /> },
      { name: 'SEO & Keyword Research', customIcon: <img src="/seo-1-svgrepo-com.svg" alt="SEO" className="h-10 w-10" /> },
      { name: 'Google Analytics', customIcon: <img src="/analytics-chart-diagram-svgrepo-com.svg" alt="Google Analytics" className="h-10 w-10" /> },
      { name: 'Social Media Marketing', customIcon: <img src="/social-network-svgrepo-com.svg" alt="Social Media" className="h-10 w-10" /> },
      { name: 'Email Marketing', customIcon: <img src="/email-part-2-svgrepo-com.svg" alt="Email" className="h-10 w-10" /> },
      { name: 'Wordpress', customIcon: <img src="/wordpress-color-svgrepo-com.svg" alt="Wordpress" className="h-10 w-10" /> },
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving & Logical Thinking', customIcon: <img src="/think-svgrepo-com.svg" alt="Problem Solving" className="h-10 w-10" /> },
      { name: 'Professional Communication', customIcon: <img src="/communication-5-svgrepo-com.svg" alt="Communication" className="h-10 w-10" /> },
      { name: 'Team Collaboration', customIcon: <img src="/teamwork-svgrepo-com.svg" alt="Teamwork" className="h-10 w-10" /> },
      { name: 'Adaptability & Facing Challenges', customIcon: <img src="/resilience-svgrepo-com.svg" alt="Adaptability" className="h-10 w-10" /> },
      { name: 'Multitasking & Punctuality', customIcon: <img src="/professor.svg" alt="Punctuality" className="h-10 w-10" /> },
    ],
  }

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
