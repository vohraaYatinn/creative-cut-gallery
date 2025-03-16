
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-right" | "fade-in-left";
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = "fade-in",
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-opacity duration-700 ease-out",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        animation: isVisible ? `${animation} 0.7s ease-out ${delay}ms forwards` : "none" 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
