import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  Building2, Home, Landmark, DollarSign, TrendingUp, Briefcase, Film,
  ArrowRight, ExternalLink, Shield, Layers, Zap,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const subsidiaries = [
  { name: "Real Estate", fullName: "Credence Real Estate", focus: "Asset Acquisition", mission: "Identifying and securing high-yield residential and commercial opportunities through rigorous market analysis.", icon: Home, url: "#", featured: false },
  { name: "Realty", fullName: "Credence Realty", focus: "Real Estate Services", mission: "Delivering real estate representation and advisory for clients.", icon: Building2, url: "#", featured: false },
  { name: "Design Build", fullName: "Credence Design Build", focus: "Land Development & Design/Construction", mission: "Leading land development, infill development, and construction-led design and execution.", icon: Landmark, url: "https://credencedesignbuild.ca", featured: true },
  { name: "Mortgages", fullName: "Credence Mortgages", focus: "Mortgage Financing & Private Lending", mission: "Structuring bespoke mortgage financing and private lending solutions to facilitate complex acquisitions.", icon: DollarSign, url: "#", featured: false },
  { name: "Capital", fullName: "Credence Capital", focus: "Private Equity", mission: "Deploying strategic capital and disciplined asset management to drive long-term equity growth.", icon: TrendingUp, url: "#", featured: false },
  { name: "Consulting", fullName: "Credence Consulting", focus: "Advisory & Strategy", mission: "Driving organizational excellence through specialized business advisory and transformation strategies.", icon: Briefcase, url: "#", featured: false },
  { name: "Media", fullName: "Credence Media", focus: "Marketing & Content", mission: "Crafting high-impact narratives and digital positioning to amplify market presence and influence.", icon: Film, url: "https://credencemedia.ca", featured: false },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero — left-aligned, editorial style */}
      <section className="relative min-h-[85vh] flex items-end pb-16 md:pb-20 pt-28 md:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="relative container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
              Established Excellence
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-2">
              Diversified Excellence.
            </h1>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold italic text-primary leading-[1.1] mb-6">
              Unified Vision.
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              The Credence Group is a holding company managing a strategic portfolio of industry players across real estate, private lending, business acquisition, advisory and consulting services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rounded-sm px-6" asChild>
                <Link to="/companies">Explore Portfolio</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-foreground hover:text-primary rounded-sm px-6 gap-2" asChild>
                <Link to="/philosophy">Our Strategy <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Credence — two-column editorial */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                The Power of<br />Credence
              </h2>
              <div className="w-16 h-0.5 bg-primary mt-6" />
            </div>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                As a premier holding group, our structure is designed for resilience and agility. We provide the strategic capital and operational expertise that allow our subsidiaries to lead their respective industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By integrating diverse sectors — from real estate to media — we create a synergistic ecosystem where knowledge and excellence flow freely, ensuring every venture meets the "Credence Standard."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio — clean card grid */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-2">Investment Pillars</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Our Portfolio</h2>
            </div>
            <p className="text-sm text-muted-foreground mt-3 md:mt-0 max-w-xs">
              Seven distinct sectors, one core philosophy of uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {subsidiaries.map((s) => (
              <a
                key={s.name}
                href={s.url !== "#" ? s.url : undefined}
                target={s.url !== "#" ? "_blank" : undefined}
                rel={s.url !== "#" ? "noopener noreferrer" : undefined}
                className={`group p-8 flex flex-col transition-colors cursor-pointer ${
                  s.featured
                    ? "bg-secondary text-white"
                    : "bg-white hover:bg-muted/30"
                }`}
              >
                <div className={`h-10 w-10 mb-5 flex items-center justify-center ${
                  s.featured ? "text-primary" : "text-primary"
                }`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className={`font-serif font-bold text-lg mb-2 ${
                  s.featured ? "text-white" : "text-foreground"
                }`}>
                  {s.name}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  s.featured ? "text-white/80" : "text-muted-foreground"
                }`}>
                  {s.mission}
                </p>
                {s.url !== "#" && (
                  <span className={`mt-4 inline-flex items-center gap-1 text-xs font-medium ${
                    s.featured ? "text-primary" : "text-primary"
                  } group-hover:gap-2 transition-all`}>
                    Visit Website <ExternalLink className="h-3 w-3" />
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why the Group — bordered cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-2">The Credence Advantage</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Why The Group?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "The Credence Standard", desc: "Our rigorous internal benchmarks ensure that every project under our umbrella adheres to global standards of quality and ethical governance." },
              { icon: Layers, title: "Vertical Integration", desc: "By owning the supply chain from design to capital to execution, we minimize friction and maximize efficiency for our partners." },
              { icon: Zap, title: "Cross-Sector Synergy", desc: "Insights from our Media division inform our Realty strategies, while our Capital arm fuels our Design Build innovations." },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-sm p-8">
                <div className="h-10 w-10 mb-5 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-3 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — dark diagonal */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-secondary/95" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-8">
            Integrity in Ownership.<br />Excellence in Execution.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-sm px-8" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-sm px-8 border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/philosophy">Annual Reports</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
