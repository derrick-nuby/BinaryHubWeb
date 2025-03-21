import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    name: "Jean Bosco",
    position: "CTO",
    company: "TechRwanda",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "JB",
    testimonial:
      "Binary Hub delivered our e-commerce platform on time and within budget. Their team's expertise across the full technology stack was impressive.",
    rating: 5,
  },
  {
    name: "Aline Mukamana",
    position: "CEO",
    company: "HealthRwanda Solutions",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "AM",
    testimonial:
      "The healthcare management system developed by Binary Hub has transformed our operations. Their attention to detail and understanding of our industry was exceptional.",
    rating: 5,
  },
  {
    name: "Emmanuel Nkurunziza",
    position: "Director",
    company: "FinTech Rwanda",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "EN",
    testimonial:
      "Binary Hub's expertise in secure application development was crucial for our banking app. Their team's knowledge of compliance requirements saved us countless hours.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from organizations that have successfully partnered with Binary Hub.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <Quote className="absolute right-4 top-4 h-6 w-6 text-muted-foreground/30" />
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">&quot;{testimonial.testimonial}&quot;</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex gap-1">
                  <span className="text-yellow-500">{"★".repeat(testimonial.rating)}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

