
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoPortfolio from "@/components/VideoPortfolio";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        {/* <Clients /> */}
        <VideoPortfolio />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
