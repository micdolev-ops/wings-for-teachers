import { Mail, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollAnimation from "@/components/ScrollAnimation";

const ContactPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">צרו קשר</span>
            </h1>
            <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
              יש לכם שאלה? רוצים לשתף פעולה? אשמח לשמוע מכם!
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="max-w-2xl mx-auto">
              {/* Contact Options - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:micdolev@gmail.com"
                  className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-foreground mb-1">אימייל</h3>
                    <p className="text-muted-foreground text-sm">micdolev@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/972545567227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[hsl(142,70%,45%)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-foreground mb-1">וואטסאפ</h3>
                    <p className="text-muted-foreground text-sm">שלחו הודעה ישירה</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
