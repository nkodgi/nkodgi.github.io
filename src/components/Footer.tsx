import Link from "next/link";
import { Github, Linkedin, Code, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 md:px-8 bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Natasha Kodgi. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
           <Link href="mailto:nkodgi@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
             <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
           </Link>
          <Link href="https://github.com/nkodgi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/natasha-kodgi-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
