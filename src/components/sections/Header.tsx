"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import ModeToggle from "@/components/ModeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3 md:px-20">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Binary Hub</span>
          </Link>
        </div>

        {isDesktop ? (
          <nav className="flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <ModeToggle />
            <Button asChild>
              <Link href="#contact">Get Started</Link>
            </Button>
          </nav>
        ) : (
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {!isDesktop && isMenuOpen && (
        <div className="container pb-4">
          <nav className="flex flex-col space-y-4">
            <Link href="#about" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Team
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild>
              <Link href="#contact" onClick={toggleMenu}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

