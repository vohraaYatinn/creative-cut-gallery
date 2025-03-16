
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
        <div className="absolute inset-0 bg-black/70 z-10"></div>
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="lg:max-w-xl">
          <AnimatedSection animation="fade-in" delay={300}>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tighter">
              Garvit Rajput
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={600}>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Professional video editor with a passion for visual storytelling. Creating cinematic experiences that captivate and engage audiences.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={900}>
            <Button 
              onClick={scrollToWork}
              className="bg-[#65B741] hover:bg-[#65B741]/90 text-white px-8 py-6 rounded-sm text-lg font-medium"
            >
              Let's get started <ArrowRight className="ml-2" />
            </Button>
          </AnimatedSection>
        </div>
        
        <div className="hidden lg:flex justify-end">
          <AnimatedSection animation="fade-in" delay={600}>
            <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1580679420795-1c5c1cbef47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Garvit Rajput" 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
