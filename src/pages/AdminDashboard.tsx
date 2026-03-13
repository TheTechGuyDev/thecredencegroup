import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Save, Upload, Loader2 } from "lucide-react";

type ContentMap = Record<string, string>;

const CONTENT_KEYS = {
  hero: ["hero_title", "hero_subtitle", "hero_cta_text", "hero_cta_url"],
  cta: ["cta_heading", "cta_subtext", "cta_button_text", "cta_button_url"],
  services: [
    "service_1_title", "service_1_desc",
    "service_2_title", "service_2_desc",
    "service_3_title", "service_3_desc",
    "service_4_title", "service_4_desc",
    "service_5_title", "service_5_desc",
  ],
  subsidiaries: [
    "subsidiary_1_name", "subsidiary_1_desc", "subsidiary_1_url",
    "subsidiary_2_name", "subsidiary_2_desc", "subsidiary_2_url",
    "subsidiary_3_name", "subsidiary_3_desc", "subsidiary_3_url",
    "subsidiary_4_name", "subsidiary_4_desc", "subsidiary_4_url",
  ],
};

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

const AdminDashboard = () => {
  const [content, setContent] = useState<ContentMap>({ ...DEFAULTS });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [heroPreview, setHeroPreview] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    loadContent();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/admin/login"); return; }
    const { data } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle();
    if (!data) { navigate("/admin/login"); return; }
  };

  const loadContent = async () => {
    const { data } = await supabase.from("site_content").select("section_key, value");
    if (data) {
      const map: ContentMap = { ...DEFAULTS };
      data.forEach((row: any) => { map[row.section_key] = row.value; });
      setContent(map);
      // Load image previews
      if (map["hero_image_url"]) setHeroPreview(map["hero_image_url"]);
      if (map["logo_url"]) setLogoPreview(map["logo_url"]);
    }
    setLoading(false);
  };

  const handleChange = (key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  const saveSection = async (keys: string[]) => {
    setSaving(true);
    try {
      for (const key of keys) {
        const val = content[key] ?? DEFAULTS[key] ?? "";
        const { error } = await supabase.from("site_content").upsert(
          { section_key: key, content_type: key.includes("url") ? "url" : "text", value: val },
          { onConflict: "section_key" }
        );
        if (error) throw error;
      }
      toast({ title: "Saved!", description: "Content updated successfully." });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
    setSaving(false);
  };

  const handleImageUpload = async (file: File, path: string, setPreview: (url: string) => void, contentKey: string) => {
    const setter = path.includes("hero") ? setUploadingHero : setUploadingLogo;
    setter(true);
    try {
      const ext = file.name.split(".").pop();
      const filePath = `${path}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("site-assets").upload(filePath, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data: urlData } = supabase.storage.from("site-assets").getPublicUrl(filePath);
      const publicUrl = urlData.publicUrl + "?t=" + Date.now();
      setPreview(publicUrl);
      // Save to site_content
      await supabase.from("site_content").upsert(
        { section_key: contentKey, content_type: "image_url", value: publicUrl },
        { onConflict: "section_key" }
      );
      toast({ title: "Uploaded!", description: "Image updated successfully." });
    } catch (err: any) {
      toast({ title: "Upload failed", description: err.message, variant: "destructive" });
    }
    setter(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const field = (key: string, label: string, multiline = false) => (
    <div className="space-y-2" key={key}>
      <Label htmlFor={key}>{label}</Label>
      {multiline ? (
        <Textarea id={key} value={content[key] ?? ""} onChange={(e) => handleChange(key, e.target.value)} rows={3} />
      ) : (
        <Input id={key} value={content[key] ?? ""} onChange={(e) => handleChange(key, e.target.value)} />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-muted">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-serif font-bold">Credence Admin Dashboard</h1>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-secondary-foreground hover:text-primary">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="subsidiaries">Subsidiaries</TabsTrigger>
            <TabsTrigger value="cta">CTA Banner</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
          </TabsList>

          {/* Hero Section */}
          <TabsContent value="hero">
            <Card>
              <CardHeader><CardTitle className="font-serif">Hero Section</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {field("hero_title", "Title")}
                {field("hero_subtitle", "Subtitle")}
                {field("hero_cta_text", "CTA Button Text")}
                {field("hero_cta_url", "CTA Button URL")}
                <Button onClick={() => saveSection(CONTENT_KEYS.hero)} disabled={saving}>
                  <Save className="h-4 w-4 mr-2" /> {saving ? "Saving..." : "Save Hero"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services">
            <Card>
              <CardHeader><CardTitle className="font-serif">Services</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-4 border border-border rounded-lg space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground">Service {i}</h4>
                    {field(`service_${i}_title`, "Title")}
                    {field(`service_${i}_desc`, "Description", true)}
                  </div>
                ))}
                <Button onClick={() => saveSection(CONTENT_KEYS.services)} disabled={saving}>
                  <Save className="h-4 w-4 mr-2" /> {saving ? "Saving..." : "Save Services"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subsidiaries */}
          <TabsContent value="subsidiaries">
            <Card>
              <CardHeader><CardTitle className="font-serif">Subsidiaries</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4 border border-border rounded-lg space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground">Subsidiary {i}</h4>
                    {field(`subsidiary_${i}_name`, "Name")}
                    {field(`subsidiary_${i}_desc`, "Description", true)}
                    {field(`subsidiary_${i}_url`, "Website URL")}
                  </div>
                ))}
                <Button onClick={() => saveSection(CONTENT_KEYS.subsidiaries)} disabled={saving}>
                  <Save className="h-4 w-4 mr-2" /> {saving ? "Saving..." : "Save Subsidiaries"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CTA Banner */}
          <TabsContent value="cta">
            <Card>
              <CardHeader><CardTitle className="font-serif">CTA Banner</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {field("cta_heading", "Heading")}
                {field("cta_subtext", "Subtext", true)}
                {field("cta_button_text", "Button Text")}
                {field("cta_button_url", "Button URL")}
                <Button onClick={() => saveSection(CONTENT_KEYS.cta)} disabled={saving}>
                  <Save className="h-4 w-4 mr-2" /> {saving ? "Saving..." : "Save CTA"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Images */}
          <TabsContent value="images">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="font-serif">Hero Background</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {heroPreview && <img src={heroPreview} alt="Hero preview" className="w-full h-40 object-cover rounded-md" />}
                  <div>
                    <Label htmlFor="hero-upload">Upload New Image</Label>
                    <Input
                      id="hero-upload"
                      type="file"
                      accept="image/*"
                      className="mt-2"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file, "hero-bg", setHeroPreview, "hero_image_url");
                      }}
                    />
                  </div>
                  {uploadingHero && <p className="text-sm text-muted-foreground flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Uploading...</p>}
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="font-serif">Logo</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {logoPreview && <img src={logoPreview} alt="Logo preview" className="h-20 object-contain" />}
                  <div>
                    <Label htmlFor="logo-upload">Upload New Logo</Label>
                    <Input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      className="mt-2"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file, "logo", setLogoPreview, "logo_url");
                      }}
                    />
                  </div>
                  {uploadingLogo && <p className="text-sm text-muted-foreground flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Uploading...</p>}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
