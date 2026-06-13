import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home, Building2, Landmark, DollarSign, TrendingUp, Briefcase, Film,
  ExternalLink, Layers, Users, Zap,
} from "lucide-react";

const companies = [
  {
    name: "Credence Real Estate",
    tagline: "Strategic Acquisition. Optimized Value.",
    desc: "We identify the undervalued and the exceptional. As the group's primary acquisition arm, we utilize data-driven insights to build a portfolio of high-yield residential and commercial assets that stand the test of market cycles.",
    icon: Home,
    url: "#",
  },
  {
    name: "Credence Realty",
    tagline: "Your Partners in Today's Market.",
    desc: "Real estate is about more than square footage — it's about the right move at the right time. Our elite team provides broad reach and local expertise, ensuring every transaction for our clients is seamless, transparent, and profitable.",
    icon: Building2,
    url: "#",
  },
  {
    name: "Credence Design Build",
    tagline: "From Concept to Real Assets.",
    desc: "We don't just build structures; we craft legacies. By integrating architectural innovation with rigorous project management, we transform ambitious concepts into high-performance physical assets. Our focus is on precision, transformation, and aesthetic excellence.",
    icon: Landmark,
    url: "https://credencedesignbuild.ca",
  },
  {
    name: "Credence Mortgages",
    tagline: "Financing Solutions Built For You.",
    desc: "We bridge the gap between ambition and ownership. By offering sophisticated lending products and personalized advisory, we provide the capital structures necessary to turn real estate goals into reality with speed and certainty.",
    icon: DollarSign,
    url: "#",
  },
  {
    name: "Credence Capital",
    tagline: "Wealth Through Wisdom.",
    desc: "As the strategic engine of the group, Credence Capital manages private equity and asset allocations with a long-term horizon. We focus on risk-adjusted returns and disciplined investment strategies that ensure the group's — and our partners' — financial longevity.",
    icon: TrendingUp,
    url: "#",
  },
  {
    name: "Credence Consulting",
    tagline: "Clarity in Complexity.",
    desc: "We provide the intellectual capital that drives operational excellence. From high-level business strategy to process optimization, our consultants help organizations within and outside the group navigate growth hurdles and scale efficiently.",
    icon: Briefcase,
    url: "#",
  },
  {
    name: "Credence Media",
    tagline: "Storytelling with Substance.",
    desc: "In a digital-first world, attention is the ultimate currency. Credence Media crafts compelling narratives and high-fidelity content that elevate brands, engage audiences, and ensure our group's portfolio remains at the forefront of the cultural conversation.",
    icon: Film,
    url: "https://credencemedia.ca",
  },
];

const OurCompanies = () => {
  return (
    <Layout>
      <HeroBanner
        title="Our Companies"
        subtitle="Seven subsidiaries united by The Credence Standard — each bringing specialized expertise to a vertically integrated ecosystem."
      />

      {/* Company Blocks */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-8">
          {companies.map((c, i) => (
            <Card key={c.name} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/4 bg-secondary flex items-center justify-center p-8">
                    <c.icon className="h-16 w-16 text-primary" />
                  </div>
                  <div className="md:w-3/4 p-6 md:p-8">
                    <h3 className="font-serif font-bold text-xl mb-1 text-foreground">{c.name}</h3>
                    <p className="text-sm font-medium text-primary mb-3 italic">"{c.tagline}"</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                    {c.url !== "#" && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        Visit Website <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* The Credence Advantage */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">The Credence Advantage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Layers, title: "Vertical Integration", desc: "End-to-end control across the value chain — from capital to construction to marketing." },
              { icon: Users, title: "Diverse Expertise", desc: "Specialized teams across seven industries, sharing knowledge and best practices." },
              { icon: Zap, title: "Operational Efficiency", desc: "Shared resources and streamlined processes that reduce cost and accelerate delivery." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurCompanies;
