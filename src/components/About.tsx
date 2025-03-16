
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Film, Briefcase, Award } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    "Video Editing",
    "Color Grading",
    "Motion Graphics",
    "Visual Effects",
    "Sound Design",
    "Storytelling",
    "Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Final Cut Pro"
  ];

  return (
    <section id="about" className="page-section bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <AnimatedSection animation="fade-in-right">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gray-100 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gray-100 rounded-lg -z-10"></div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1580679420795-1c5c1cbef47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Garvit Rajput" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in-left">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-gray-500">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Garvit Rajput</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a professional video editor with a passion for visual storytelling and cinematic excellence. Currently pursuing my MBA, I blend creative expertise with business acumen to deliver compelling video content that resonates with audiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Education</h4>
                  <p className="text-gray-600 text-sm">Pursuing MBA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Film className="w-5 h-5 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Expertise</h4>
                  <p className="text-gray-600 text-sm">Pro Video Editor</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Experience</h4>
                  <p className="text-gray-600 text-sm">5+ Years Professional</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Achievements</h4>
                  <p className="text-gray-600 text-sm">Multiple Award Winner</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
