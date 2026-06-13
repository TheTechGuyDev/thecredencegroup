import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield, Layers, Lightbulb, TrendingUp, Zap, Award,
  Network, Briefcase, Gauge, Telescope,
} from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Capital Preservation",
    desc: "We prioritize long-term stability over short-term volatility. Every investment, acquisition, and strategic initiative is evaluated through the lens of sustainable value creation and disciplined risk management.",
  },
  {
    icon: Layers,
    title: "Operational Synergy",
    desc: "Our subsidiaries leverage each other's expertise to solve challenges, accelerate execution, and create efficiencies that would be impossible in a fragmented business structure.",
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    desc: "Through strategic marketing, modern communication, and forward-thinking leadership, we ensure our companies remain relevant, competitive, and positioned for future growth.",
  },
];

const structureMatters = [
  {
    icon: TrendingUp,
    title: "Market Resilience",
    desc: "When one industry experiences market headwinds, our diversified holdings provide stability through multiple revenue streams and complementary business sectors.",
  },
  {
    icon: Zap,
    title: "Streamlined Execution",
    desc: "Our integrated ecosystem allows projects to move from concept to completion with greater speed, consistency, and accountability.",
  },
  {
    icon: Award,
    title: "Unified Brand Equity",
    desc: "The Credence name represents integrity, excellence, and trust across every market in which we operate.",
  },
];

const advantages = [
  { icon: Network, title: "Vertical Integration", desc: "We control quality throughout the entire value chain." },
  { icon: Briefcase, title: "Diverse Expertise", desc: "Seven specialized industries operating under one unified standard." },
  { icon: Gauge, title: "Operational Efficiency", desc: "Internal collaboration reduces costs and accelerates timelines." },
  { icon: Telescope, title: "Long-Term Vision", desc: "We build businesses, assets, and partnerships designed to create lasting value." },
];

const InvestmentPhilosophy = () => {
  return (
    <Layout>
      <HeroBanner
        title="The Credence Ecosystem"
        subtitle="Most holding companies are passive observers. The Credence Group is an active architect. Our philosophy is rooted in Integrated Verticality, where each subsidiary contributes to a unified ecosystem designed to maximize value, eliminate friction, and accelerate growth."
        large
      />

      {/* Our Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">Our Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Integrated Verticality</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            The Credence Group believes that the greatest value is created when expertise, capital, and execution operate within a unified structure. By owning and coordinating the lifecycle of an asset—from acquisition and financing to development, marketing, advisory, and sale—we eliminate inefficiencies and create superior outcomes.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our ecosystem allows each subsidiary to operate independently while contributing to a larger strategic vision. This structure creates stronger performance, greater resilience, and sustainable long-term growth.
          </p>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">The Foundation</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">Strategic Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((p) => (
              <Card key={p.title} className="border-white/10 bg-secondary/80 text-center hover:border-primary/25 transition-colors">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <p.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-3 text-white">{p.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Structure Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">Built To Endure</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Why Our Structure Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {structureMatters.map((s) => (
              <div key={s.title} className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Credence Advantage */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">What Sets Us Apart</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">The Credence Advantage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((a) => (
              <Card key={a.title} className="border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center mb-4">
                    <a.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestmentPhilosophy;
