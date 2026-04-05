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
    tagline: "Building Wealth Through Strategic Ownership",
    desc: "Credence Real Estate specializes in the strategic acquisition, management, and optimization of high-value real estate assets. We identify properties with strong appreciation potential and transform them into profitable, long-term investments.",
    icon: Home,
    url: "#",
  },
  {
    name: "Credence Realty",
    tagline: "Your Trusted Real Estate Partner",
    desc: "Credence Realty provides full-service real estate brokerage and advisory services. Whether buying, selling, or leasing, our experienced team delivers market insights and personalized guidance at every step.",
    icon: Building2,
    url: "#",
  },
  {
    name: "Credence Design Build",
    tagline: "From Concept to Real Assets",
    desc: "Credence Design Build is a full-service land development, design, and construction company. We bring projects from initial concept through to completed, tangible assets — managing every phase with precision and accountability.",
    icon: Landmark,
    url: "https://credencedesignbuild.ca",
  },
  {
    name: "Credence Mortgages",
    tagline: "Empowering Financial Access",
    desc: "Credence Mortgages offers flexible mortgage financing and private lending solutions. We bridge the gap between traditional lending and the real needs of borrowers, providing creative and competitive financing options.",
    icon: DollarSign,
    url: "#",
  },
  {
    name: "Credence Capital",
    tagline: "Wealth Through Wisdom",
    desc: "Credence Capital is the private equity arm of The Credence Group. We deploy capital strategically across ventures and assets that align with our long-term vision for wealth creation and preservation.",
    icon: TrendingUp,
    url: "#",
  },
  {
    name: "Credence Consulting",
    tagline: "Strategy That Drives Results",
    desc: "Credence Consulting provides expert business advisory and strategy consulting. We help organizations navigate complexity, optimize operations, and achieve sustainable growth across industries.",
    icon: Briefcase,
    url: "#",
  },
  {
    name: "Credence Media",
    tagline: "Telling Stories That Build Brands",
    desc: "Credence Media delivers corporate media, branding, and digital marketing solutions. We craft compelling narratives and visual identities that elevate brands and connect with audiences.",
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
                <p className="text-sm text-gold-light/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurCompanies;
