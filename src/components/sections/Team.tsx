import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Team members data
const teamMembers = [
  {
    name: "Munezero Michael",
    role: "Database Administrator",
    description: "Expert in database design, optimization, and management with 8+ years of experience.",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "MM",
  },
  {
    name: "Uwase Aline",
    role: "Frontend Developer",
    description: "Specializes in creating responsive, user-friendly interfaces with modern frameworks.",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "UA",
  },
  {
    name: "Nshimiyimana Jean",
    role: "Backend Developer",
    description: "Builds robust server-side applications and APIs with a focus on performance and security.",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "NJ",
  },
  {
    name: "Mukamana Grace",
    role: "QA Engineer",
    description: "Ensures software quality through comprehensive testing and quality assurance processes.",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "MG",
  },
  {
    name: "Habimana David",
    role: "DevOps Engineer",
    description: "Manages infrastructure, deployment pipelines, and ensures smooth operations.",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "HD",
  },
  {
    name: "Ishimwe Alice",
    role: "Project Manager",
    description: "Coordinates team efforts and ensures projects are delivered on time and within scope.",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    fallback: "IA",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Experts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Binary Hub brings together talented professionals across all aspects of software development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src={member.image} alt={`${member.name} - ${member.role}`} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

