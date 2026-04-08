import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Education } from "@/components/Education";

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Education />
      </main>
      <Footer />
    </div>
  );
}
