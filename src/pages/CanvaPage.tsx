import Layout from "@/components/Layout";
import SlideViewer from "@/components/SlideViewer";
import { Sparkles, FileText, Image, Presentation, Award, LayoutGrid, ArrowLeft, ChevronDown, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import canvaLogo from "@/assets/canva-logo.svg";

const canvaAiSlides = Array.from({ length: 15 }, (_, i) => `/slides/canva-ai/slide-${i + 1}.jpg`);
const canvaEduSlides = [
  "/slides/canva-edu/slide-1.jpg",
  "/slides/canva-edu/slide-2.jpg",
  "/slides/canva-edu/slide-3.jpg",
  "/slides/canva-edu/slide-4.jpg",
];
const ToolCard = ({ title, description, icon: Icon, delay }: { title: string; description: string; icon: React.ElementType; delay: number }) => (
  <div className={cn("group relative p-6 rounded-2xl","bg-[hsl(280_50%_25%_/_0.4)] backdrop-blur-xl border border-[hsl(320_70%_60%_/_0.35)]",
    "shadow-[0_8px_32px_-4px_hsl(320_70%_55%_/_0.3)] hover:shadow-[0_12px_40px_-4px_hsl(320_70%_55%_/_0.45)] transition-all duration-300",
    "hover:scale-[1.02] hover:-translate-y-1 hover:bg-[hsl(280_50%_25%_/_0.55)]","opacity-0 animate-fade-in-up cursor-pointer")}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}>
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_25px_6px_hsl(320_70%_55%_/_0.5)]">
        <Icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_hsl(320_70%_60%_/_0.8)]" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);
const CanvaPage = () => {
  const aiTools = [
    { title: "מחק הקסם", description: "מוחק אובייקטים לא רצויים מתמונה — בלחיצה אחת על האובייקט או על ידי סימון האזור הרצוי במכחול מיוחד. הבינה המלאכותית ממלאת את האזור שנמחק ברקע תואם באופן אוטומטי. מושלם להסרת רהיטים, שלטים או אנשים שנכנסו לתמונה בטעות.", icon: Image },
    { title: "עריכת קסם", description: "מאפשרת להחליף או להוסיף אלמנט בתמונה פשוט על ידי תיאור מילולי. מסמנים אזור בתמונה וכותבים מה רוצים במקומו — למשל 'עץ' או 'שמיים מעוננים' — והבינה המלאכותית עושה את השאר.", icon: Presentation },
    { title: "אחיזת קסם", description: "מפרידה אובייקט מתוך תמונה רגילה ומאפשרת להזיזו, לשנות את גודלו או לסובבו — בעוד הרקע מושלם אוטומטית כאילו האובייקט מעולם לא היה שם. מושלם לשינוי מיקום של אנשים או חפצים בתמונה ללא עריכה מורכבת.", icon: FileText },
    { title: "אחיזת טקסט", description: "מחלצת טקסט שאינו ניתן לעריכה מתוך תמונה והופכת אותו לתיבת טקסט עצמאית הניתנת לעריכה מלאה — שינוי גופן, צבע, גודל ומיקום. שימושי במיוחד למורים ישראלים: מאפשר להחליף טקסט באנגלית לעברית ולהתאים חומרי לימוד זרים לתלמידים בישראל.", icon: LayoutGrid },
    { title: "הרחבת קסם", description: "מרחיבה את שולי התמונה ויוצרת המשך לתמונה על ידי בינה מלאכותית, המשתלב באופן טבעי עם המקור. מאפשרת להתאים תמונה לממדים שונים — למשל להפוך תמונה רוחבית לאנכית לסטורי — מבלי לחתוך אותה.", icon: Award },
    { title: "יוצר רקעים", description: "לאחר הסרת הרקע מתמונה, יוצר רקע חדש בהתאם לתיאור שתכתבו. מאפשר להציב אובייקט או אדם בכל סביבה שתבחרו — כיתה, טבע, עיר ועוד.", icon: Sparkles },
    { title: "מסיר הרקע", description: "מסיר את הרקע מכל תמונה בלחיצה אחת ומשאיר רק את הנושא הראשי. שימושי ליצירת תמונות שקופות לשימוש בעיצובים, מצגות וחומרי לימוד.", icon: Image },
    { title: "הגדלת קנה מידה", description: "משדרגת את רזולוציית התמונה ומחדדת אותה מבלי לפגוע באיכות. שימושית כאשר יש תמונה קטנה שרוצים להדפיס או להציג בגדול.", icon: Presentation },
    { title: "טשטוש", description: "מטשטש אזורים ספציפיים בתמונה — למשל פנים של תלמידים, מידע אישי או פרטים שאין לחשוף. שימושי במיוחד למורים שמפרסמים תמונות מהכיתה.", icon: FileText },
    { title: "פוקוס אוטומטי", description: "מחדד ומבליט את הנושא הראשי של התמונה ומטשטש את הרקע, כך שהעין מיד נמשכת למרכז. יוצר אפקט מקצועי דמוי מצלמה איכותית.", icon: LayoutGrid },
    { title: "תמונה לסרטון", description: "הופכת תמונה סטטית לסרטון קצר עם תנועה עדינה ואפקט חי. זמין רק לחשבון Canva Pro בתשלום — לא זמין בחשבון מורים החינמי.", icon: Award },
    { title: "ליטוש פנים", description: "מבצע ליטוש עדין ומקצועי לפנים בתמונה — החלקת עור, שיפור תאורה והבהרת עיניים. תוצאה טבעית ומקצועית בלחיצה אחת.", icon: Sparkles },
  ];
  return (
    <Layout>
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/canva-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-6 right-6 z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            <ArrowLeft className="w-4 h-4" /><span>חזרה לדף הבית</span>
          </Link>
        </div>
      </section>
      <section className="py-4 md:py-6 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-glow opacity-0 animate-scale-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <img src={canvaLogo} alt="Canva" className="w-12 h-12 object-contain rounded-lg" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              <span className="gradient-text">Canva להוראה</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            גלו את הכלים החדשניים של קאנבה שיעזרו לכם ליצור חומרי לימוד מרהיבים ומעוררי השראה
          </p>
          <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <ChevronDown className="w-8 h-8 mx-auto text-primary/70 animate-bounce" />
          </div>
        </div>
      </section>
      {/* חשבון קנבה למורים */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/5 border-2 border-primary/30 shadow-card opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-primary shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">חשבון קנבה למורים — הצעד הראשון</h2>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 mb-6">
                <p className="text-sm text-foreground font-medium">⚠️ בלי חשבון מורים — כלי סטודיו קסם לא יהיו נגישים! זהו הצעד הראשון לפני הכל.</p>
              </div>
              <p className="text-muted-foreground mb-6">ישנן מספר דרכים לקבל חשבון קנבה מורים — הדרך הפשוטה ביותר מוצגת כאן. דרכים נוספות יתווספו בהמשך.</p>
              <SlideViewer slides={canvaEduSlides} title="כיצד נכנסים לקנבה חינוך" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-card to-secondary/5 border border-border/50 shadow-card opacity-0 animate-fade-in-up shadow-lg" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3 mb-4"><Sparkles className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold text-foreground">סטודיו קסם בקאנבה</h2></div>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">Magic Studio הוא מערכת הכלים החדשנית של קאנבה המשלבת בינה מלאכותית ליצירת עיצובים מדהימים. למדו איך להשתמש בו בצורה יעילה עבור הוראה.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card/80 border border-secondary-glow"><h3 className="font-bold text-foreground mb-2">מה זה Magic Studio?</h3><p className="text-sm text-muted-foreground">סקירה מקיפה של כל היכולות והאפשרויות של סטודיו הקסם</p></div>
              <div className="p-6 rounded-2xl bg-card/80 border border-secondary-glow"><h3 className="font-bold text-foreground mb-2">הדרכה מעשית</h3><p className="text-sm text-muted-foreground">דוגמאות פדגוגיות ליישום בכיתה עם צעדים מפורטים</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>כלי עריכת תמונות — סטודיו קסם</h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>הדרכות קצרות וממוקדות לכל כלי AI בקאנבה</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiTools.map((tool, i) => <ToolCard key={tool.title} title={tool.title} description={tool.description} icon={tool.icon} delay={800 + i * 100} />)}
          </div>
        </div>
      </section>

      {/* יועץ הקסם הפדגוגי */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            <a href="https://gemini.google.com/share/322a33dc0f4a" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 md:p-8 rounded-3xl bg-gradient-to-l from-primary/10 via-[hsl(280_50%_25%_/_0.5)] to-secondary/10 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.01] group shadow-[0_8px_32px_-8px_hsl(175_70%_45%_/_0.3)] hover:shadow-[0_16px_48px_-8px_hsl(175_70%_45%_/_0.5)]">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shrink-0 shadow-[0_0_25px_6px_hsl(175_70%_45%_/_0.4)]">
                <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini" className="w-10 h-10" />
              </div>
              <div className="flex-1 text-right">
                <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">✨ יועץ הקסם הפדגוגי</div>
                <div className="text-sm text-muted-foreground">הכניסו נושא שיעור או רעיון — הסוכן יציע כיצד לשלב את כלי הקסם של קנבה בצורה חינוכית ומבריקה</div>
              </div>
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* קטע Canva AI */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary-glow">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Canva AI</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-10 max-w-3xl opacity-0 animate-fade-in" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>
            כלי הבינה המלאכותית של קנבה מאפשרים ליצור תמונות, מצגות, מסמכים ומשחקים. בקרוב יתווספו כאן סרטוני הדרכה לכל כלי.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { title: "טקסט לתמונה", description: "יצירת תמונות מקוריות מתיאור טקסטואלי — בחרו סגנון, תארו את התמונה, וקנבה תיצור אותה עבורכם.", icon: Image },
              { title: "מצגות עם Canva AI", description: "בניית מצגות חכמות בלחיצת כפתור — ציינו נושא, גיל וכמות שקופיות, וקנבה תבנה מצגת מלאה. טיפ: השתמשו קודם בסוכן AI לבניית תוכן מעולה, ואז הכניסו אותו לקנבה!", icon: Presentation },
              { title: "מסמכים חכמים", description: "יצירת מסמכים מעוצבים עם AI — מכתבים להורים, ערכות שיעור, סיכומים ועוד.", icon: FileText },
              { title: "משחקים וחידונים", description: "יצירת כרטיסיות ידע, חידונים אינטראקטיביים ומשחקי טריוויה — ניתן לשתף עם התלמידים בקישור.", icon: LayoutGrid },
              { title: "כתיבת קסם", description: "כתיבת טקסטים בשפה חופשית — פוסטים, מכתבים, הזמנות ועוד. שימו לב: חובה לקרוא ולערוך לפני שימוש.", icon: Sparkles },
              { title: "קסם העיצוב", description: "יצירת עיצוב שלם מתיאור טקסטואלי — קנבה תציע תבניות מותאמות לנושא ולצורך.", icon: Award },
            ].map((tool, i) => (
              <div key={tool.title} className={"group relative p-6 rounded-2xl bg-[hsl(280_50%_25%_/_0.4)] backdrop-blur-xl border border-[hsl(270_60%_60%_/_0.35)] shadow-[0_8px_32px_-4px_hsl(270_60%_55%_/_0.3)] hover:shadow-[0_12px_40px_-4px_hsl(270_60%_55%_/_0.45)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 opacity-0 animate-fade-in-up"}
                style={{ animationDelay: `${800 + i * 100}ms`, animationFillMode: "forwards" }}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-glow shadow-[0_0_25px_6px_hsl(270_60%_55%_/_0.5)]">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* מאמר סיכום */}
          <div className="max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}>
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">מדריך מקיף: שימוש בכלי AI בקנבה למורים</h3>
                <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">נכתב על ידי מיכל אלגרבלי</span>
              </div>
              <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6 text-sm md:text-base">
                <p>הדרכה זו מסכמת את כלי ה-AI החדשניים בקנבה, המאפשרים למורים לייעל את עבודתם, ליצור תוצרים ויזואליים מרהיבים, לבנות משחקים אינטראקטיביים ולהתאים תכנים לכיתה בקלות ובמהירות.</p>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">חלק א׳: 4 עקרונות ברזל לעבודה יעילה עם AI</h4>
                  <div className="space-y-3">
                    {[
                      { title: "הנחיה מדויקת (פרומפט)", text: "המחשב זקוק להוראות ברורות. ככל שהתיאור יהיה מפורט יותר — קהל יעד, סגנון, אווירה, תוכן — התוצאה תהיה טובה יותר. ניתן להיעזר במודלי שפה כמו ChatGPT או Gemini לניסוח פרומפטים מקצועיים." },
                      { title: "בקרת איכות", text: "הבינה המלאכותית אינה חפה מטעויות. חובה לבדוק את התוצרים: לוודא דיוק בעובדות, לתקן שגיאות כתיב, ולשים לב אם השתרבבו מילים באנגלית או עיוותים גרפיים. האחריות על התוצר הסופי היא של המורה." },
                      { title: "שילוב כלים", text: "התוצאות המקצועיות ביותר מתקבלות משילוב כמה כלי AI. לדוגמה: יצירת תמונה בנפרד והטמעתה בתוך מסמך עבודה או מצגת מעוצבת." },
                      { title: "תכנון מראש", text: "חישבו מה בדיוק אתם רוצים ליצור לפני שניגשים למקלדת. תכנון מוקדם חוסך זמן רב של ניסוי וטעייה." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 rounded-xl bg-muted/20 border border-border/30">
                        <span className="text-secondary font-bold text-lg shrink-0">{i + 1}.</span>
                        <div><span className="font-semibold text-foreground">{item.title}: </span>{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">חלק ב׳: הכלים המרכזיים</h4>
                  <p className="mb-3 text-xs bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-2">הגישה לרוב הכלים: מסך ראשי של קנבה ← לחצו על "Canva AI" ← בחרו את הכלי הרצוי</p>
                  <div className="space-y-4">
                    {[
                      { title: "יצירת תמונות (טקסט לתמונה)", text: 'כלי ליצירת תמונות מקוריות המותאמות לצרכי השיעור. לקבלת תמונה מושלמת כללו בהנחיה: סגנון אומנותי, קומפוזיציה, תיאור הסצנה ואווירה. דוגמה: "צור תמונה בסגנון צבעי מים, ילד וילדה נוטעים שתיל, תאורה רכה ונעימה".' },
                      { title: "מסמכים וטקסטים (כתיבת קסם)", text: 'כלי לניסוח מכתבים, מערכי שיעור וסיכומים. כותבים את הבקשה בשפה חופשית, והמערכת מייצרת טקסט מנוסח. חשוב: לאחר קבלת הטקסט יש לוודא כיוון RTL ולשנות לגופן עברי.' },
                      { title: "משחקים וחידונים (קוד)", text: 'יצירת פעילויות אינטראקטיביות — כרטיסיות ידע, טריוויה, חידונים עם ניקוד — הניתנות לשיתוף עם התלמידים בקישור ישירות לוואטסאפ או Classroom.' },
                      { title: "מצגות (קסם העיצוב)", text: "יצירת מצגת מלאה בלחיצת כפתור. שימו לב: כלי זה עובד כרגע רק בממשק האנגלי. יש לשנות את שפת הממשק ב-Settings לפני השימוש." },
                      { title: "תרגום דפי עבודה", text: "המרת דפי עבודה ותבניות מאנגלית לעברית תוך שמירה על העיצוב. נמצא תחת 'אפליקציות' בסרגל הצד." },
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-muted/20 border border-border/30">
                        <h5 className="font-semibold text-foreground mb-1">{item.title}</h5>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">המלצות להמשך למידה</h4>
                  <p className="mb-3">כדי להישאר מעודכנים בחידושים, מומלץ לעקוב ביוטיוב אחר:</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "הדס אבידור גולדין", desc: "שגרירת קנבה — סרטונים קצרים וממוקדים", url: "https://www.youtube.com/@hadasavidor" },
                      { name: "שגית חדד", desc: "מורה ושגרירת קנבה — הסברים מותאמים למורים", url: "https://www.youtube.com/@sagithadad" },
                      { name: "הילי זוורו", desc: "חומרים למורים, קנבה וכלים ליצירת תוכן", url: "https://youtube.com/@telavivit" },
                    ].map((person) => (
                      <a key={person.name} href={person.url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-colors">
                        <span className="text-red-400">▶</span>
                        <div>
                          <div className="text-sm font-medium text-foreground">{person.name}</div>
                          <div className="text-xs text-muted-foreground">{person.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* מצגת סיכום */}
          <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "1600ms", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">סיכום מצגת — כל כלי AI בקנבה</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">מצגת שהוצגה בהדרכת זום למורים — סיכום מקיף של כלי ה-AI בקנבה</p>
            <SlideViewer slides={canvaAiSlides} title="מדריך קנבה למורים: יצירה ופדגוגיה בעידן הבינה המלאכותית" />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CanvaPage;
