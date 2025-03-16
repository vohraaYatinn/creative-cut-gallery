
import React from "react";
import AnimatedSection from "./AnimatedSection";

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
    },
    {
      name: "Amazon Prime Video",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/2560px-Amazon_Prime_Video_logo.svg.png"
    },
    {
      name: "Warner Bros",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1200px-Warner_Bros_logo.svg.png"
    },
    {
      name: "Sony Pictures",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Sony_Pictures_Television_logo.svg/2560px-Sony_Pictures_Television_logo.svg.png"
    },
    {
      name: "Disney+",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png"
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
                  className="max-h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 object-contain"
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
