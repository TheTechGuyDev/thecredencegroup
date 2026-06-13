import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, User } from "lucide-react";

interface Leader {
  name: string;
  position: string;
  bio: string;
  linkedin?: string;
  photo?: string;
}

const leaders: Leader[] = [
  {
    name: "",
    position: "Founder & CEO",
    bio: "With extensive experience across real estate, investment, and business development, the Founder & CEO established The Credence Group on the principle that diverse expertise, unified under a common standard of excellence, creates extraordinary opportunities for growth.",
    linkedin: "#",
  },
  {
    name: "",
    position: "Chief Strategy Officer",
    bio: "Responsible for strategic planning and cross-company integration, the Chief Strategy Officer ensures every subsidiary aligns with the group's vision, values, and operational standards.",
    linkedin: "#",
  },
];

const Leadership = () => {
  return (
    <Layout>
      <HeroBanner
        title="Meet The Leadership"
        subtitle="The Credence Group is guided by experienced professionals committed to integrity, innovation, and long-term value creation."
        large
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {leaders.map((leader) => (
              <Card key={leader.position} className="border-border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-secondary/90 relative flex items-center justify-center">
                  {leader.photo ? (
                    <img src={leader.photo} alt={leader.name || leader.position} className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <div className="h-28 w-28 rounded-full bg-primary/15 flex items-center justify-center">
                      <User className="h-14 w-14 text-primary" />
                    </div>
                  )}
                </div>
                <CardContent className="p-8">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-2">{leader.position}</p>
                  <h3 className="font-serif font-bold text-2xl text-foreground mb-4">
                    {leader.name || "Name To Be Announced"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{leader.bio}</p>
                  {leader.linkedin && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" /> Connect on LinkedIn
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
