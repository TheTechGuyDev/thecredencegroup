import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Target, Users, Award, ShieldCheck } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We are committed to delivering projects on time, within budget, and to the highest quality standards." },
  { icon: Users, title: "Client-Focused", desc: "Our success is measured by the success of our clients. We build lasting partnerships built on trust." },
  { icon: Award, title: "PMI-Certified", desc: "Our project managers hold PMI certifications, ensuring industry-leading expertise on every engagement." },
  { icon: ShieldCheck, title: "Safety First", desc: "We integrate safety and environmental stewardship into every phase of project planning and delivery." },
];

const About = () => {
  return (
    <Layout>
      <HeroBanner title="About Us" subtitle="Building trust through excellence in project management." />

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Credence Consulting Corporation is a professional project management and project delivery firm headquartered in Houston, Texas. We serve clients across the energy, infrastructure, commercial, and industrial sectors with a commitment to excellence, integrity, and results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a parent organization, Credence oversees a family of subsidiary companies, each specializing in complementary disciplines — from construction management to environmental services and technology solutions. This structure allows us to provide end-to-end support for complex, multi-disciplinary projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of PMI-certified professionals brings decades of combined experience in managing large-scale programs and projects. We pride ourselves on our ability to deliver predictable outcomes while adapting to the unique challenges of each engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Why Choose Credence?</h2>
          <ul className="space-y-4">
            {[
              "PMI-certified project management professionals on every engagement",
              "Multi-sector experience across energy, infrastructure, commercial, and industrial markets",
              "A family of subsidiary companies offering end-to-end project solutions",
              "Proven track record of delivering projects on time and within budget",
              "Client-centric approach with transparent communication and reporting",
              "Integrated safety and environmental management practices",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Leadership Team</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">Our experienced leadership team brings decades of industry expertise.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {["CEO & Founder", "VP of Operations", "Director of Project Management"].map((role) => (
              <div key={role} className="bg-background rounded-lg border border-border p-6">
                <div className="h-20 w-20 rounded-full bg-muted mx-auto mb-4" />
                <h4 className="font-serif font-bold text-foreground">Team Member</h4>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready to work with us?
          </h2>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
