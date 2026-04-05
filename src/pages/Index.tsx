import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import {
  Building2, Home, Landmark, DollarSign, TrendingUp, Briefcase, Film,
  ArrowRight, ExternalLink, Shield, Layers, Zap,
} from "lucide-react";

const subsidiaries = [
  { name: "Credence Real Estate", focus: "Property Acquisition", mission: "Strategic acquisition and management of high-value real estate assets.", icon: Home, url: "#" },
  { name: "Credence Realty", focus: "Real Estate Services", mission: "Full-service real estate brokerage and advisory.", icon: Building2, url: "#" },
  { name: "Credence Design Build", focus: "Land Development, Design & Construction", mission: "Integrated design-build solutions from concept to completion.", icon: Landmark, url: "https://credencedesignbuild.ca" },
  { name: "Credence Mortgages", focus: "Mortgage Financing & Private Lending", mission: "Flexible mortgage solutions and private lending services.", icon: DollarSign, url: "#" },
  { name: "Credence Capital", focus: "Private Equity", mission: "Strategic private equity investments for long-term wealth creation.", icon: TrendingUp, url: "#" },
  { name: "Credence Consulting", focus: "Business Advisory & Strategy", mission: "Expert consulting across industries, delivering strategic solutions.", icon: Briefcase, url: "#" },
  { name: "Credence Media", focus: "Marketing & Content", mission: "Corporate media, branding, and digital marketing solutions.", icon: Film, url: "https://credencemedia.ca" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroBanner
        title="Diversified Excellence. Unified Vision."
        subtitle="The Credence Group is a diversified holding company with subsidiaries spanning real estate, finance, consulting, and media — united by a commitment to integrity and excellence."
        large
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/companies">Our Companies <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gold-light/30 text-white hover:bg-white/10" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </HeroBanner>

      {/* The Power of Credence */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">The Power of Credence</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            The Credence Group serves as the parent organization overseeing a portfolio of companies that operate across interconnected industries. Our structure enables each subsidiary to benefit from shared resources, cross-sector expertise, and a unified commitment to the highest standards of professionalism.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">Our Portfolio</h2>
            <p className="text-gold-light/70 max-w-xl mx-auto">Seven subsidiaries. One unified standard of excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((s) => (
              <Card key={s.name} className="group hover:shadow-xl transition-all bg-secondary/80 border-white/10 hover:border-primary/30">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-1 text-white">{s.name}</h3>
                  <p className="text-xs font-medium text-primary mb-2">{s.focus}</p>
                  <p className="text-sm text-white/70 leading-relaxed flex-1 mb-4">{s.mission}</p>
                  {s.url !== "#" && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-gold-light transition-colors"
                    >
                      Visit Website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/companies">Explore All Companies <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why the Group? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Why The Group?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The Credence Standard — built on synergy, integrity, and excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "The Credence Standard", desc: "Every subsidiary operates under a unified code of integrity, professionalism, and accountability that defines who we are." },
              { icon: Layers, title: "Vertical Integration", desc: "Our interconnected structure lets us control every stage of a project — from financing and design to construction and marketing." },
              { icon: Zap, title: "Cross-Sector Synergy", desc: "Each company strengthens the others. Shared expertise, resources, and networks create compounding value across the group." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Integrity in Ownership. Excellence in Execution.
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            Partner with The Credence Group for a future built on trust, innovation, and shared success.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
