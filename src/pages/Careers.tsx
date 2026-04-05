import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Shuffle, Rocket, Award, Users, Briefcase, Building2, DollarSign, Film,
} from "lucide-react";

const whyCredence = [
  { icon: Shuffle, title: "Cross-Sector Mobility", desc: "Move between subsidiaries and industries. Your career isn't limited to one company — it spans an entire ecosystem." },
  { icon: Rocket, title: "Entrepreneurial Culture", desc: "We encourage initiative, innovation, and ownership at every level. If you have an idea, you'll have the platform to pursue it." },
  { icon: Award, title: "The Credence Standard", desc: "Work alongside professionals who hold themselves to the highest standards of integrity, quality, and accountability." },
];

const opportunities = [
  { category: "Real Estate & Development", roles: ["Property Analyst", "Project Manager", "Site Supervisor", "Development Coordinator"], icon: Building2 },
  { category: "Finance & Lending", roles: ["Mortgage Specialist", "Financial Analyst", "Underwriter", "Portfolio Manager"], icon: DollarSign },
  { category: "Consulting & Strategy", roles: ["Business Consultant", "Strategy Analyst", "Operations Manager"], icon: Briefcase },
  { category: "Media & Marketing", roles: ["Content Creator", "Brand Strategist", "Digital Marketing Specialist"], icon: Film },
];

const Careers = () => {
  return (
    <Layout>
      <HeroBanner
        title="Build Your Future Within Our Ecosystem"
        subtitle="Join The Credence Group and grow your career across seven interconnected companies."
      />

      {/* Why Professionals Choose Credence */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Why Professionals Choose Credence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyCredence.map((item) => (
              <Card key={item.title} className="border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Our Culture: Synergy, Not Silos</h2>
          <p className="text-gold-light/70 leading-relaxed text-lg mb-4">
            At The Credence Group, we don't believe in isolated departments or rigid hierarchies. Our culture is built on collaboration across subsidiaries, open communication, and a shared commitment to excellence.
          </p>
          <p className="text-gold-light/70 leading-relaxed text-lg">
            Whether you're in real estate, finance, consulting, or media — you're part of one team with one vision.
          </p>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Current Opportunities</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Explore roles across our portfolio of companies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {opportunities.map((group) => (
              <Card key={group.category} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                      <group.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">{group.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.roles.map((role) => (
                      <li key={role} className="text-sm text-muted-foreground flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" /> {role}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Application CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Don't See Your Role? Apply Anyway.
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            We're always looking for talented professionals who share our values. Send your resume and tell us how you'd contribute to the Credence ecosystem.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="mailto:careers@credencegroup.com">careers@credencegroup.com</a>
          </Button>
        </div>
      </section>

      {/* Diversity */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Users className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Diversity & Growth Commitment</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Credence Group is committed to building a diverse, inclusive, and equitable workplace. We believe that varied perspectives drive innovation and that every team member deserves the opportunity to grow, lead, and succeed.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
