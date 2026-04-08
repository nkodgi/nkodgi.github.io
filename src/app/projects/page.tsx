import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/components/Portfolio";
import { PageHeader } from "@/components/PageHeader";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <PageHeader 
          title="My Projects"
          subtitle="A collection of my work, from research papers to full-stack applications."
        />
        <div className="py-12 md:py-16">
          <Portfolio />
        </div>
      </main>
      <Footer />
    </div>
  );
}
