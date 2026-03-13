import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

type ContentMap = Record<string, string>;

const DEFAULTS: ContentMap = {
  hero_title: "Credence Consulting Corporation",
  hero_subtitle: "Project Management & Project Delivery Professionals",
  hero_cta_text: "Our Services",
  hero_cta_url: "/services",
  cta_heading: "Our unique approach has helped our clients achieve Success!",
  cta_subtext: "Partner with Credence for reliable, professional project management and delivery.",
  cta_button_text: "Get Started Today",
  cta_button_url: "/contact",
  service_1_title: "Credence Consulting", service_1_desc: "Expert consulting services across industries, delivering strategic solutions for complex project challenges.",
  service_2_title: "Program Management", service_2_desc: "Comprehensive program management ensuring alignment with organizational goals and stakeholder expectations.",
  service_3_title: "Project Development", service_3_desc: "From feasibility studies to detailed planning, we guide projects from concept to execution-ready status.",
  service_4_title: "Project Delivery", service_4_desc: "Multiple delivery models including Construction Management, Design-Build, and Engineer-Procure-Construct.",
  service_5_title: "Safety & Environmental", service_5_desc: "Proactive safety management and environmental compliance integrated into every project phase.",
  subsidiary_1_name: "Credence Design Build", subsidiary_1_desc: "Full-service design-build construction solutions.", subsidiary_1_url: "https://credencedesignbuild.ca",
  subsidiary_2_name: "Innovate & Flourish", subsidiary_2_desc: "Innovation-driven consulting and business growth strategies.", subsidiary_2_url: "https://innovateandflourish.com",
  subsidiary_3_name: "The Credence Group", subsidiary_3_desc: "Integrated project management and advisory services.", subsidiary_3_url: "https://thecredencegroup.ca",
  subsidiary_4_name: "Credence Media", subsidiary_4_desc: "Corporate media, branding, and digital marketing solutions.", subsidiary_4_url: "https://credencemedia.ca",
};

export function useSiteContent() {
  const [content, setContent] = useState<ContentMap>(DEFAULTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("site_content").select("section_key, value");
      if (data && data.length > 0) {
        const map = { ...DEFAULTS };
        data.forEach((row: any) => { map[row.section_key] = row.value; });
        setContent(map);
      }
      setLoading(false);
    };
    load();
  }, []);

  const get = (key: string) => content[key] ?? DEFAULTS[key] ?? "";

  return { content, get, loading };
}
