import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Shuffle, Rocket, Award, Users, Briefcase, Building2, DollarSign, Film, Hammer, Handshake,
} from "lucide-react";

const whyCredence = [
  {
    icon: Shuffle,
    title: "Cross-Sector Mobility",
    desc: "Our unique structure allows professionals to collaborate across finance, real estate, consulting, construction, media, and investment sectors.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurial Culture",
    desc: "We empower our teams with autonomy, innovation, and the freedom to create meaningful impact.",
  },
  {
    icon: Award,
    title: "The Credence Standard",
    desc: "We hire for character and develop for excellence, ensuring every team member contributes to our culture of integrity and performance.",
  },
];

const opportunities = [
  { category: "Finance & Investment", group: "Credence Capital / Mortgages", icon: DollarSign },
  { category: "Real Estate & Brokerage", group: "Credence Realty / Real Estate", icon: Building2 },
  { category: "Architecture & Project Management", group: "Credence Design Build", icon: Hammer },
  { category: "Business Strategy & Operations", group: "Credence Consulting", icon: Briefcase },
  { category: "Creative & Digital Media", group: "Credence Media", icon: Film },
];

const Careers = () => {
  return (
    <Layout>
      <HeroBanner
        title="Build Your Future Within Our Ecosystem"
        subtitle="At The Credence Group, we invest in specialists, innovators, and leaders who are passionate about shaping the future."
        large
      />

      {/* Why Professionals Choose Credence */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">Careers</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Why Professionals Choose Credence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyCredence.map((item) => (
              <Card key={item.title} className="border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
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
          <div className="h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
            <Handshake className="h-7 w-7 text-primary" />
          </div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">Our Culture</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Synergy, Not Silos</h2>
          <p className="text-white/80 leading-relaxed text-lg">
            We believe the most innovative ideas emerge at the intersection of industries. At The Credence Group, architects collaborate with lenders, consultants partner with marketers, and investors learn from operators. This exchange of expertise creates a more dynamic, informed, and effective organization.
          </p>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">Now Hiring</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Current Opportunities</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Explore divisions across our portfolio of companies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {opportunities.map((group) => (
              <Card key={group.category} className="border-border hover:shadow-lg hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <group.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground leading-tight">{group.category}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 text-primary shrink-0" /> {group.group}
                  </p>
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
            Don't See Your Role?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            We are always looking for exceptional talent. Send your CV and a brief Value Statement to careers@credencegroup.com.
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
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Our Commitment to Diversity and Growth
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            The Credence Group is committed to fostering an inclusive environment where diverse perspectives drive innovation and success. We offer continuous professional development, meaningful career pathways, competitive benefits, and opportunities for leadership growth.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
