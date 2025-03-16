
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-black/90 backdrop-blur-lg shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-display font-bold tracking-tight text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            Garvit Rajput
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {[
              { name: "Home", id: "hero" },
              { name: "Case Studies", id: "work" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Recent Work", id: "work" },
              { name: "Get In Touch", id: "contact" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.443 5.35c.639 0 1.23.05 1.76.198.53.148.985.395 1.351.742.366.347.64.84.837 1.377.198.537.296 1.18.296 1.928 0 .907-.197 1.614-.592 2.151-.394.537-.986.923-1.76 1.207.85.247 1.477.742 1.879 1.38.398.636.597 1.423.597 2.356 0 .907-.148 1.662-.444 2.257-.296.595-.69 1.074-1.188 1.431-.493.357-1.087.617-1.683.766-.596.15-1.226.222-1.879.222H2V5.35h5.443zm-.3 5.75c.542 0 .987-.137 1.338-.415.345-.277.517-.767.517-1.439 0-.37-.068-.677-.203-.91-.14-.234-.324-.423-.56-.561a2.083 2.083 0 0 0-.788-.277 4.933 4.933 0 0 0-.887-.074H4.71v3.676h2.433zm.173 6.05c.345 0 .664-.033.953-.097.29-.064.54-.175.739-.333.2-.158.358-.369.468-.637.111-.268.173-.618.173-1.053 0-.838-.228-1.433-.69-1.776-.46-.343-1.093-.517-1.905-.517h-2.64v4.413h2.902zm8.779-11.723c.493 0 .937.037 1.333.117.395.08.739.204 1.027.37.29.17.517.393.69.677.17.283.256.64.256 1.07 0 .463-.118.87-.354 1.213-.232.343-.61.63-1.126.86.677.197 1.183.529 1.513.984.331.457.497 1.01.497 1.662 0 .524-.1.968-.296 1.327a2.362 2.362 0 0 1-.79.853c-.338.235-.717.403-1.14.508-.425.105-.866.158-1.338.158h-4.994V5.427h4.723zm-.197 4.778c.46 0 .825-.112 1.089-.339.264-.226.394-.58.394-1.053 0-.27-.05-.487-.147-.65a.975.975 0 0 0-.369-.394 1.43 1.43 0 0 0-.517-.197 3.43 3.43 0 0 0-.59-.049h-2.151v2.682h2.29zm.271 5.06c.226 0 .445-.016.65-.05.207-.033.394-.098.56-.197.168-.097.306-.234.417-.415.11-.18.17-.426.17-.731 0-.58-.165-.993-.493-1.24-.331-.246-.763-.369-1.298-.369h-2.567v3.002h2.561zm-7.302-9.838h5.2v1.313h-5.2V5.427z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-10">
          {[
            { name: "Home", id: "hero" },
            { name: "Case Studies", id: "work" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Recent Work", id: "work" },
            { name: "Get In Touch", id: "contact" }
          ].map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={cn(
                "text-2xl text-white font-display",
                "opacity-0 transition-opacity duration-300",
                isMobileMenuOpen && `opacity-100 transition-delay-${i * 100}`
              )}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${i * 100}ms` : "0ms"
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
