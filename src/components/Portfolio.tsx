import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Award } from "lucide-react";

const projects = [
  { type: "Project", title: "PresSure – Breast Health Monitor", description: "Pressure-based sensing system using FSR technology and air-bladder mechanics for early breast abnormality detection. Placed 3rd at Georgia Tech Startup Exchange Summit.", category: "Hardware & AI", image: undefined, hint: undefined, link: "https://nkodgi.github.io/PresSure-Fit-Finder/" },
  { type: "Project", title: "Quantifying Norovirus Transmission", description: "Stochastic SEIR-type model calibrated to ~1,980 CDC NORS outbreak reports, evaluating food-worker exclusion and hygiene interventions.", category: "Epidemiology", image: undefined, hint: undefined, link: "https://nkodgi.github.io/Quantifying_Norovirus/" },
  { type: "Project", title: "ABD.i – Anomaly & Bias Detection Interface", description: "Co-founded a modular analytics tool identifying demographic bias and data quality issues in clinical trial spreadsheets, with Streamlit UI.", category: "Clinical Informatics", image: undefined, hint: undefined, link: "https://abdibiotech.com/" },
  { type: "Project", title: "Nextflow Genomics Pipeline", description: "Nextflow pipeline processing paired-end FASTQ data with sequential fastp QC and parallel SPAdes/seqkit execution in Conda-managed environments.", category: "Bioinformatics", image: undefined, hint: undefined, link: "https://github.com/nkodgi/Nextflow" },
  { type: "Project", title: "WFP Food Price ETL Pipeline", description: "End-to-end ETL pipeline ingesting, cleaning, and transforming World Food Programme global food price data; stored in SQLite/CSV with visualizations.", category: "Data Engineering", image: undefined, hint: undefined, link: "https://github.com/nkodgi/ETL_WFP_Food_Prices_2016" },
  { type: "Project", title: "R Shiny Dimensionality Reduction App", description: "Interactive dashboard enabling PCA, t-SNE, and MDS analysis of high-dimensional biomedical datasets with box plots and statistical summaries.", category: "Data Analytics", image: undefined, hint: undefined, link: "https://github.com/nkodgi" },
];

interface PortfolioProps {
  showFeatured?: boolean;
}

const getGitHubImageUrl = (githubUrl: string) => {
    try {
        const url = new URL(githubUrl);
        const pathParts = url.pathname.split('/').filter(part => part);
        if (url.hostname === 'github.com' && pathParts.length >= 2) {
            const owner = pathParts[0];
            const repo = pathParts[1];
            return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
        }
    } catch (error) {
        console.error("Invalid URL for project", error);
    }
    return null;
}

export function Portfolio({ showFeatured = false }: PortfolioProps) {
  const displayedProjects = showFeatured ? projects.slice(0, 3) : projects;

  return (
    <section id="portfolio" className="w-full">
      <div className="container px-4 md:px-6">
        {showFeatured && (
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">Featured Projects</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A collection of my work, from research papers to full-stack applications.
                    </p>
                </div>
            </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((item, index) => {
            const projectImage = item.link && item.link.includes('github.com') ? getGitHubImageUrl(item.link) : item.image;
            return (
                <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                    <Link href={item.link || '#'} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col bg-card rounded-lg">
                        {projectImage && (
                            <div className="p-0 relative overflow-hidden">
                                <Image
                                    src={projectImage}
                                    width={600}
                                    height={400}
                                    alt={item.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={item.hint}
                                />
                            </div>
                        )}
                        <CardContent className="p-6 flex flex-col flex-grow">
                            <Badge variant="outline" className="border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors w-fit mb-2">{item.category}</Badge>
                            <CardTitle className="text-lg font-semibold font-headline mb-2 group-hover:text-primary transition-colors">{item.title}</CardTitle>
                            {item.description && (
                                <p className="text-sm text-muted-foreground flex-grow mb-4">{item.description}</p>
                            )}
                            <div className="flex justify-end mt-auto">
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                            </div>
                        </CardContent>
                    </Link>
                </Card>
            )
        })}
        </div>
      </div>
    </section>
  );
}
