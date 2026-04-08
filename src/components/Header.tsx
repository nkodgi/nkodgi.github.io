

'use client';

import Link from 'next/link';
import { Github, Linkedin, Menu, Code, Moon, Sun, FileText, User, Briefcase, Lightbulb, GraduationCap, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';


function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled={true} className="w-9 h-9">
         <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-9 h-9">
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

const navLinks = [
    { href: '/about', label: 'About', icon: User },
    { href: '/experience', label: 'Experience', icon: Briefcase },
    { href: '/education', label: 'Education', icon: GraduationCap },
    { href: '/projects', label: 'Projects', icon: Lightbulb },
];

function DesktopNav() {
    const pathname = usePathname();
    return (
        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "px-3 py-1.5 rounded-full transition-colors",
                pathname === link.href 
                  ? "bg-secondary text-secondary-foreground" 
                  : "text-muted-foreground hover:bg-secondary/70 hover:text-secondary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
    );
}

function MobileBottomNav() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
            <nav className="bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg p-2">
                <div className="flex justify-around items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={cn(
                                    "flex flex-col items-center justify-center text-xs w-16 h-12 rounded-lg transition-colors gap-1",
                                    isActive ? "bg-secondary text-primary" : "text-muted-foreground hover:text-primary"
                                )}
                            >
                                <link.icon className="w-5 h-5" />
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}


export function Header() {
  return (
    <>
      <div className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <header className="container flex h-16 max-w-screen-xl items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">
                <span className="hidden sm:inline">Natasha Kodgi</span>
                <span className="inline sm:hidden">Natasha</span>
              </span>
            </Link>
          </div>
          
          <DesktopNav />

          <div className="flex flex-1 items-center justify-end space-x-1">
              <Button variant="ghost" size="icon" asChild className="w-9 h-9">
                <a href="/docs/Kodgi_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                  <FileText className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="w-9 h-9">
                <a href="https://github.com/nkodgi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="w-9 h-9">
                <a href="https://www.linkedin.com/in/natasha-kodgi-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <ThemeToggle />
          </div>
        </header>
      </div>
      <MobileBottomNav />
    </>
  );
}
