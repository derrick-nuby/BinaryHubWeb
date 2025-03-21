import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Database, Server, Layout, Code, GitBranch, Shield } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary">
              Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Comprehensive Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Binary Hub offers a complete range of software engineering services to meet all your development needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <Database className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Database Administration</CardTitle>
              <CardDescription>
                Expert database design, optimization, and management for all major database systems.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Database architecture design</li>
                <li>Performance optimization</li>
                <li>Data migration and integration</li>
                <li>Backup and recovery solutions</li>
                <li>Security implementation</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <Server className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>
                Robust server-side solutions that power your applications with reliability and performance.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>API development and integration</li>
                <li>Microservices architecture</li>
                <li>Authentication and authorization</li>
                <li>Server-side business logic</li>
                <li>Real-time data processing</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <Layout className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>
                Beautiful, responsive user interfaces that provide exceptional user experiences.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Responsive web design</li>
                <li>Single-page applications</li>
                <li>Progressive web apps</li>
                <li>Cross-browser compatibility</li>
                <li>UI/UX implementation</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <Code className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Full-Stack Development</CardTitle>
              <CardDescription>
                End-to-end development services that cover all aspects of your application.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Complete application development</li>
                <li>Technology stack consultation</li>
                <li>System architecture design</li>
                <li>Integration with existing systems</li>
                <li>Performance optimization</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <GitBranch className="h-10 w-10 text-primary mb-4" />
              <CardTitle>DevOps & CI/CD</CardTitle>
              <CardDescription>
                Streamlined development operations and continuous integration/deployment pipelines.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>CI/CD pipeline setup</li>
                <li>Infrastructure as code</li>
                <li>Containerization (Docker, Kubernetes)</li>
                <li>Automated testing integration</li>
                <li>Monitoring and logging solutions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Quality Assurance</CardTitle>
              <CardDescription>
                Comprehensive testing and quality assurance to ensure your software meets the highest standards.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Manual and automated testing</li>
                <li>Performance testing</li>
                <li>Security testing</li>
                <li>User acceptance testing</li>
                <li>Continuous quality monitoring</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="#contact">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

