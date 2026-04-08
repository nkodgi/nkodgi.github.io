import { GraduationCap, School, BookOpen, Users, Award, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { PageHeader } from './PageHeader';

const educationHistory = [
    {
        school: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        timeline: "December 2025",
        degree: "M.S. Biomedical Engineering",
        specialization: "Focus: Systems Modeling and Bioinformatics",
        gpa: "4.0",
        content: {
            involvement: [
                "Recognized as a featured graduate in Fall 2025.",
                "Research at the intersection of women's health, data, and human-centered design."
            ]
        }
    },
    {
        school: "University of Maryland",
        location: "College Park, MD",
        timeline: "May 2021",
        degree: "B.S. Bioengineering",
        specialization: "Track: Biotechnology and Therapeutics Engineering · Minor: Technology Entrepreneurship",
        gpa: "3.7",
        content: {
            involvement: []
        }
    }
];

export function Education() {
  return (
    <>
      <PageHeader 
        title="Education" 
        subtitle="My academic journey and qualifications." 
      />
      <section id="education" className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl flex flex-col gap-y-12">
            {educationHistory.map((edu, index) => (
              <div key={index} className="relative flex gap-x-6 sm:gap-x-8">
                 <div className="absolute left-3 top-0 h-full w-px bg-border -z-10 hidden md:block"></div>
                 <div className="relative flex-shrink-0 hidden md:block">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                        <School className="h-4 w-4 text-primary-foreground" />
                    </div>
                </div>
                <div className="flex-1 md:mt-0">
                  <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl font-headline">
                            {edu.school}
                          </CardTitle>
                          <CardDescription>{edu.location}</CardDescription>
                        </div>
                        <p className="text-sm text-muted-foreground whitespace-nowrap pt-1">{edu.timeline}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="grid gap-4 text-muted-foreground">
                      <div>
                        <h3 className="font-semibold text-foreground flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary"/>{edu.degree}</h3>
                        {edu.specialization && <p className="text-sm pl-7">Specialization: {edu.specialization}</p>}
                        {edu.gpa && <p className="text-sm pl-7">GPA: {edu.gpa}</p>}
                        {edu.grade && <p className="text-sm pl-7">Grade: {edu.grade}</p>}
                      </div>

                      {edu.content?.coursework && (
                          <div>
                              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-1"><BookOpen className="h-5 w-5 text-primary"/>Relevant Coursework</h4>
                              <p className="pl-7">{edu.content.coursework}</p>
                          </div>
                      )}
                       {edu.content?.involvement && edu.content.involvement.length > 0 && (
                          <div>
                              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-1"><Users className="h-5 w-5 text-primary"/>Campus Involvement & Leadership</h4>
                              <ul className="list-disc list-outside space-y-1 pl-12">
                                 {edu.content.involvement.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                          </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
