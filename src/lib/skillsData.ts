
// src/lib/skillsData.ts
import type { LucideIcon } from 'lucide-react';
import { Code, Database, Settings, Cloud, Layers, Terminal, TrendingUp, Users, GitBranch, Cpu, Link2, Palette, Briefcase, CheckCircle, Search, ShieldCheck, Lightbulb, Mail } from 'lucide-react';

export interface Skill {
  name: string;
  icon?: LucideIcon; // For Lucide icons
  customIconKey?: string; // Key for custom SVG components
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon; // Category icon (Lucide)
  skills: Skill[];
}

export const skillData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React JS', customIconKey: 'ReactLogo' },
      { name: 'HTML5', customIconKey: 'Html5Logo' },
      { name: 'CSS3', customIconKey: 'Css3Logo' },
      { name: 'JavaScript (ES6+)', customIconKey: 'JavaScriptLogo' },
      { name: 'TypeScript', customIconKey: 'TypeScriptLogo' },
      { name: 'Bootstrap', icon: Palette },
      { name: 'Material-UI', icon: Palette },
      { name: 'Tailwind CSS', customIconKey: 'TailwindCssLogo' },
    ],
  },
  {
    name: 'Backend Development',
    icon: Cpu,
    skills: [
      { name: 'Node.js', customIconKey: 'NodeJsLogo' },
      { name: 'Express.js', icon: Settings },
    ],
  },
  {
    name: 'State Management',
    icon: Layers,
    skills: [
      { name: 'Redux & Redux Toolkit', customIconKey: 'ReduxLogo' },
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
