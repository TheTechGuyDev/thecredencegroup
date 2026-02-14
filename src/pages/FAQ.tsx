import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Credence Consulting Corporation offer?",
    a: "We offer comprehensive project management and delivery services including program management, project development, project delivery (Construction Management, Design-Build, Design-Bid-Build, Engineer-Procure-Construct), and safety & environmental management.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve clients across the energy, infrastructure, commercial, and industrial sectors. Our multi-sector experience allows us to bring best practices from diverse industries to every engagement.",
  },
  {
    q: "Are your project managers certified?",
    a: "Yes. Our project managers hold PMI (Project Management Institute) certifications, including PMP and PgMP credentials, ensuring the highest standard of professional project management on every engagement.",
  },
  {
    q: "How do I get started with Credence?",
    a: "Simply reach out through our Contact Us page or call us directly. We'll schedule an initial consultation to understand your project needs and develop a tailored approach.",
  },
  {
    q: "What is your project delivery approach?",
    a: "We offer multiple delivery models tailored to your project's unique requirements. These include Construction Management, Design-Build, Design-Bid-Build, and Engineer-Procure-Construct, allowing flexibility based on your risk profile and goals.",
  },
  {
    q: "How does the subsidiary structure work?",
    a: "Credence Consulting Corporation operates as the parent company overseeing a family of subsidiary companies. Each subsidiary specializes in a complementary discipline, allowing us to provide end-to-end solutions for complex, multi-disciplinary projects.",
  },
  {
    q: "What makes Credence different from other consulting firms?",
    a: "Our combination of PMI-certified professionals, multi-sector experience, integrated subsidiary structure, and unwavering commitment to safety and client success sets us apart in the industry.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <HeroBanner title="Frequently Asked Questions" subtitle="Find answers to common questions about our services and approach." />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-serif text-base font-bold hover:no-underline text-foreground">
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
