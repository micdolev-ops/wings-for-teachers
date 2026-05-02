import { Mail, MessageCircle, Copy, ChevronDown, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import ScrollAnimation from "@/components/ScrollAnimation";
import { getWhatsAppUrl, WHATSAPP_PHONE } from "@/lib/whatsapp";
const ContactPage = () => {
  const email = "micdolev@gmail.com";
  const copyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try { await navigator.clipboard.writeText(email); toast.success("הכתובת הועתקה!"); }
    catch { toast.error("לא הצלחנו להעתיק"); }
  };
  return (
    <Layout>
      <section className="py-16 md:py-24 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4"><span className="gradient-text">צרו קשר</span></h1>
            <p className="text-muted-foreground text-center text-lg mb-6 max-w-2xl mx-auto">יש לכם שאלה? רוצים לשתף פעולה? אשמח לשמוע מכם!</p>
            <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              <ChevronDown className="w-8 h-8 mx-auto text-primary/70 animate-bounce" />
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-right"><h3 className="font-bold text-foreground mb-1">אימייל</h3><p className="text-muted-foreground text-sm">{email}</p></div>
                </a>
                <div className="flex gap-2 mt-4 justify-end">
                  <button onClick={copyEmail} className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground transition-colors">
                    <Copy className="w-3.5 h-3.5" />העתק
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank"); }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-[hsl(5,81%,56%)] hover:bg-[hsl(5,81%,50%)] text-white transition-colors">Gmail</button>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(142,70%,45%)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right"><h3 className="font-bold text-foreground mb-1">וואטסאפ</h3><p className="text-muted-foreground text-sm">{WHATSAPP_PHONE.replace("972", "0")}</p></div>
                </a>
                <div className="flex gap-2 mt-4 justify-end">
                  <button onClick={async (e) => { e.stopPropagation(); try { await navigator.clipboard.writeText(WHATSAPP_PHONE.replace("972","0")); toast.success("המספר הועתק!"); } catch { toast.error("לא הצלחנו להעתיק"); } }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground transition-colors">
                    <Copy className="w-3.5 h-3.5" />העתק
                  </button>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />פתח
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};
export default ContactPage;
