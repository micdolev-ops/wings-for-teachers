import { Heart, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="מחשבה יוצרת מציאות" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-bold gradient-text">מחשבה יוצרת מציאות</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              טכנולוגיה טובה לא מחליפה מורים, היא מעניקה להם כנפיים.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            <Link to="/canva" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Canva להוראה
            </Link>
            <Link to="/ai" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              בינה מלאכותית
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              אודות
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              צור קשר
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:micdolev@gmail.com"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              aria-label="שלחו אימייל"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              aria-label="שלחו וואטסאפ"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>נבנה עם</span>
          <Heart className="w-4 h-4 text-secondary fill-secondary" />
          <span>על ידי מיכל אלגרבלי</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
