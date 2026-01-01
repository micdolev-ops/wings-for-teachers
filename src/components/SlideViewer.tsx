import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideViewerProps {
  slides: string[];
  title?: string;
  /** 1-indexed slide numbers that should be rotated 180° */
  rotate180Slides?: number[];
}

const SlideViewer = ({ slides, title, rotate180Slides }: SlideViewerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") prevSlide();
    if (e.key === "ArrowLeft") nextSlide();
    if (e.key === "Escape") setIsFullscreen(false);
  };

  return (
    <>
      <div 
        className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-border/30"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Title */}
        {title && (
          <div className="px-4 py-3 bg-gradient-to-r from-secondary/20 to-primary/10 border-b border-border/30">
            <h4 className="text-sm font-medium text-foreground">{title}</h4>
          </div>
        )}

        {/* Slide Container */}
        <div className="relative aspect-[16/9] bg-black">
          <img
            src={slides[currentSlide]}
            alt={`שקופית ${currentSlide + 1}`}
            className={cn(
              "w-full h-full object-contain",
              rotate180Slides?.includes(currentSlide + 1) && "rotate-180"
            )}
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="שקופית הבאה"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="שקופית קודמת"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-2 left-2 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="מסך מלא"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Counter & Dots */}
        <div className="px-4 py-3 flex items-center justify-between bg-black/10">
          <span className="text-xs text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </span>
          <div className="flex gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentSlide 
                    ? "bg-secondary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`עבור לשקופית ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black flex flex-col"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
        >
          {/* Top bar */}
          <div className="flex items-center justify-between p-4">
            <div className="text-white text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="סגור"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main slide area */}
          <div className="flex-1 flex items-center justify-center px-16 pb-8 relative">
            <img
              src={slides[currentSlide]}
              alt={`שקופית ${currentSlide + 1}`}
              className={cn(
                "max-w-full max-h-full object-contain",
                rotate180Slides?.includes(currentSlide + 1) && "rotate-180"
              )}
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors"
              aria-label="שקופית הבאה"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors"
              aria-label="שקופית קודמת"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          </div>

          {/* Bottom thumbnails/dots */}
          <div className="p-4 flex justify-center gap-2 flex-wrap">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentSlide 
                    ? "bg-white scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`עבור לשקופית ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SlideViewer;
