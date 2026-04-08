import { Button } from '@/components/ui/button';
import { Mail, User, Github, Phone, ArrowRight, Linkedin, FileText, BrainCircuit, CandlestickChart, Code, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="about" className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="flex justify-center lg:col-span-2">
              <div className="relative">
                 <Image
                    src="/natasha.jpg"
                    width={400}
                    height={400}
                    alt="Natasha Kodgi"
                    className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-2xl border-4 border-background"
                    priority
                  />
              </div>
          </div>
          <div className="flex flex-col justify-center space-y-6 lg:col-span-3 text-center lg:text-left">
            <div className="space-y-4">
               <p className="text-primary font-semibold text-lg">Biomedical Engineer | Georgia Tech Graduate</p>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Natasha Kodgi ✿
              </h1>
              <h2 className="text-2xl text-foreground/80 font-medium tracking-tight sm:text-3xl">
                Data-driven problem solving in real-world health systems.
              </h2>
              <p className="max-w-[700px] text-foreground/70 md:text-lg text-justify mx-auto lg:mx-0">
                 Hi! I’m Natasha. My background is in biomedical engineering. I began my career in the biopharmaceutical industry on cell therapy and vaccine programs, developing a strong appreciation for data-driven problem solving. My current focus is research at the intersection of women’s health, data, and human-centered design.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <a href="/docs/Kodgi_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
             <div className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center gap-3 justify-start">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:nkodgi@gmail.com" className="text-foreground/80 hover:text-primary">
                        nkodgi@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3 justify-start">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href="tel:+12404815588" className="text-foreground/80 hover:text-primary">
                        (240) 481-5588
                        </a>
                    </div>
                    <div className="flex items-center gap-3 justify-start">
                        <Linkedin className="h-5 w-5 text-primary flex-shrink-0" />
                        <Link href="https://www.linkedin.com/in/natasha-kodgi-profile" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary truncate">
                        linkedin.com/natasha-kodgi
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 justify-start">
                        <Github className="h-5 w-5 text-primary" />
                        <Link href="https://github.com/nkodgi" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">
                            github.com/nkodgi
                        </Link>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
