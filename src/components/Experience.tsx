
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";
import { PageHeader } from "./PageHeader";
import { Briefcase, FlaskConical, BookUser, Star, AppWindow } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';


const experiences = [
  {
    company: "Medstar Health",
    location: "United States",
    period: "February 2026 – Current",
    type: "Professional",
    roles: [
      {
        role: "Ambulatory Services Clinical Associate (Part-Time)",
        period: "February 2026 – Current",
        description: [
          "Utilized MedStar's EHR systems (MedConnect) to initiate, navigate, and optimize clinical workflows, ensuring accurate documentation and efficient patient data management.",
          "Leveraged digital health platforms (e.g., Twistle) to support patient intake, communication, and workflow coordination across ambulatory care settings.",
          "Streamlined chart preparation, pre-visit planning, and data capture to support care delivery and operational efficiency.",
        ],
      },
    ],
    tags: ["EHR", "MedConnect", "Cerner Millenium", "Oracle Health", "Clinical Workflows", "Patient Data"],
  },
  {
    company: "Uncommon Sense Labs",
    location: "United States",
    period: "May 2025 – Present",
    type: "Research",
    roles: [
      {
        role: "Graduate Researcher, PresSure Breast Health Monitor",
        period: "May 2025 – Present",
        description: [
          "Designed and prototyped a pressure-based biomedical sensing device for early breast abnormality detection using force-sensitive resistor (FSR) sensors integrated with an air-bladder system.",
          "Conducted experimental validation on breast phantom models, generating quantitative performance metrics for sensitivity and spatial detection accuracy.",
          "Developed a Streamlit-based data visualization tool to convert raw sensor outputs into clinically interpretable heatmaps for localized anomaly detection.",
          "Presented the PresSure device at Georgia Institute of Technology’s SX Summit Genesis Competition, achieving 3rd place for innovation and translational potential.",
        ],
      },
    ],
    tags: ["Women’s Health", "Human-Centered Design", "Breast Health Monitoring Device", "Translational Health Technology"],
  },
  {
    company: "Z-Score Health",
    location: "United States",
    period: "May 2025 – August 2025",
    type: "Research",
    roles: [
      {
        role: "Ascendia® Innovation & Research Fellow (ABD.i Co-Founder)",
        period: "May 2025 – August 2025",
        description: [
          "Co-founded and developed an early-stage clinical informatics analytics product (ABD.i) through a venture-oriented biomedical research fellowship.",
          "Built a modular analytics workflow to identify data quality issues, trends, and demographic bias in clinical trial spreadsheets.",
          "Designed a Streamlit-based interface for interactive exploration of patient distributions and inequities in trial design.",
        ],
      },
    ],
    tags: ["Clinical Informatics", "Streamlit", "Python", "Data Analytics"],
  },
  {
    company: "Leidos Biomedical Research",
    location: "United States",
    period: "September 2022 – December 2024",
    type: "Professional",
    roles: [
      {
        role: "CAR T-Cell Therapy Associate",
        period: "September 2022 – December 2024",
        description: [
          "Supported GD2, CD33, and STEAP CAR-T clinical programs via batch-level data analysis with Python and Excel, deviation tracking, and GMP-compliant documentation.",
          "Managed the setup and operation of CliniMACS Prodigies for all CAR T-cell therapy patient runs, ensuring precision and compliance to FDA GMP standards.",
          "Partnered with R&D to execute tech transfer and scale-up of GMP cell therapy processes using Lean Six Sigma methods.",
        ],
      },
    ],
    tags: ["CAR T-Cell", "GMP", "Python", "FDA Compliance", "Lean Six Sigma"],
  },
  {
    company: "Emergent BioSolutions",
    location: "United States",
    period: "June 2021 – August 2022",
    type: "Professional",
    roles: [
      {
        role: "Manufacturing Associate",
        period: "June 2021 – August 2022",
        description: [
          "Led root cause investigations for 25+ manufacturing deviations across GMP production campaigns, identifying recurring failure modes and supporting corrective actions.",
          "Leveraged Veeva and SAP to evaluate R&D and manufacturing data systems, ensuring data integrity, regulatory alignment, and operational transparency.",
        ],
      },
    ],
    tags: ["GMP", "Veeva", "SAP", "Root Cause Analysis", "Deviation Reporting"],
  },
];

const experienceTypes = [
    { value: "Featured", label: "Featured", icon: Star },
    { value: "Professional", label: "Professional", icon: Briefcase },
    { value: "Research", label: "Research", icon: FlaskConical },
    { value: "All", label: "All", icon: AppWindow },
];


type Experience = (typeof experiences)[number];

function ExperienceTimeline({ experiences: experienceData }: { experiences: Experience[] }) {
    if (experienceData.length === 0) {
        return <div className="text-center text-muted-foreground py-12">No experiences to display for this category.</div>
    }

    return (
        <div className="mx-auto max-w-4xl flex flex-col gap-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative flex gap-x-6 sm:gap-x-8">
                 <div className="absolute left-3 top-0 h-full w-px bg-border -z-10 hidden md:block"></div>
                 <div className="relative flex-shrink-0 hidden md:block">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                        <Briefcase className="h-4 w-4 text-primary-foreground" />
                    </div>
                </div>
                <div className="flex-1 md:mt-0">
                  <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl font-headline flex items-center gap-2">
                            {exp.company}
                          </CardTitle>
                          <CardDescription>{exp.location}</CardDescription>
                        </div>
                        <p className="text-sm text-muted-foreground whitespace-nowrap pt-1">{exp.period}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {exp.roles.map((role, roleIndex) => (
                          <div key={roleIndex}>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                              <h3 className="font-semibold text-foreground">{role.role}</h3>
                              {exp.roles.length > 1 && role.period && (
                                <p className="text-sm text-muted-foreground whitespace-nowrap">{role.period}</p>
                              )}
                            </div>
                            {role.description.length > 0 && (
                              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mt-2">
                                {role.description.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                            )}
                            {roleIndex < exp.roles.length - 1 && exp.roles.length > 1 && <Separator className="my-4" />}
                          </div>
                        ))}
                      </div>
                      {exp.tags && exp.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
        </div>
    );
}

export function Experience() {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const getFilteredExperiences = (type: string) => {
    switch (type) {
        case "All":
            return experiences;
        case "Featured":
            return experiences.filter(exp => exp.type === "Professional" || exp.type === "Research");
        case "Professional":
            return experiences.filter(exp => exp.type === "Professional");
        case "Research":
            return experiences.filter(exp => exp.type === "Research");
        case "Teaching":
            return experiences.filter(exp => exp.type === "Teaching");
        default:
            return experiences;
    }
  }

  const filteredExperiences = getFilteredExperiences(activeFilter);

  return (
    <>
      <PageHeader 
        title="Work Experience"
        subtitle="My professional journey and key accomplishments."
      />
      <section id="experience" className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
            <div className="flex justify-center mb-10">
              <div className="flex justify-center gap-2">
                {experienceTypes.map(type => (
                  <TooltipProvider key={type.value}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                         <Button
                            variant={activeFilter === type.value ? 'default' : 'outline'}
                            onClick={() => setActiveFilter(type.value)}
                            className={cn(
                                "rounded-full transition-all",
                                "w-12 h-12 md:w-auto md:h-10 md:px-4 md:py-2"
                            )}
                            aria-label={type.label}
                          >
                            <type.icon className="h-5 w-5 md:mr-2" />
                            <span className="hidden md:inline">{type.label}</span>
                          </Button>
                      </TooltipTrigger>
                      <TooltipContent className="md:hidden">
                        <p>{type.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
            
            <ExperienceTimeline experiences={filteredExperiences} />
        </div>
      </section>
    </>
  );
}
