
// src/components/shared/SkillLogos.tsx
import { cn } from "@/lib/utils";
import type React from 'react';

export const Html5Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("h-10 w-10", className)}>
    <path fill="currentColor" d="M20.4 113.4l-8.6-97.3L64 4.3l52.2 11.8 8.6 97.3L64 123.7z"/>
    <path fill="currentColor" d="M64 15.8l42.3 9.6-7.2 81.4-35.1 9.7V15.8z" style={{ opacity: 0.9 }}/>
    <path fill="#EBEBEB" d="M64 44.4V63h32.6l-3 33.3-29.6 8.2V86.1h18.7l1.8-20.9H64zm0 51.1l.3.1h-.6L64 95.5z"/>
    <path fill="#FFF" d="M64 75.8v18.4l29.6-8.2 2.8-31H64zM64 44.4v18.6H31.4l-1.8 20.9H64v18.4l-29.6-8.2-2.8-33.3h32z"/>
  </svg>
);

export const Css3Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("h-10 w-10", className)}>
    <path fill="currentColor" d="M20.4 113.4l-8.6-97.3L64 4.3l52.2 11.8 8.6 97.3L64 123.7z"/>
    <path fill="currentColor" d="M64 15.8l42.3 9.6-7.2 81.4-35.1 9.7V15.8z" style={{ opacity: 0.9 }}/>
    <path fill="#FFF" d="M64 44.4H38.5l.7 8.2H64V44.4zm0 18.6H40.6l.7 8.2H64V63zm0 18.6H42.8l.7 8.2h13.3v-8.2l7.2-2.3z"/>
    <path fill="#EBEBEB" d="M64 44.4v8.2H48.4l-.7-8.2H64zm0 18.6v8.2H50.5l-.7-8.2H64zm0 18.6v5.9l-7.2 2.3-.4-2.3h-5.2l-.7-8.2h13.5z"/>
  </svg>
);

export const JavaScriptLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("h-10 w-10 rounded", className)}>
    <rect width="128" height="128" fill="currentColor"/>
    <path fill="#FFF" d="M64.13 91.33h13.37V77.96h10.03V64.6H77.5v-13.4h11.36V37.83H64.13v53.5zm-32.4-26.73c0 8.53 3.6 12.8 10.83 12.8 7.2 0 10.8-4.27 10.8-12.8V37.83H31.73v26.77z"/>
  </svg>
);

export const ReactLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={cn("h-10 w-10", className)} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" stroke="currentColor" fill="currentColor" style={{ opacity: 0.3 }}/>
    <g stroke="currentColor" strokeWidth="1">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const NodeJsLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={cn("h-10 w-10", className)}>
    <path fill="currentColor" d="M128 0a128 128 0 100 256A128 128 0 00128 0z"/>
    <path fill="#FFF" d="M154.7 188.2c-2.5 2.9-5.9 4.3-10.1 4.3-7.3 0-12.9-4.5-15.7-12.1l-19.2-53.4h-1.2l-5.8 16.1-13.5 37.3h-20.7L91.8 96.7h20.7l12.7 38.9 5.8 17.7h1.2l18.8-56.6h20.2l-26.5 70.7c-.6 1.6.2 2.7 2.3 2.7 1.8 0 3.4-.9 4.5-2.7l23.2-65.7h20.3l-29.9 91.5z"/>
  </svg>
);

export const TypeScriptLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("h-10 w-10 rounded", className)}>
    <rect width="128" height="128" fill="currentColor"/>
    <path fill="#FFF" d="M25.5 91.3V37.8h44.3v10.6H36.1v11.3h31.6v10.6H36.1v10.5h33.7V91.3H25.5zm50.2-34.9c0-3.8 1.2-6.8 3.5-9.1s5.3-3.4 9-3.4c3.7 0 6.7 1.1 9 3.4s3.5 5.2 3.5 9.1v24.3c0 3.8-1.2 6.8-3.5 9.1s-5.3 3.4-9 3.4c-3.7 0-6.7-1.1-9-3.4s-3.5-5.2-3.5-9.1V56.4zm10.6 24.9c0 1.7.4 3 .9 3.9s1.4 1.3 2.5 1.3c1.1 0 1.9-.4 2.5-1.3s.9-2.2.9-3.9V55.8c0-1.7-.4-3-.9-3.9s-1.4-1.3-2.5-1.3c-1.1 0-1.9.4-2.5-1.3s-.9-2.2-.9-3.9v25.5z"/>
  </svg>
);

export const TailwindCssLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6" className={cn("h-8 w-auto", className)}>
    <path fill="currentColor" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 27.733c29.867 0 51.2 23.467 51.2 51.2s-21.333 51.2-51.2 51.2c-17.067 0-32-6.4-44.8-19.2C76.8 136.533 97.067 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 23.467-29.867 0-51.2-23.467-51.2-51.2S98.133 25.6 128 25.6c17.067 0 32 6.4 44.8 19.2C158.933 17.067 138.667 0 128 0zM64 76.8c0 29.867-21.333 51.2-51.2 51.2S-12.8 106.667-12.8 76.8-1.867 25.6 29.867 25.6c17.067 0 32 6.4 44.8 19.2C60.267 27.733 40.533 12.8 12.8 12.8S-12.8 29.867-12.8 51.2c0 14.933 7.467 27.733 19.2 36.267C0 74.667-12.8 61.867-12.8 51.2-12.8 21.333 8.533 0 38.4 0s51.2 21.333 51.2 51.2c0 17.067-8.533 32-19.2 42.667C81.067 87.04 85.333 76.8 64 76.8z"/>
  </svg>
);

export const ReduxLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={cn("h-10 w-10", className)}>
    <g transform="translate(50,50)" fill="currentColor">
      <path d="M0-38c17.35,0,27.88,12.24,27.88,28.49,0,16.06-10.72,28.09-27.88,28.09S-27.88,8.12-27.88-9.51C-27.88-25.76-17.35-38,0-38Zm0,8.36c-10.72,0-19.52,8.55-19.52,19.73s8.8,20.13,19.52,20.13,19.52-8.95,19.52-20.13S10.72-29.64,0-29.64Z"/>
      <path d="M0-24.92c10.72,0,19.52,8.55,19.52,19.73s-8.8,20.13-19.52,20.13S-19.52,3.36-19.52-7.82c0-11.18,8.8-17.1,19.52-17.1Zm0,31.73c5.2,0,9.56-4.17,9.56-9.35s-4.36-9.35-9.56-9.35-9.56,4.17-9.56,9.35S-5.2,6.81,0,6.81Z" transform="rotate(60)"/>
      <path d="M0-24.92c10.72,0,19.52,8.55,19.52,19.73s-8.8,20.13-19.52,20.13S-19.52,3.36-19.52-7.82c0-11.18,8.8-17.1,19.52-17.1Zm0,31.73c5.2,0,9.56-4.17,9.56-9.35s-4.36-9.35-9.56-9.35-9.56,4.17-9.56,9.35S-5.2,6.81,0,6.81Z" transform="rotate(-60)"/>
    </g>
  </svg>
);

    