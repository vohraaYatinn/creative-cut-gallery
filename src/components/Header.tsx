
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
            ? "bg-white/80 backdrop-blur-lg shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-display font-semibold tracking-tighter"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <span 
              className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              Garvit Rajput
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {["work", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={cn(
                  "capitalize text-sm font-medium button-hover",
                  isScrolled ? "text-black" : "text-white"
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors",
              isScrolled ? "text-black hover:bg-gray-200" : "text-white hover:bg-white/10"
            )}
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
          {["work", "about", "contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
              className={cn(
                "text-2xl text-white font-display capitalize",
                "opacity-0 transition-opacity duration-300",
                isMobileMenuOpen && `opacity-100 transition-delay-${i * 100}`
              )}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${i * 100}ms` : "0ms"
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
