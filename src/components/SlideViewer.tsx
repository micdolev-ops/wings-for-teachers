import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, RotateCw, X } from "lucide-react";
import { cn } from "@/lib/utils";
interface SlideViewerProps { slides: string[]; title?: string; rotate180Slides?: number[]; }
const SlideViewer = ({ slides, title, rotate180Slides }: SlideViewerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotate180, setRotate180] = useState<number[]>(rotate180Slides ?? []);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const nextSlide = () => { setDirection("next"); setAnimKey(k=>k+1); setCurrentSlide(p=>(p+1)%slides.length); };
  const prevSlide = () => { setDirection("prev"); setAnimKey(k=>k+1); setCurrentSlide(p=>(p-1+slides.length)%slides.length); };
  const shouldRotate = (i: number) => rotate180.includes(i+1);
  const toggleRotate = () => {
    const n = currentSlide+1;
    setRotate180(p => p.includes(n) ? p.filter(x=>x!==n) : [...p,n].sort((a,b)=>a-b));
  };
  useEffect(() => {
    if (!isFullscreen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key==="ArrowLeft") nextSlide(); if (e.key==="ArrowRight") prevSlide(); if (e.key==="Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isFullscreen]);
  return (
    <>
      <div className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-border/30">
        {title && <div className="px-4 py-3 bg-gradient-to-r from-secondary/20 to-primary/10 border-b border-border/30"><h4 className="text-sm font-medium text-foreground">{title}</h4></div>}
        <div className="relative aspect-[16/9] bg-black">
          <img key={animKey} src={slides[currentSlide]} alt={`שקופית ${currentSlide+1}`}
            className={cn("w-full h-full object-contain", shouldRotate(currentSlide) && "rotate-180",
              direction==="next" ? "animate-slide-fade-next" : "animate-slide-fade-prev")} />
          <button onClick={prevSlide} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
          <button onClick={nextSlide} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={() => setIsFullscreen(true)} className="absolute top-2 left-2 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"><Maximize2 className="w-4 h-4" /></button>
          <button onClick={toggleRotate} className="absolute top-2 right-2 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"><RotateCw className="w-4 h-4" /></button>
        </div>
        <div className="px-4 py-3 flex items-center justify-between bg-black/10">
          <span className="text-xs text-muted-foreground">{currentSlide+1} / {slides.length}</span>
          <div className="flex gap-1">{slides.map((_,i) => <button key={i} onClick={()=>setCurrentSlide(i)} className={cn("w-2 h-2 rounded-full transition-colors", i===currentSlide?"bg-secondary":"bg-muted-foreground/30 hover:bg-muted-foreground/50")} />)}</div>
        </div>
      </div>
      {isFullscreen && (
        <div ref={fullscreenRef} className="fixed inset-0 z-[9999] bg-neutral-900 flex flex-col" tabIndex={0}>
          <div className="flex items-center justify-between p-4 bg-black/50">
            <div className="text-white text-sm">{currentSlide+1} / {slides.length}</div>
            <div className="flex gap-2">
              <button onClick={toggleRotate} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><RotateCw className="w-5 h-5" /></button>
              <button onClick={() => setIsFullscreen(false)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><X className="w-6 h-6" /></button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center p-8 relative">
            <div className="bg-white rounded-lg shadow-2xl max-w-full max-h-full overflow-hidden">
              <img key={animKey} src={slides[currentSlide]} alt={`שקופית ${currentSlide+1}`} className={cn("max-w-full max-h-[calc(100vh-160px)] object-contain", shouldRotate(currentSlide)&&"rotate-180")} />
            </div>
            <button onClick={prevSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 hover:bg-black/80 text-white"><ChevronRight className="w-8 h-8" /></button>
            <button onClick={nextSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 hover:bg-black/80 text-white"><ChevronLeft className="w-8 h-8" /></button>
          </div>
          <div className="p-4 flex justify-center gap-2 flex-wrap bg-black/50">
            {slides.map((_,i) => <button key={i} onClick={()=>setCurrentSlide(i)} className={cn("w-3 h-3 rounded-full transition-all", i===currentSlide?"bg-white scale-125":"bg-white/30 hover:bg-white/50")} />)}
          </div>
        </div>
      )}
    </>
  );
};
export default SlideViewer;
