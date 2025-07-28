import { ReactNode } from "react";

interface HeroBannerProps {
  backgroundImage: string;
  backgroundImage2x?: string;
  backgroundImageMobile?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: "full" | "large" | "medium";
  lazy?: boolean;
}

const HeroBanner = ({
  backgroundImage,
  backgroundImage2x,
  backgroundImageMobile,
  title,
  subtitle,
  children,
  height = "full",
  lazy = true,
}: HeroBannerProps) => {
  const heightClasses = {
    full: "min-h-[100dvh] pt-24", // fills the screen height minus fixed navbar
    large: "h-[80vh] pt-24",
    medium: "h-[50vh] pt-20",
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <picture>
          {backgroundImage2x && (
            <source
              media="(min-width: 1281px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 1281px) and (min-resolution: 192dpi)"
              srcSet={backgroundImage2x}
              type="image/webp"
            />
          )}
          <source
            media="(min-width: 768px)"
            srcSet={backgroundImage}
            type="image/webp"
          />
          {backgroundImageMobile && (
            <source
              media="(max-width: 767px)"
              srcSet={backgroundImageMobile}
              type="image/webp"
            />
          )}
          <img
            src={backgroundImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
            loading={lazy ? "lazy" : "eager"}
            decoding="async"
          />
        </picture>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up font-poppins">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 fade-in-up delay-200 font-inter leading-relaxed">
            {subtitle}
          </p>
        )}
        {/* Add spacing above children (e.g., button), not below whole section */}
        {children && (
          <div className="fade-in-up delay-400 mt-8 md:mt-12">
            {children}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
