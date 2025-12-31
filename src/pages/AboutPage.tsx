import Layout from "@/components/Layout";
import ScrollAnimation from "@/components/ScrollAnimation";
import TypewriterText from "@/components/TypewriterText";
import michalProfile from "@/assets/michal-profile.jpg";

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 min-h-[80vh]">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl font-handwriting font-bold text-center mb-12">
              <span className="gradient-text">קצת עליי</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-glow">
                    <img
                      src={michalProfile}
                      alt="מיכל אלגרבלי"
                      className="w-full h-full object-cover object-[30%_top] scale-125"
                    />
                  </div>
                </div>

                {/* Bio Text */}
                <div className="text-center md:text-right flex-1">
                  <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-foreground mb-1">
                    <TypewriterText text="נעים מאוד," speed={100} delay={300} showCursor={false} />
                  </h2>
                  <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-foreground mb-2">
                    <TypewriterText text="אני" speed={100} delay={1500} showCursor={false} />
                  </h2>
                  <h2 className="text-4xl md:text-5xl font-handwriting font-bold gradient-text mb-6">
                    <TypewriterText text="מיכל אלגרבלי" speed={100} delay={2000} showCursor={true} />
                  </h2>
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
                    
                    <h3 className="text-xl font-bold text-foreground pt-2">מה זה "בינה יתרה"?</h3>
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
    </Layout>
  );
};

export default AboutPage;
