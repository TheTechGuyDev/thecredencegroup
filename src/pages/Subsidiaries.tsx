import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Building2, ExternalLink } from "lucide-react";

const subsidiaries = [
  { name: "Credence Design Build", desc: "Full-service design-build construction solutions for commercial, industrial, and infrastructure projects.", url: "https://credencedesignbuild.ca" },
  { name: "Innovate & Flourish", desc: "Innovation-driven consulting, business growth strategies, and organizational development for forward-thinking companies.", url: "https://innovateandflourish.com" },
  { name: "The Credence Group", desc: "Integrated project management, advisory services, and strategic consulting across multiple sectors.", url: "https://thecredencegroup.ca" },
  { name: "Credence Media", desc: "Corporate media production, branding, digital marketing, and communications solutions for businesses.", url: "https://credencemedia.ca" },
];

const Subsidiaries = () => {
  return (
    <Layout>
      <HeroBanner title="Our Subsidiaries" subtitle="A family of specialized companies delivering excellence across disciplines." />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subsidiaries.map((sub) => (
              <Card key={sub.name} className="group hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground">{sub.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{sub.desc}</p>
                  <Button variant="outline" asChild className="w-fit">
                    <a href={sub.url} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subsidiaries;
