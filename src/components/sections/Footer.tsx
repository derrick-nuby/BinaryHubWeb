import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 dark:bg-muted/10 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Binary Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Comprehensive software engineering solutions from inception to deployment.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-primary">
                  Database Administration
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  DevOps & CI/CD
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Subscribe</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" className="max-w-[240px]" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Binary Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

