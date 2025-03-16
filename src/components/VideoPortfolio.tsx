
import React from "react";
import AnimatedSection from "./AnimatedSection";
import VideoCard from "./VideoCard";

interface VideoItem {
  id: string;
  title: string;
}

const VideoPortfolio: React.FC = () => {
  const videos: VideoItem[] = [
    {
      id: "-ey6YBqVchs",
      title: "Cinematic Short Film"
    },
    {
      id: "MkeXX02FvYM",
      title: "Visual Storytelling"
    },
    {
      id: "wJK5ptn5icw",
      title: "Dynamic Action Sequence"
    },
    {
      id: "61DGriOluCk",
      title: "Atmospheric Scene"
    },
    {
      id: "7r37WN5FLXk",
      title: "Dramatic Moment"
    },
    {
      id: "-A36x_GhLp8",
      title: "Creative Transition"
    }
  ];

  return (
    <section id="work" className="page-section bg-gradient-to-b from-black to-gray-900">
      <AnimatedSection className="mb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2 inline-block">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Featured Work</h2>
        <p className="text-gray-400 max-w-2xl mx-auto md:text-lg">
          A showcase of my video editing projects demonstrating my creative range and technical expertise
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {videos.map((video, index) => (
          <AnimatedSection key={video.id} delay={index * 150}>
            <VideoCard
              id={video.id}
              title={video.title}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default VideoPortfolio;
