import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Server, Code, TestTube, CheckCircle, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Binary Hub</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Binary Hub is a software engineering hub that brings together talented professionals across all aspects of
              IT development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Database className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Full-Stack Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our team covers the entire development stack, from database design to user interfaces.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Server className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Infrastructure Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We handle server operations, cloud infrastructure, and deployment pipelines.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Code className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Custom Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We build tailored software solutions that address specific business needs.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <TestTube className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our QA team ensures all products meet the highest standards of quality and reliability.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <CheckCircle className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">End-to-End Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We manage projects from conception through deployment and ongoing maintenance.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Users className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Team Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our collaborative approach ensures all team members contribute their expertise to every project.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

