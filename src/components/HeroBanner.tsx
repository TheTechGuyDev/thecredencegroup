import heroBg from "@/assets/hero-bg.jpg";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  large?: boolean;
  children?: React.ReactNode;
  backgroundUrl?: string;
}

const HeroBanner = ({ title, subtitle, large = false, children, backgroundUrl }: HeroBannerProps) => {
  const bgImage = backgroundUrl || heroBg;

  return (
    <section
      className={`relative text-white ${large ? "pt-40 pb-20 md:pt-48 md:pb-28" : "pt-32 pb-16 md:pt-40 md:pb-20"}`}
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-secondary/90" />
      <div className="relative container mx-auto px-4 md:px-8 text-center">
        <h1 className={`font-serif font-bold ${large ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"} mb-4`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`${large ? "text-lg md:text-xl" : "text-base md:text-lg"} text-white/80 max-w-2xl mx-auto`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroBanner;
