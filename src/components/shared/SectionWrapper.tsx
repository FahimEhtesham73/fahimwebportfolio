// src/components/shared/SectionWrapper.tsx
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-12 md:py-20 animate-fadeIn ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
