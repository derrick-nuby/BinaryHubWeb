import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Building Digital Solutions from Inception to Deployment
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Binary Hub is a comprehensive software engineering team that handles every aspect of product
                development, from database administration to frontend design.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

