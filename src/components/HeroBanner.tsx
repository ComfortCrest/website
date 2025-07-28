import { ReactNode } from "react";

interface HeroBannerProps {
  backgroundImage: string;           // 1x base image for tablet/laptop
  backgroundImage2x?: string;        // 2x high-res image for large screens
  backgroundImageMobile?: string;    // mobile-specific image
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
  height = "large",
  lazy = true,
}: HeroBannerProps) => {
  const heightClasses = {
    full: "min-h-[100dvh]", // iPhone-safe viewport height
    large: "h-[70vh]",
    medium: "h-[50vh]",
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      
      {/* Wrapper div added for iPhone layout consistency */}
      <div className="absolute inset-0 w-full h-full z-0">
        <picture>
          {/* High-res desktop ≥1280px */}
          {backgroundImage2x && (
            <source
              media="(min-width: 1281px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 1281px) and (min-resolution: 192dpi)"
              srcSet={backgroundImage2x}
              type="image/webp"
            />
          )}

          {/* Mid-size screens: tablets/laptops (768px–1279px) */}
          <source
            media="(min-width: 768px)"
            srcSet={backgroundImage}
            type="image/webp"
          />

          {/* Mobile screens: <=767px */}
          {backgroundImageMobile && (
            <source
              media="(max-width: 767px)"
              srcSet={backgroundImageMobile}
              type="image/webp"
            />
          )}

          {/* Fallback */}
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

      {/* Text */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up font-poppins">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 fade-in-up delay-200 font-inter leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="fade-in-up delay-400">{children}</div>}
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
