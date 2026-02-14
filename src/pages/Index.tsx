import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import {
  Briefcase, Building2, HardHat, ShieldCheck, ClipboardList, ExternalLink, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Briefcase, title: "Credence Consulting", desc: "Expert consulting services across industries, delivering strategic solutions for complex project challenges." },
  { icon: ClipboardList, title: "Program Management", desc: "Comprehensive program management ensuring alignment with organizational goals and stakeholder expectations." },
  { icon: Building2, title: "Project Development", desc: "From feasibility studies to detailed planning, we guide projects from concept to execution-ready status." },
  { icon: HardHat, title: "Project Delivery", desc: "Multiple delivery models including Construction Management, Design-Build, and Engineer-Procure-Construct." },
  { icon: ShieldCheck, title: "Safety & Environmental", desc: "Proactive safety management and environmental compliance integrated into every project phase." },
];

const subsidiaries = [
  { name: "Credence Construction", desc: "Full-service construction management and general contracting solutions.", url: "#" },
  { name: "Credence Energy", desc: "Energy sector project management and infrastructure development.", url: "#" },
  { name: "Credence Environmental", desc: "Environmental consulting, compliance, and remediation services.", url: "#" },
  { name: "Credence Technology", desc: "Technology-driven solutions for project optimization and data analytics.", url: "#" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroBanner
        title="Credence Consulting Corporation"
        subtitle="Project Management & Project Delivery Professionals"
        large
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </HeroBanner>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive project management and delivery solutions across multiple industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="group hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Our Subsidiaries</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Explore our family of companies delivering specialized solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subsidiaries.map((sub) => (
              <Card key={sub.name} className="group hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{sub.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{sub.desc}</p>
                  <a
                    href={sub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Visit Website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/subsidiaries">View All Subsidiaries <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Our unique approach has helped our clients achieve Success!
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Partner with Credence for reliable, professional project management and delivery.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
