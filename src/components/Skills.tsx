import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Beaker, Terminal, HeartPulse } from "lucide-react";

const skills = {
  "Languages": { icon: <Terminal className="h-8 w-8 text-primary" />, items: ["Python", "Bash", "MATLAB", "R", "SQL"] },
  "Bioinformatics": { icon: <Beaker className="h-8 w-8 text-primary" />, items: ["FASTQ processing", "Genome assembly", "Sequence alignment", "Comparative genomics", "Phylogenetics", "BUSCO"] },
  "Pipelines & Tools": { icon: <Database className="h-8 w-8 text-primary" />, items: ["Nextflow", "Docker", "Conda", "Git/GitHub", "BLAST", "NCBI (SRA/GenBank)", "SPAdes", "fastp", "seqkit"] },
  "Data Analytics": { icon: <HeartPulse className="h-8 w-8 text-primary" />, items: ["Statistical Analysis", "Dimensionality Reduction", "Data Preprocessing", "Anomaly Detection", "Power BI", "Streamlit", "Tableau"] },
};


export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A snapshot of the technologies I work with.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <Card key={category} className="bg-background">
              <CardHeader className="items-center text-center">
                {icon}
                <CardTitle className="font-headline text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {items.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
