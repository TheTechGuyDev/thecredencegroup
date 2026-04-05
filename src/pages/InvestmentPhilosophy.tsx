import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Layers, Lightbulb, TrendingUp, Zap, Award, User } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Capital Preservation", desc: "We prioritize protecting invested capital through diversified holdings, rigorous due diligence, and conservative risk management across all subsidiaries." },
  { icon: Layers, title: "Operational Synergy", desc: "Our vertically integrated structure allows each subsidiary to leverage shared resources, expertise, and networks — creating compounding value." },
  { icon: Lightbulb, title: "Creative Innovation", desc: "We foster a culture of innovation across every company, encouraging new approaches to real estate, finance, consulting, and media." },
];

const structureMatters = [
  { icon: TrendingUp, title: "Market Resilience", desc: "Diversification across multiple industries insulates the group from sector-specific downturns and creates stability." },
  { icon: Zap, title: "Streamlined Execution", desc: "Internal collaboration between subsidiaries eliminates third-party friction, reducing timelines and costs." },
  { icon: Award, title: "Unified Brand Equity", desc: "The Credence name carries consistent meaning — integrity, quality, and excellence — across every subsidiary and interaction." },
];

const InvestmentPhilosophy = () => {
  return (
    <Layout>
      <HeroBanner
        title="Investment Philosophy"
        subtitle="Integrated Verticality — our ecosystem approach to building lasting value."
      />

      {/* The Credence Ecosystem */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">The Credence Ecosystem</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            At The Credence Group, we believe that true value is created when complementary businesses work together under a unified vision. Our "Integrated Verticality" philosophy means that every subsidiary is connected — capital flows into real estate, which is built by our construction arm, financed by our lending division, and marketed by our media company.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            This isn't just diversification for its own sake — it's a deliberate, strategic ecosystem where each company strengthens the others.
          </p>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">Strategic Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pillars.map((p) => (
              <Card key={p.title} className="border-white/10 bg-secondary/80 text-center hover:border-primary/25 transition-colors">
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <p.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-white">{p.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Why Our Structure Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { role: "Founder & CEO", desc: "Visionary leader driving the strategic direction and growth of The Credence Group ecosystem." },
              { role: "Chief Strategy Officer", desc: "Oversees cross-subsidiary strategy, operational synergy, and long-term planning." },
            ].map((leader) => (
              <Card key={leader.role} className="border-white/10 bg-secondary/80 hover:border-primary/25 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-1 text-white">{leader.role}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{leader.desc}</p>
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
