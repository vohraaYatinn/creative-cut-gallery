
import React from "react";
import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-gray-950 text-white">
      <div className="page-section pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Interested in working together? Feel free to reach out for collaborations or just to say hello!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:contact@garvitrajput.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@garvitrajput.com</span>
              </a>
              
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Mumbai, India</span>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Garvit Rajput. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
