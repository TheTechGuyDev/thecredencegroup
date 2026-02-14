import heroBg from "@/assets/hero-bg.jpg";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  large?: boolean;
  children?: React.ReactNode;
}

const HeroBanner = ({ title, subtitle, large = false, children }: HeroBannerProps) => {
  return (
    <section
      className={`relative bg-secondary text-secondary-foreground ${large ? "py-32 md:py-44" : "py-20 md:py-28"}`}
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-secondary/80" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className={`font-serif font-bold ${large ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"} mb-4`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`${large ? "text-lg md:text-xl" : "text-base md:text-lg"} text-secondary-foreground/80 max-w-2xl mx-auto`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroBanner;
