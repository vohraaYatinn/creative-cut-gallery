
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      window.scrollTo({
        top: workSection.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="/placeholder.svg"
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transition: "opacity 1s ease-in-out" 
          }}
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-4 md:px-8">
        <AnimatedSection animation="fade-in" delay={300}>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight">
            Crafting Visual Stories
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={600}>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-light text-balance">
            Professional video editor with an eye for detail and passion for storytelling through cinematography
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={900}>
          <button 
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 text-white border border-white/30 rounded-full px-6 py-3 button-hover hover:bg-white/10 transition-all duration-300"
          >
            View Work
          </button>
        </AnimatedSection>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center cursor-pointer animate-pulse"
        onClick={scrollToWork}
      >
        <span className="text-sm mb-2 opacity-80">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
