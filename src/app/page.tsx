import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatImDoing } from "@/components/WhatImDoing";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/components/Portfolio";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from 'next/dynamic';

const Skills = dynamic(() => import('@/components/Skills').then(mod => mod.Skills));

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatImDoing />
        <section className="w-full py-12 md:py-16 bg-secondary">
          <Skills />
        </section>
        <section className="w-full bg-background py-12 md:py-16">
            <Portfolio showFeatured={true} />
            <div className="text-center pt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/projects">
                      Explore All Projects
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
