import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
