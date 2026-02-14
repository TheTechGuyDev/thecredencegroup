import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { CheckCircle2 } from "lucide-react";

const ServiceSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-12 border-b border-border last:border-0">
    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{title}</h3>
    {children}
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mt-4">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-muted-foreground">
        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Services = () => {
  return (
    <Layout>
      <HeroBanner title="Our Services" subtitle="Comprehensive solutions for project management and delivery across industries." />

      <div className="container mx-auto px-4 py-8">
        <ServiceSection title="Program & Project Management">
          <p className="text-muted-foreground leading-relaxed">
            Credence Consulting Corporation provides comprehensive program and project management services that ensure alignment with organizational goals, stakeholder expectations, and industry best practices. Our PMI-certified professionals bring extensive experience across multiple sectors.
          </p>
          <BulletList items={[
            "Strategic planning and program governance",
            "Scope, schedule, and cost management",
            "Risk identification, assessment, and mitigation",
            "Stakeholder engagement and communication management",
            "Performance monitoring and reporting",
            "Quality assurance and control",
          ]} />
        </ServiceSection>

        <ServiceSection title="Project Development">
          <p className="text-muted-foreground leading-relaxed">
            From initial concept through detailed planning, our project development services guide your project to execution-ready status. We provide the strategic framework and detailed analysis needed to make informed decisions.
          </p>
          <BulletList items={[
            "Feasibility studies and needs assessments",
            "Business case development",
            "Conceptual and preliminary engineering",
            "Environmental and regulatory assessments",
            "Procurement strategy and planning",
            "Budget development and cost estimation",
          ]} />
        </ServiceSection>

        <ServiceSection title="Project Delivery">
          <p className="text-muted-foreground leading-relaxed">
            We offer multiple project delivery models tailored to your project's unique requirements, risk profile, and organizational preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { title: "Construction Management", desc: "Owner-directed delivery with CM oversight for schedule, cost, and quality control." },
              { title: "Design-Build", desc: "Single-source responsibility combining design and construction under one contract." },
              { title: "Design-Bid-Build", desc: "Traditional approach with separate design and construction phases for maximum competition." },
              { title: "Engineer-Procure-Construct", desc: "Turnkey delivery for complex industrial and infrastructure projects." },
            ].map((m) => (
              <div key={m.title} className="p-5 rounded-lg bg-muted border border-border">
                <h4 className="font-serif font-bold text-foreground mb-2">{m.title}</h4>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </ServiceSection>

        <ServiceSection title="Safety & Environmental Management">
          <p className="text-muted-foreground leading-relaxed">
            Safety and environmental stewardship are integral to every project we manage. Our proactive approach minimizes risk, ensures regulatory compliance, and protects your workforce and the environment.
          </p>
          <BulletList items={[
            "Safety program development and implementation",
            "OSHA compliance and auditing",
            "Environmental impact assessments",
            "Hazardous materials management",
            "Emergency response planning",
            "Sustainability and green building integration",
          ]} />
        </ServiceSection>
      </div>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready to discuss your project?
          </h2>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
