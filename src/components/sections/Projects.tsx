import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary">
              Projects
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Recent Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of the projects we&apos;ve successfully delivered for our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg"
                alt="E-commerce platform"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>E-commerce Platform</CardTitle>
              <CardDescription>
                A full-featured online shopping platform with inventory management and payment processing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">AWS</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">View Case Study</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
                alt="Healthcare Management System"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Healthcare Management System</CardTitle>
              <CardDescription>
                A comprehensive system for managing patient records, appointments, and billing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Angular</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Docker</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">View Case Study</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg"
                alt="Mobile Banking App"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Mobile Banking App</CardTitle>
              <CardDescription>
                A secure mobile banking application with real-time transaction processing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">.NET Core</Badge>
                <Badge variant="secondary">SQL Server</Badge>
                <Badge variant="secondary">Azure</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">View Case Study</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

