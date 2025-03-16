
import React from "react";
import AnimatedSection from "./AnimatedSection";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Brand 1",
      logo: logo1
    },
    {
      name: "Brand 2",
      logo: logo2
    },
    {
      name: "Brand 3",
      logo: logo3
    },
    {
      name: "Brand 4",
      logo: logo4
    },
    {
      name: "Brand 5",
      logo: logo5
    }
  ];

  return (
    <section className="py-16 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection className="mb-12">
          <h3 className="text-xl text-center text-white/80 mb-10">Worked with</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Clients;
