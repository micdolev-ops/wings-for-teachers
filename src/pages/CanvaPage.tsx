import Layout from "@/components/Layout";
import { Sparkles, FileText, Image, Presentation, Award, LayoutGrid, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import canvaLogo from "@/assets/canva-logo.svg";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const ToolCard = ({ title, description, icon: Icon, delay }: ToolCardProps) => (
  <div
    className={cn(
      "group relative p-6 rounded-2xl",
      "bg-[hsl(280_50%_25%_/_0.4)] backdrop-blur-xl border border-[hsl(320_70%_60%_/_0.35)]",
      "shadow-[0_8px_32px_-4px_hsl(320_70%_55%_/_0.3)] hover:shadow-[0_12px_40px_-4px_hsl(320_70%_55%_/_0.45)] transition-all duration-300",
      "hover:scale-[1.02] hover:-translate-y-1 hover:bg-[hsl(280_50%_25%_/_0.55)]",
      "opacity-0 animate-fade-in-up cursor-pointer"
    )}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_25px_6px_hsl(320_70%_55%_/_0.5)]">
        <Icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_hsl(320_70%_60%_/_0.8)]" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const CanvaPage = () => {
  const aiTools = [
    { title: "טקסט לתמונה", description: "יצירת תמונות מקוריות מתיאור טקסטואלי", icon: Image },
    { title: "מצגות עם Canva AI", description: "בניית מצגות חכמות בלחיצת כפתור", icon: Presentation },
    { title: "מסמכים חכמים", description: "יצירת מסמכים מעוצבים עם AI", icon: FileText },
    { title: "טפסים ויזואליים", description: "עיצוב טפסים שמושכים את העין", icon: LayoutGrid },
    { title: "תעודות אינטראקטיביות", description: "יצירת תעודות הוקרה מרשימות", icon: Award },
    { title: "כל אפשרויות Canva AI", description: "סקירה מקיפה של כלי ה-AI בקאנבה", icon: Sparkles },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>חזרה לדף הבית</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div 
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-glow opacity-0 animate-scale-in"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <img src={canvaLogo} alt="Canva" className="w-12 h-12 object-contain rounded-lg" />
            </div>
            <h1 
              className="text-4xl md:text-5xl font-extrabold opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              <span className="gradient-text">Canva להוראה</span>
            </h1>
          </div>

          <p 
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            גלו את הכלים החדשניים של קאנבה שיעזרו לכם ליצור חומרי לימוד מרהיבים ומעוררי השראה
          </p>
        </div>
      </section>

      {/* Section 1: Magic Studio */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-card to-secondary/5 border border-border/50 shadow-card opacity-0 animate-fade-in-up"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">סטודיו קסם בקאנבה</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
              Magic Studio הוא מערכת הכלים החדשנית של קאנבה המשלבת בינה מלאכותית ליצירת עיצובים מדהימים. 
              למדו איך להשתמש בו בצורה יעילה עבור הוראה.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card/80 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">מה זה Magic Studio?</h3>
                <p className="text-sm text-muted-foreground">
                  סקירה מקיפה של כל היכולות והאפשרויות של סטודיו הקסם
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card/80 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">הדרכה מעשית</h3>
                <p className="text-sm text-muted-foreground">
                  דוגמאות פדגוגיות ליישום בכיתה עם צעדים מפורטים
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI in Canva */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              AI בקאנבה
            </h2>
            <p 
              className="text-muted-foreground text-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
            >
              הדרכות קצרות וממוקדות לכל כלי AI בקאנבה
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiTools.map((tool, index) => (
              <ToolCard
                key={tool.title}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                delay={800 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CanvaPage;
