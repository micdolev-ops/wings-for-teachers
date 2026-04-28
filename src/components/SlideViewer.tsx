import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, RotateCw, X } from "lucide-react";
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
  const [rotate180, setRotate180] = useState<number[]>([]);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const storageKey = `slideviewer:rotate180:${title ?? "slides"}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setRotate180(parsed.filter((n) => Number.isFinite(n)) as number[]);
          return;
        }
      }
    } catch {
      // ignore
    }

    setRotate180(rotate180Slides ?? []);
  }, [storageKey, rotate180Slides]);

  const toggleRotateCurrent = () => {
    const slideNumber = currentSlide + 1;

    setRotate180((prev) => {
      const next = prev.includes(slideNumber)
        ? prev.filter((n) => n !== slideNumber)
        : [...prev, slideNumber].sort((a, b) => a - b);

      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // ignore
      }

      return next;
    });
  };

  const nextSlide = () => {
    setDirection("next");
    setAnimKey((k) => k + 1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setAnimKey((k) => k + 1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setAnimKey((k) => k + 1);
    setCurrentSlide(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") prevSlide();
    if (e.key === "ArrowLeft") nextSlide();
    if (e.key === "Escape") setIsFullscreen(false);
  };

  // Global keyboard listener for fullscreen mode
  useEffect(() => {
    if (!isFullscreen) return;

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") prevSlide();
      if (e.key === "ArrowLeft") nextSlide();
      if (e.key === "Escape") setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isFullscreen]);

  // Focus fullscreen container when opened
  useEffect(() => {
    if (isFullscreen && fullscreenRef.current) {
      fullscreenRef.current.focus();
    }
  }, [isFullscreen]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left (RTL: next slide)
        nextSlide();
      } else {
        // Swiped right (RTL: previous slide)
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  // Click on left/right half of screen to navigate
  const handleSlideAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const halfWidth = rect.width / 2;

    // RTL: click right half = prev, click left half = next
    if (clickX > halfWidth) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const shouldRotate = (slideIndex: number) => {
    return rotate180.includes(slideIndex + 1);
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
            key={animKey}
            src={slides[currentSlide]}
            alt={`שקופית ${currentSlide + 1}`}
            className={cn(
              "w-full h-full object-contain",
              shouldRotate(currentSlide) && "rotate-180",
              !reducedMotion && (direction === "next" ? "animate-slide-fade-next" : "animate-slide-fade-prev")
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

          {/* Rotate Button */}
          <button
            onClick={toggleRotateCurrent}
            className="absolute top-2 right-2 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label={shouldRotate(currentSlide) ? "בטל סיבוב 180°" : "סובב 180°"}
            aria-pressed={shouldRotate(currentSlide)}
          >
            <RotateCw className="w-4 h-4" />
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
                onClick={() => goToSlide(index)}
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
          ref={fullscreenRef}
          className="fixed inset-0 z-[9999] bg-neutral-900 flex flex-col"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between p-3 sm:p-4 bg-black/50">
            <div className="text-white text-sm">
              {currentSlide + 1} / {slides.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleRotateCurrent}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={shouldRotate(currentSlide) ? "בטל סיבוב 180°" : "סובב 180°"}
                aria-pressed={shouldRotate(currentSlide)}
              >
                <RotateCw className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="סגור"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main slide area - clickable for navigation */}
          <div 
            className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-8 relative cursor-pointer"
            onClick={handleSlideAreaClick}
          >
            {/* White background wrapper for the slide */}
            <div className="bg-white rounded-lg shadow-2xl max-w-full max-h-full overflow-hidden">
              <img
                src={slides[currentSlide]}
                alt={`שקופית ${currentSlide + 1}`}
                className={cn(
                  "max-w-full max-h-[calc(100vh-160px)] object-contain",
                  shouldRotate(currentSlide) && "rotate-180"
                )}
              />
            </div>

            {/* Navigation Arrows - larger and more visible */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
              aria-label="שקופית הבאה"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
              aria-label="שקופית קודמת"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom thumbnails/dots */}
          <div className="p-3 sm:p-4 flex justify-center gap-2 flex-wrap bg-black/50">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all",
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
