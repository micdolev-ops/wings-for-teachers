import { Palette, Bot } from "lucide-react";
import GatewayCard from "@/components/GatewayCard";
import Layout from "@/components/Layout";
import TypewriterText from "@/components/TypewriterText";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-bg-clean.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        
        {/* Decorative glowing elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
          >
            <span className="gradient-text">בינה יתרה</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
          >
            <TypewriterText
              text="טכנולוגיה טובה לא מחליפה מורים, היא מעניקה להם כנפיים."
              speed={40}
              delay={800}
              showCursor={true}
            />
          </p>
        </div>
      </section>

      {/* Gateway Cards Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              מאיפה נתחיל?
            </h2>
            <p 
              className="text-muted-foreground text-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              בחרו את מסלול הלמידה שמתאים לכם
            </p>
          </div>

          {/* Gateway Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <GatewayCard
              title="Canva להוראה"
              description="גלו את הכוח של סטודיו קסם ו-AI בקאנבה ליצירת חומרי לימוד מרהיבים"
              icon={Palette}
              to="/canva"
              variant="canva"
              delay={700}
            />
            <GatewayCard
              title="בינה מלאכותית למורים"
              description="למדו לכתוב פרומפטים נכונים ולהשתמש בכלי AI מתקדמים בכיתה"
              icon={Bot}
              to="/ai"
              variant="ai"
              delay={900}
            />
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "1100ms", animationFillMode: "forwards" }}
            >
              למה בינה יתרה?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "הדרכות מעשיות",
                  description: "סרטוני הדרכה צעד אחר צעד עם דוגמאות ישימות לכיתה",
                  delay: 1200,
                },
                {
                  title: "רעיונות פדגוגיים",
                  description: "כל כלי מגיע עם רעיונות יישומיים להוראה יצירתית",
                  delay: 1300,
                },
                {
                  title: "גישה חופשית",
                  description: "כל התכנים פתוחים וזמינים לכל המורים ללא הרשמה",
                  delay: 1400,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card shadow-soft opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${feature.delay}ms`, animationFillMode: "forwards" }}
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
