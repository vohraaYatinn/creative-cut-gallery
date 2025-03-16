
import React from "react";
import AnimatedSection from "./AnimatedSection";

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Brand 1",
      logo: "https://dummyimage.com/200x80/4A4A4A/ffffff&text=Brand+1"
    },
    {
      name: "Brand 2",
      logo: "https://dummyimage.com/200x80/4A4A4A/ffffff&text=Brand+2"
    },
    {
      name: "Brand 3",
      logo: "https://dummyimage.com/200x80/4A4A4A/ffffff&text=Brand+3"
    },
    {
      name: "Brand 4",
      logo: "https://dummyimage.com/200x80/4A4A4A/ffffff&text=Brand+4"
    },
    {
      name: "Brand 5",
      logo: "https://dummyimage.com/200x80/4A4A4A/ffffff&text=Brand+5"
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
