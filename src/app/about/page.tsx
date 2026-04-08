import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Involvement } from "@/components/Involvement";
import Image from "next/image";
import { FileText, Mail, Github, Linkedin, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                 <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                 <div className="space-y-4 text-lg text-foreground/80 text-justify">
                    <p>
                        I'm Natasha, a biomedical engineer and recent graduate from Georgia Tech, specializing in the intersection of women’s health, data, and human-centered design.
                    </p>
                    <p>
                        My background spans clinical and manufacturing settings on cell therapy and vaccine programs, where I developed a strong appreciation for data-driven problem solving in real-world health systems.
                    </p>
                 </div>
                 <div className="flex flex-col gap-4 sm:flex-row pt-4">
                    <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                        <a href="/docs/Kodgi_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-5 w-5" />
                        View Resume
                        </a>
                    </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-8">
                 <Image
                    src="/natasha.jpg"
                    width={400}
                    height={400}
                    alt="Natasha Kodgi"
                    className="rounded-lg object-cover w-full max-w-md shadow-2xl"
                    priority
                  />
                  <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:nkodgi@gmail.com" className="text-foreground/80 hover:text-primary">
                        nkodgi@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href="tel:+12404815588" className="text-foreground/80 hover:text-primary">
                        (240) 481-5588
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-primary flex-shrink-0" />
                        <Link href="https://linkedin.com/in/natasha-kodgi-profile" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary truncate">
                        linkedin.com/natasha-kodgi
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-primary" />
                        <Link href="https://github.com/nkodgi" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">
                            github.com/nkodgi
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Involvement />
      </main>
      <Footer />
    </div>
  );
}
