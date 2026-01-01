import Layout from "@/components/Layout";
import { Bot, MessageSquare, Lightbulb, AlertCircle, ArrowLeft, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import notebookLmLogo from "@/assets/notebooklm-logo.svg";
import geminiLogo from "@/assets/gemini-logo.svg";

interface PlatformCardProps {
  title: string;
  description: string;
  icon?: React.ElementType;
  iconImage?: string;
  youtubeVideoId?: string;
  delay: number;
}

const PlatformCard = ({ title, description, icon: Icon, iconImage, youtubeVideoId, delay }: PlatformCardProps) => (
  <div
    className={cn(
      "group relative p-8 rounded-2xl",
      "bg-[hsl(280_50%_25%_/_0.4)] backdrop-blur-xl border border-[hsl(320_70%_60%_/_0.35)]",
      "shadow-[0_8px_32px_-8px_hsl(320_70%_55%_/_0.3)] hover:shadow-[0_16px_48px_-8px_hsl(320_70%_55%_/_0.5)]",
      "transition-all duration-500",
      "hover:scale-[1.02] hover:-translate-y-2 hover:bg-[hsl(280_50%_25%_/_0.55)]",
      "opacity-0 animate-fade-in-up cursor-pointer"
    )}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    {/* Gradient hover overlay */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_0_30px_8px_hsl(320_70%_55%_/_0.3)] mb-6">
        {iconImage ? (
          <img src={iconImage} alt={title} className="w-12 h-12 object-contain" />
        ) : Icon ? (
          <Icon className="w-8 h-8 text-secondary" />
        ) : null}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {/* YouTube Video Embed */}
      {youtubeVideoId && (
        <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title={`${title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
      
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-secondary transition-colors">
        <span>לכל ההדרכות</span>
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const AIPage = () => {
  const promptTips = [
    { title: "מה זה פרומפט?", description: "הבסיס להבנת שפת ה-AI", icon: MessageSquare },
    { title: "עקרונות לכתיבה נכונה", description: "טכניקות שיפור התוצאות", icon: Lightbulb },
    { title: "טעויות נפוצות", description: "ומה לעשות במקום", icon: AlertCircle },
  ];

  const platforms = [
    {
      title: "NotebookLM",
      description: "כלי מחקר ולמידה מבוסס AI של גוגל שמאפשר לנתח מסמכים וליצור תוכן חכם",
      iconImage: notebookLmLogo,
      youtubeVideoId: "ElAhV2Qi5sA",
    },
    {
      title: "Gemini",
      description: "מודל השפה המתקדם של גוגל לשיחות, יצירת תוכן וניתוח מידע מורכב",
      iconImage: geminiLogo,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] py-16 md:py-24 pt-24 md:pt-36 flex items-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/videos/ai-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>חזרה לדף הבית</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div 
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-glow shadow-[0_8px_40px_-8px_hsl(330_70%_55%_/_0.4)] opacity-0 animate-scale-in"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <Bot className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h1 
              className="text-4xl md:text-5xl font-extrabold opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              <span className="gradient-text">בינה מלאכותית למורים</span>
            </h1>
          </div>

          <p 
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            למדו לכתוב פרומפטים נכונים ולהכיר את הכלים שישנו את הדרך שלכם להוראה
          </p>
          
          {/* Scroll indicator arrow */}
          <div 
            className="mt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-secondary/70 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Section 1: Prompt Building */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary/5 via-card to-primary/5 border border-border/50 shadow-card opacity-0 animate-fade-in-up"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">בנייה נכונה של פרומפטים</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
              הסוד להפקת התוצאות הטובות ביותר מ-AI טמון באופן שבו אנחנו מנסחים את הבקשות שלנו. 
              למדו את העקרונות לכתיבת פרומפטים אפקטיביים.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {promptTips.map((tip, index) => (
                <div 
                  key={tip.title}
                  className="p-6 rounded-2xl bg-[hsl(280_50%_25%_/_0.4)] backdrop-blur-xl border border-[hsl(320_70%_60%_/_0.35)] opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <tip.icon className="w-6 h-6 text-[hsl(320_70%_60%)] drop-shadow-[0_0_12px_hsl(320_70%_55%_/_0.8)] mb-3" />
                  <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>

            <div 
              className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
            >
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                הדגמה מודרכת
              </h3>
              <p className="text-muted-foreground">
                פרומפט ליצירת תמונה - שלב אחר שלב, מהרעיון הראשוני ועד לתוצאה המושלמת
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Platforms */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
            >
              כלים לפי פלטפורמה
            </h2>
            <p 
              className="text-muted-foreground text-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "1100ms", animationFillMode: "forwards" }}
            >
              הכירו את הכלים המתקדמים ולמדו להשתמש בהם בהוראה
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <PlatformCard
                key={platform.title}
                title={platform.title}
                description={platform.description}
                iconImage={platform.iconImage}
                youtubeVideoId={platform.youtubeVideoId}
                delay={1200 + index * 150}
              />
            ))}
          </div>

          <p 
            className="text-center text-muted-foreground mt-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "1500ms", animationFillMode: "forwards" }}
          >
            כלים נוספים יתווספו בקרוב...
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AIPage;
