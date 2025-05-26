// src/components/layout/Footer.tsx
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto px-4 text-center text-foreground/60">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/FahimEhtesham73" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} MD. Ehtesamul Haque Fahim. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with <span className="text-primary">&hearts;</span> and Next.js.
        </p>
      </div>
    </footer>
  );
}
