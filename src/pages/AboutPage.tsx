import Layout from "@/components/Layout";
import ScrollAnimation from "@/components/ScrollAnimation";
import TypewriterText from "@/components/TypewriterText";
import michalProfile from "@/assets/michal-profile.jpg";
import { ChevronDown } from "lucide-react";
const AboutPage = () => {
  return <Layout>
      <section className="relative py-16 md:py-24 min-h-[80vh] overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/about-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl font-handwriting font-bold text-center mb-1">
              <span className="gradient-text">קצת עליי</span>
            </h1>
            <div 
              className="mb-0 opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-primary/70 animate-bounce" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200} className="-mt-4 md:-mt-6">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-glow">
                    <img alt="מיכל אלגרבלי" className="w-full h-full object-cover object-top" src={michalProfile} />
                  </div>
                </div>

                {/* Bio Text */}
                <div className="text-center md:text-right flex-1">
                  <div className="text-3xl md:text-4xl font-handwriting font-bold text-foreground mb-0 leading-none" dir="rtl">
                    <TypewriterText text="נעים מאוד," speed={100} delay={300} showCursor={false} />
                  </div>
                  <div className="text-3xl md:text-4xl font-handwriting font-bold text-foreground mb-0 leading-none" dir="rtl">
                    <TypewriterText text="אני" speed={100} delay={1200} showCursor={false} />
                  </div>
                  <div className="text-3xl md:text-4xl font-handwriting font-bold gradient-text mb-4 leading-none" dir="rtl">
                    <TypewriterText text="מיכל אלגרבלי" speed={100} delay={1500} showCursor={true} />
                  </div>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                      מלווה מורים במסע אל עולם של יצירתיות, טכנולוגיה והוראה משמעותית. לאורך השנים לימדתי תלמידים, הדרכתי סטודנטים, וכיום אני מתמקדת בהנחיית השתלמויות ביישומי Canva ובכלי בינה מלאכותית (AI) להוראה.
                    </p>
                    
                    <div className="py-3 px-4 rounded-xl bg-primary/10 border border-primary/20">
                      <p className="text-foreground font-medium">
                        ✨ טכנולוגיה לא מחליפה מורים – היא מעניקה להם כנפיים
                      </p>
                    </div>
                    
                    <p>
                      אני מאמינה שכלים דיגיטליים מאפשרים לכל מורה, גם ללא רקע בעיצוב, ליצור חומרים מרגשים ולבטא את הרעיונות שלו בצורה הוויזואלית והטובה ביותר.
                    </p>
                    
                    <h3 className="text-xl font-bold text-foreground pt-2">מה זה "מחשבה יוצרת מציאות"?</h3>
                    <p>
                      המרחב הזה הוקם כדי להיות בית תומך ונגיש עבורכם – בין אם אתם עושים את הצעדים הראשונים בעולם הדיגיטלי או מבקשים להעמיק ולהתרחב. כאן תמצאו השראה, חומרים וכלים שיעזרו לכם להוביל הוראה יצירתית וחדשנית.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default AboutPage;