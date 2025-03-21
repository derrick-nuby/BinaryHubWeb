import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our services and process.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services does Binary Hub offer?</AccordionTrigger>
              <AccordionContent>
                Binary Hub offers a comprehensive range of software engineering services, including database
                administration, backend development, frontend development, full-stack development, DevOps, and quality
                assurance. We handle projects from inception to deployment and maintenance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does a typical project take to complete?</AccordionTrigger>
              <AccordionContent>
                Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a
                complex enterprise application could take 6-12 months. During our initial consultation, we'll provide a
                detailed timeline based on your specific requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer ongoing maintenance and support?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer ongoing maintenance and support for all our projects. We provide different support
                packages tailored to your needs, from basic bug fixes to comprehensive 24/7 support and regular feature
                updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What technologies do you specialize in?</AccordionTrigger>
              <AccordionContent>
                Our team has expertise in a wide range of technologies, including but not limited to: React, Angular,
                Vue.js, Node.js, Python, Java, .NET, PHP, MySQL, PostgreSQL, MongoDB, AWS, Azure, Google Cloud, Docker,
                and Kubernetes. We select the most appropriate technology stack based on your project requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do you ensure the quality of your deliverables?</AccordionTrigger>
              <AccordionContent>
                Quality assurance is integrated throughout our development process. We implement automated testing, code
                reviews, and manual testing to ensure our deliverables meet the highest standards. We also follow
                industry best practices and coding standards to ensure maintainable, scalable code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Can you work with our existing team?</AccordionTrigger>
              <AccordionContent>
                We can collaborate with your existing team, providing specialized expertise where needed. We're flexible
                in our approach and can adapt to your preferred workflow and communication methods.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

