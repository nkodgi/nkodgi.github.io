import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FlaskConical, Heart, BarChart2, Microscope } from "lucide-react";

const activities = [
    {
        title: "Biomedical Engineering",
        description: "I apply engineering principles to healthcare, working on cell therapy, vaccines, and data-driven clinical tools.",
        icon: <FlaskConical className="h-8 w-8 text-primary" />,
    },
    {
        title: "Women's Health",
        description: "My research centers on building thoughtful, equity-aware tools for women's health and clinical trial design.",
        icon: <Heart className="h-8 w-8 text-primary" />,
    },
    {
        title: "Data Analytics",
        description: "I design pipelines and dashboards that turn complex biomedical datasets into actionable insights.",
        icon: <BarChart2 className="h-8 w-8 text-primary" />,
    },
    {
        title: "Research",
        description: "I build data-driven tools for public health, from stochastic epidemiological models to bioinformatics pipelines.",
        icon: <Microscope className="h-8 w-8 text-primary" />,
    }
];

export function WhatImDoing() {
    return (
        <section id="core-expertise" className="w-full py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">What I'm doing</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {activities.map((activity, index) => (
                        <Card key={index} className="bg-background text-center flex flex-col items-center p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="flex-shrink-0">{activity.icon}</div>
                            <CardHeader className="p-4 pt-2">
                                <CardTitle className="font-headline text-xl">{activity.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 flex flex-col items-center flex-grow">
                                <p className="text-muted-foreground text-sm flex-grow">{activity.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
