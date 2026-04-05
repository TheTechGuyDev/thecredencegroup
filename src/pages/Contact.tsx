import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <HeroBanner title="Contact Us" subtitle="Get in touch with The Credence Group." />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your inquiry..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground">inquiries@credencegroup.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Calgary, AB</p>
                  </div>
                </div>
              </div>

              <div className="rounded bg-secondary border border-white/10 h-64 flex items-center justify-center">
                <p className="text-white/60 text-sm">Map Placeholder — Calgary, AB</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
