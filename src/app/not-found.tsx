import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Rocket } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
             <div className="relative">
                <Rocket className="h-24 w-24 text-primary animate-pulse" />
            </div>
            <div className="space-y-3">
                <h1 className="text-5xl font-bold tracking-tighter font-headline sm:text-6xl md:text-7xl">
                404
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Houston, we have a problem. It looks like you've ventured into uncharted territory.
                </p>
            </div>
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Home Base
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
