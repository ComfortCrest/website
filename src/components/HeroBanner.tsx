import { ReactNode } from "react";

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: "full" | "large" | "medium";
}

const HeroBanner = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  children, 
  height = "large" 
}: HeroBannerProps) => {
  const heightClasses = {
    full: "h-screen",
    large: "h-[70vh]",
    medium: "h-[50vh]"
  };

  return (
    <section 
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 hero-overlay"></div> */}
      
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
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
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;