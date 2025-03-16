
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
    <section id="work" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Case Studies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover my approach to visual storytelling through these selected works
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
      </div>
    </section>
  );
};

export default VideoPortfolio;
