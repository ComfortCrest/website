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
    full: "min-h-[100dvh]", // Full viewport height
    large: "min-h-[90vh]",
    medium: "h-[70vh]",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} pt-20 flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <picture>
          {backgroundImage2x && (
            <source
              media="(min-width: 1281px) and (-webkit-min-device-pixel-ratio:2)"
              srcSet={backgroundImage2x}
              type="image/webp"
            />
          )}
          <source media="(min-width:768px)" srcSet={backgroundImage} type="image/webp" />
          {backgroundImageMobile && (
            <source media="(max-width:767px)" srcSet={backgroundImageMobile} type="image/webp" />
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

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="text-lg md:text-2xl mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default HeroBanner;
