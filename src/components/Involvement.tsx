import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookOpen, Coffee } from "lucide-react";

const involvement = [
  {
    organization: "Literature",
    role: "Dark Academia & Fantasy Reader",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    description: [
        "I enjoy reading widely, with a particular love for dark academia and fantasy.",
        "You can find my reading list and reviews on my Goodreads profile.",
    ],
    link: { label: "View my Goodreads →", href: "https://www.goodreads.com/user/show/162194989-natasha" }
  },
  {
    organization: "Food, Travel & Baking",
    role: "World Traveler",
    icon: <Coffee className="h-8 w-8 text-primary" />,
    description: [
        "I've traveled to 24 countries so far and am hoping to visit 6 more within the next three years.",
        "I'm especially interested in food-centered travel, local cafés, and baking as a way to explore culture and place.",
    ],
    link: undefined
  },
];

export function Involvement() {
  return (
    <section id="involvement" className="w-full py-12 md:py-16 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Personal Interests</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
              A peek into life outside the lab.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {involvement.map((item, index) => (
            <Card key={index} className="bg-background overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold tracking-tight font-headline text-xl">{item.organization}</h3>
                  <p className="font-semibold text-primary text-sm">{item.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside space-y-2 text-sm text-muted-foreground text-left ml-4">
                  {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-primary hover:underline font-medium"
                  >
                    {item.link.label}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
