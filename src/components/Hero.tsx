import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

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
      className="relative h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full scale-105"
          poster="/placeholder.svg"
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transition: "opacity 1.5s ease-in-out",
            transform: "scale(1.05)",
            filter: "brightness(0.9) contrast(1.1)"
          }}
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Elements */}
      <div className="absolute inset-0 z-10 opacity-40">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="lg:max-w-xl">
          <AnimatedSection animation="fade-up" delay={300}>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tighter">
              <span >Garvit</span> Rajput
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Professional video editor with a passion for visual storytelling. Creating cinematic experiences that captivate and engage audiences.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={900}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToWork}
                className="bg-[#65B741] hover:bg-[#65B741]/90 text-white px-8 py-6 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#65B741]/20 hover:translate-y-[-2px]"
              >
                View my work <ArrowRight className="ml-2 animate-pulse" />
              </Button>
            
            </div>
          </AnimatedSection>
        </div>
        
        <div className="hidden lg:flex justify-end">
          <AnimatedSection animation="fade-left" delay={600}>
            <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-4 border-[#65B741]/30 shadow-2xl shadow-[#65B741]/20 transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 from-[#65B741]/20 to-transparent z-10"></div>
              <img 
                src="https://t3.ftcdn.net/jpg/03/97/28/72/360_F_397287263_ygZgewKcJm8bLTYkaEuHYUNTM6ptx2Bl.jpg" 
                alt="Garvit Rajput" 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
