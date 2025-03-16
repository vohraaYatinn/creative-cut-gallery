
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 relative">
      <Quote className="text-[#65B741] w-10 h-10 mb-4 opacity-40" />
      <p className="text-white/90 text-lg mb-6">{quote}</p>
      <div className="flex items-center">
        <div>
          <h4 className="font-medium text-white">{author}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Garvit's attention to detail and creative approach transformed our project into something truly special. His editing skills are exceptional.",
      author: "Rahul Sharma",
      role: "Marketing Director"
    },
    {
      quote: "Working with Garvit was a game-changer for our brand videos. He understands storytelling on a fundamental level.",
      author: "Priya Patel",
      role: "Content Creator"
    },
    {
      quote: "The quality of work delivered was outstanding. Garvit's technical skills combined with creative vision made all the difference.",
      author: "Vikram Singh",
      role: "Film Producer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What my clients have to say about working together
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
