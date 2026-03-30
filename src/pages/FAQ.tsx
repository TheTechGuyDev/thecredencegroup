import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is The Credence Group?",
    a: "The Credence Group is a diversified holding company with seven subsidiaries operating across real estate, finance, consulting, and media industries — all united by a commitment to integrity and excellence.",
  },
  {
    q: "How are the subsidiaries connected?",
    a: "Our subsidiaries operate under an 'Integrated Verticality' model. Capital flows into real estate, which is built by our construction arm, financed by our lending division, and marketed by our media company — creating a complete value chain.",
  },
  {
    q: "Where is The Credence Group headquartered?",
    a: "The Credence Group is headquartered in Calgary, Alberta, Canada.",
  },
  {
    q: "How can I invest with Credence Capital?",
    a: "For private equity and investment inquiries, please contact us at inquiries@credencegroup.com and our capital team will be in touch.",
  },
  {
    q: "Are you hiring?",
    a: "Yes! We are always looking for talented professionals across all subsidiaries. Visit our Careers page or send your resume to careers@credencegroup.com.",
  },
  {
    q: "How do I contact a specific subsidiary?",
    a: "You can reach out via our Contact page or visit the individual subsidiary website from the Our Companies page. General inquiries can be sent to inquiries@credencegroup.com.",
  },
  {
    q: "What industries does The Credence Group operate in?",
    a: "We operate across property acquisition, real estate brokerage, land development & construction, mortgage financing & private lending, private equity, business advisory & strategy, and marketing & content.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <HeroBanner title="Frequently Asked Questions" subtitle="Find answers to common questions about The Credence Group." />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-serif font-bold text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
