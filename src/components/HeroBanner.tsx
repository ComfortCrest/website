import { ReactNode } from "react";

interface HeroBannerProps {
  backgroundImage: string;           // 1x image
  backgroundImage2x?: string;        // 2x image for retina
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: "full" | "large" | "medium";
  lazy?: boolean;                    // optional lazy toggle
}

const HeroBanner = ({
  backgroundImage,
  backgroundImage2x,
  title,
  subtitle,
  children,
  height = "large",
  lazy = true,
}: HeroBannerProps) => {
  const heightClasses = {
    full: "h-screen",
    large: "h-[70vh]",
    medium: "h-[50vh]"
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      
      {/* Responsive Lazy Image */}
      <img
        src={backgroundImage}
        srcSet={backgroundImage2x ? `${backgroundImage2x} 2x` : undefined}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading={lazy ? "lazy" : "eager"}
        fetchPriority={lazy ? "auto" : "high"}
        decoding="async"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up font-poppins">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 fade-in-up delay-200 font-inter leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="fade-in-up delay-400">
            {children}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
