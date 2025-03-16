
import React, { useState, useRef, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnailUrl?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, thumbnailUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const generateThumbnail = (youtubeId: string) => {
    return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  };

  useEffect(() => {
    const img = new Image();
    img.src = thumbnailUrl || generateThumbnail(id);
    img.onload = () => setIsLoaded(true);
  }, [id, thumbnailUrl]);

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDialogOpen]);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeDialog();
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        className="video-hover rounded-lg overflow-hidden shadow-md bg-black h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openDialog}
      >
        <div className="relative aspect-video overflow-hidden cursor-pointer">
          {/* Thumbnail with lazy loading */}
          <img
            src={thumbnailUrl || generateThumbnail(id)}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              isHovered ? "scale-105" : "scale-100",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            loading="lazy"
          />
          
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-900 animate-pulse"></div>
          )}

          {/* Overlay */}
          <div className={cn(
            "absolute inset-0 video-overlay-hover flex items-center justify-center"
          )}>
            <div className={cn(
              "w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center",
              "transform transition-transform duration-300",
              isHovered ? "scale-100" : "scale-90 opacity-0"
            )}>
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-white font-medium text-lg line-clamp-1">{title}</h3>
        </div>
      </div>

      {/* Video Dialog */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={handleOutsideClick}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black shadow-2xl">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeDialog}
            >
              Close
            </button>
            <div className="w-full h-full">
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <a
              href={`https://www.youtube.com/shorts/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-12 right-0 text-white flex items-center gap-2 hover:text-gray-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Watch on YouTube <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
