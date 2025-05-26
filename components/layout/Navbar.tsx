
// src/components/layout/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Feather } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/rewrite-cv', label: 'CV Enhancer' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  const NavLinkItem = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/10
        ${pathname === href ? 'text-primary font-semibold' : 'text-foreground/80'}`}
      onClick={() => setIsSheetOpen(false)}
    >
      {label}
    </Link>
  );

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Feather className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-neon-glow">MD. Ehtesamul Haque Fahim</span>
          </Link>
          <div className="h-6 w-6 animate-pulse bg-muted rounded-md md:hidden"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Feather className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-neon-glow">MD. Ehtesamul Haque Fahim</span>
        </Link>

        <nav className="hidden md:flex space-x-2">
          {navLinks.map(link => <NavLinkItem key={link.href} {...link} />)}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <SheetHeader className="mb-6 text-left"> {/* Added text-left for title alignment */}
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="flex items-center space-x-2 pb-3 mb-3 border-b border-border/40"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <Feather className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-md text-neon-glow">MD. Ehtesamul Haque Fahim</span>
                </Link>
                {navLinks.map(link => <NavLinkItem key={link.href} {...link} />)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
