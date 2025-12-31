import { Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-primary">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold gradient-text">בינה יתרה</span>
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
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>נבנה עם</span>
          <Heart className="w-4 h-4 text-secondary fill-secondary" />
          <span>למורים בכל מקום</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
