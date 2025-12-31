import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GatewayCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  variant: "canva" | "ai";
  delay?: number;
}

const GatewayCard = ({ title, description, icon: Icon, to, variant, delay = 0 }: GatewayCardProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "group relative flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl",
        "bg-[hsl(320_70%_55%_/_0.15)] backdrop-blur-xl border border-[hsl(320_70%_55%_/_0.25)]",
        "shadow-card hover:shadow-[0_16px_48px_-8px_hsl(320_70%_55%_/_0.4)]",
        "transition-all duration-500 ease-out",
        "hover:scale-[1.02] hover:-translate-y-2 hover:bg-[hsl(320_70%_55%_/_0.22)]",
        "opacity-0 animate-fade-in-up",
        "overflow-hidden"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Background gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          variant === "canva"
            ? "bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
            : "bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"
        )}
      />

      {/* Floating orbs decoration */}
      <div
        className={cn(
          "absolute -top-12 -left-12 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500",
          variant === "canva" ? "bg-primary" : "bg-secondary"
        )}
      />
      <div
        className={cn(
          "absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500",
          variant === "canva" ? "bg-secondary" : "bg-primary"
        )}
      />

      {/* Icon container */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl mb-6",
          "transition-all duration-500 group-hover:scale-110",
          variant === "canva"
            ? "bg-gradient-to-br from-primary to-primary-glow shadow-[0_8px_30px_-8px_hsl(175_70%_50%_/_0.4)]"
            : "bg-gradient-to-br from-secondary to-secondary-glow shadow-[0_8px_30px_-8px_hsl(270_60%_55%_/_0.4)]"
        )}
      >
        <Icon className="w-10 h-10 md:w-12 md:h-12 text-foreground" strokeWidth={1.5} />
      </div>

      {/* Text content */}
      <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
        {title}
      </h2>
      <p className="relative z-10 text-muted-foreground text-center text-base md:text-lg max-w-xs leading-relaxed">
        {description}
      </p>

      {/* Arrow indicator */}
      <div className="relative z-10 mt-6 flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
        <span className="text-sm font-medium">להתחלה</span>
        <svg
          className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
};

export default GatewayCard;
