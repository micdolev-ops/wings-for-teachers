import { useState } from "react";
import Layout from "@/components/Layout";
import { Bot, MessageSquare, Lightbulb, AlertCircle, ArrowLeft, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import notebookLmLogo from "@/assets/notebooklm-logo.svg";
import geminiLogo from "@/assets/gemini-logo.svg";
import SlideViewer from "@/components/SlideViewer";
const notebookLmSlides = Array.from({ length: 16 }, (_, i) => `/slides/notebooklm/slide-${i + 1}.jpg`);
const notebookLmRotate180Slides = [4, 6, 9, 10, 12];
interface SubTopic { title: string; description: string; youtubeVideoId?: string; youtubeVideoTitle?: string; }
interface PlatformCardProps { title: string; description: string; icon?: React.ElementType; iconImage?: string; youtubeVideoId?: string; youtubeVideoTitle?: string; presentationSlides?: string[]; presentationRotate180Slides?: number[]; presentationTitle?: string; geminiSubTopics?: SubTopic[]; canvasSubTopics?: SubTopic[]; delay: number; }
const PlatformCard = ({ title, description, icon: Icon, iconImage, youtubeVideoId, youtubeVideoTitle, presentationSlides, presentationRotate180Slides, presentationTitle, geminiSubTopics, canvasSubTopics, delay }: PlatformCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasContent = youtubeVideoId || (presentationSlides && presentationSlides.length > 0) || geminiSubTopics || canvasSubTopics;
  return (
    <div className={cn("group relative rounded-2xl","bg-[hsl(280_50%_25%_/_0.4)] backdrop-blur-xl border border-[hsl(320_70%_60%_/_0.35)]",
      "shadow-[0_8px_32px_-8px_hsl(320_70%_55%_/_0.3)] transition-all duration-500","opacity-0 animate-fade-in-up",
      isExpanded && "shadow-[0_16px_48px_-8px_hsl(320_70%_55%_/_0.5)]")} style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}>
      <button onClick={() => hasContent && setIsExpanded(!isExpanded)} disabled={!hasContent}
        className={cn("relative z-10 w-full text-right p-8", hasContent && "cursor-pointer hover:bg-[hsl(280_50%_25%_/_0.15)] transition-colors rounded-2xl", isExpanded && "rounded-b-none")}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_0_30px_8px_hsl(320_70%_55%_/_0.3)]">
                {iconImage ? <img src={iconImage} alt={title} className="w-12 h-12 object-contain" /> : Icon ? <Icon className="w-8 h-8 text-secondary" /> : null}
              </div>
              <div><h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">{title}</h3>{hasContent && <span className="text-xs text-muted-foreground">לחצו לפתיחה</span>}</div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
          {hasContent && <div className="flex-shrink-0 p-2 rounded-full bg-secondary/20 text-secondary">{isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</div>}
        </div>
      </button>
      <div className={cn("overflow-hidden transition-all duration-500 ease-in-out", isExpanded ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="relative z-10 px-8 pb-8 space-y-6">
          {youtubeVideoId && (
            <div>
              {youtubeVideoTitle && <h4 className="text-sm font-medium text-foreground mb-2 px-1">{youtubeVideoTitle}</h4>}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${youtubeVideoId}`} title={`${title} video`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              </div>
            </div>
          )}
          {presentationSlides && presentationSlides.length > 0 && <SlideViewer slides={presentationSlides} rotate180Slides={presentationRotate180Slides} title={presentationTitle || "מצגת"} />}
          {geminiSubTopics && (
            <div className="space-y-3">
              <h4 className="font-bold text-foreground text-base border-b border-border/30 pb-2">שימושים עיקריים</h4>
              {geminiSubTopics.map((sub) => (
                <div key={sub.title} className="p-4 rounded-xl bg-muted/20 border border-border/30">
                  <div className="font-semibold text-foreground text-sm mb-1">{sub.title}</div>
                  <p className="text-xs text-muted-foreground">{sub.description}</p>
                  {sub.youtubeVideoId && (
                    <div className="mt-3 rounded-xl overflow-hidden">
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${sub.youtubeVideoId}`} title={sub.youtubeVideoTitle} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div>
                    </div>
                  )}
                  {!sub.youtubeVideoId && <span className="text-xs text-secondary/70 mt-1 inline-block">סרטון בקרוב...</span>}
                </div>
              ))}
            </div>
          )}
          {canvasSubTopics && (
            <div className="space-y-3">
              <h4 className="font-bold text-foreground text-base border-b border-border/30 pb-2">מצב קנווס (Canvas)</h4>
              {canvasSubTopics.map((sub) => (
                <div key={sub.title} className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                  <div className="font-semibold text-foreground text-sm mb-1">{sub.title}</div>
                  <p className="text-xs text-muted-foreground">{sub.description}</p>
                  {sub.youtubeVideoId && (
                    <div className="mt-3 rounded-xl overflow-hidden">
                      {sub.youtubeVideoTitle && <p className="text-xs font-medium text-foreground mb-2">{sub.youtubeVideoTitle}</p>}
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${sub.youtubeVideoId}`} title={sub.youtubeVideoTitle} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div>
                    </div>
                  )}
                  {!sub.youtubeVideoId && <span className="text-xs text-secondary/70 mt-1 inline-block">סרטון בקרוב...</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const AIPage = () => {
  const promptTips = [
    { title: "מה זה פרומפט?", description: "הבסיס להבנת שפת ה-AI", icon: MessageSquare },
    { title: "עקרונות לכתיבה נכונה", description: "טכניקות שיפור התוצאות", icon: Lightbulb },
    { title: "טעויות נפוצות", description: "ומה לעשות במקום", icon: AlertCircle },
  ];
  const platforms = [
    { title: "NotebookLM", description: "כלי מחקר ולמידה מבוסס AI של גוגל שמאפשר לנתח מסמכים וליצור תוכן חכם", iconImage: notebookLmLogo, youtubeVideoId: "ElAhV2Qi5sA", youtubeVideoTitle: "מדריך לעבודה ב-NotebookLM · ד״ר לימור ליבוביץ", presentationSlides: notebookLmSlides, presentationRotate180Slides: notebookLmRotate180Slides, presentationTitle: "סיכום הדרכת הווידאו" },
    { title: "Gemini", description: "מודל השפה המתקדם של גוגל לשיחות, יצירת תוכן וניתוח מידע מורכב", iconImage: geminiLogo, youtubeVideoId: "J53VSVs2R0w", youtubeVideoTitle: "יצירת מצגת בג'מיני" },
  ];
  return (
    <Layout>
      <section className="relative min-h-[50vh] py-16 md:py-24 pt-24 md:pt-36 flex items-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70">
          <source src="/videos/ai-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            <ArrowLeft className="w-4 h-4" /><span>חזרה לדף הבית</span>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-glow opacity-0 animate-scale-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              <span className="gradient-text">בינה מלאכותית למורים</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            למדו לכתוב פרומפטים נכונים ולהכיר את הכלים שישנו את הדרך שלכם להוראה
          </p>
          <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <ChevronDown className="w-8 h-8 mx-auto text-secondary/70 animate-bounce" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary/5 via-card to-primary/5 border border-border/50 shadow-card opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3 mb-4"><MessageSquare className="w-6 h-6 text-secondary" /><h2 className="text-2xl md:text-3xl font-bold text-foreground">בנייה נכונה של פרומפטים</h2></div>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">הסוד להפקת התוצאות הטובות ביותר מ-AI טמון באופן שבו אנחנו מנסחים את הבקשות שלנו. למדו את העקרונות לכתיבת פרומפטים אפקטיביים.</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {promptTips.map((tip, i) => (
                <div key={tip.title} className="p-6 rounded-2xl bg-[hsl(280_50%_25%_/_0.4)] backdrop-blur-xl border border-[hsl(320_70%_60%_/_0.35)] opacity-0 animate-fade-in-up" style={{ animationDelay: `${600+i*100}ms`, animationFillMode: "forwards" }}>
                  <tip.icon className="w-6 h-6 text-[hsl(320_70%_60%)] mb-3" />
                  <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 opacity-0 animate-fade-in-up" style={{ animationDelay: "900ms", animationFillMode: "forwards" }}>
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-secondary" />הדגמה מודרכת</h3>
              <p className="text-muted-foreground">פרומפט ליצירת תמונה - שלב אחר שלב, מהרעיון הראשוני ועד לתוצאה המושלמת</p>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 opacity-0 animate-fade-in-up" style={{ animationDelay: "950ms", animationFillMode: "forwards" }}>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />דוגמת פרומפט: בניית מצגת
              </h3>
              <div className="bg-background/40 rounded-xl p-4 text-sm text-muted-foreground leading-relaxed space-y-3 font-mono" dir="rtl">
                <p>אתה מומחה כפול:</p>
                <p>מצד אחד — בעל ידע עמוק ומקצועי בנושא <span className="text-primary">[שם התחום]</span>, עם יכולת להסביר תכנים מורכבים בצורה בהירה ונגישה.</p>
                <p>מצד שני — מעצב חוויות למידה המתמחה ביצירת מצגות מהודקות, מרתקות ומשולבות ויזואלית.</p>
                <p>תפקידך לעזור לי לבנות מצגת על <span className="text-primary">[נושא המצגת]</span>, המותאמת לכיתה <span className="text-primary">[ו׳ / ז׳ / י״ב...]</span>, <span className="text-primary">[חינוך רגיל / חינוך מיוחד / כיתת בנים / כיתת בנות וכו׳]</span>.</p>
                <p>בכל שלב: הצע רעיונות, שאל שאלות כדי לחדד את הכיוון, ושלב ויזואליזציות, אנלוגיות ושאלות לשיח.</p>
                <p>המצגת צריכה להיות כזו ש<span className="text-primary">[תעורר חשיבה / תגרום לפעולה / תלמד שיטה חדשה]</span>.</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">החליפו את הסוגריים המרובעים בפרטים הספציפיים שלכם</p>
            </div>

            {/* סוכני AI לבניית פרומפטים */}
            <div className="mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Bot className="w-5 h-5 text-secondary" />סוכני AI לבניית פרומפטים
              </h3>
              <div className="bg-muted/30 border border-border/40 rounded-2xl p-5 mb-5 text-sm text-muted-foreground leading-relaxed space-y-2">
                <p>מצרפת לכם שני עוזרים לכתיבת פרומפטים טובים — אחד עובד בתוך ChatGPT והשני בתוך Gemini.</p>
                <p>לחצו על הקישור לפי הכלי שאתם רגילים לעבוד איתו ופשוט כתבו:</p>
                <p className="font-medium text-foreground bg-secondary/10 border border-secondary/20 rounded-lg px-3 py-2">"עזור לי לנסח פרומפט מעולה לקנבה AI ל... (יצירת תמונה / יצירת מסמך / יצירת קוד למשחק...)"</p>
                <p>תנו כמה שיותר פירוט על התוצר המבוקש — והסוכן יתן לכם פרומפט מקצועי להעתקה ישירות לקנבה.</p>
                <p className="text-primary">💡 בשני הכלים ניתן ללחוץ על המיקרופון ולהקליט את הבקשה שלכם בקול!</p>
              </div>
              <p className="text-muted-foreground text-sm mb-4">מקווה שיועיל!</p>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://gemini.google.com/gem/1H8VilmeINGR2dqDP3gywe5EXTUB33Dx8" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[hsl(280_50%_25%_/_0.4)] border border-[hsl(320_70%_60%_/_0.35)] hover:border-secondary hover:bg-[hsl(280_50%_25%_/_0.6)] transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shrink-0 shadow-[0_0_20px_4px_hsl(320_70%_55%_/_0.3)]">
                    <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini" className="w-8 h-8" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="font-bold text-foreground group-hover:text-secondary transition-colors">בונה פרומפטים</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Gemini · לחצו לפתיחה</div>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:-translate-x-1 transition-all" />
                </a>
                <a href="https://chatgpt.com/g/g-682aed38065081919f3c0e393f4979a6-bvnh-prvmptym" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[hsl(280_50%_25%_/_0.4)] border border-[hsl(320_70%_60%_/_0.35)] hover:border-secondary hover:bg-[hsl(280_50%_25%_/_0.6)] transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shrink-0 shadow-[0_0_20px_4px_hsl(320_70%_55%_/_0.3)]">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" className="w-8 h-8" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="font-bold text-foreground group-hover:text-secondary transition-colors">בונה פרומפטים של עזי לוי</div>
                    <div className="text-xs text-muted-foreground mt-0.5">ChatGPT · לחצו לפתיחה</div>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:-translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 opacity-0 animate-fade-in" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>כלים לפי פלטפורמה</h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "1100ms", animationFillMode: "forwards" }}>הכירו את הכלים המתקדמים ולמדו להשתמש בהם בהוראה</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platforms.map((p, i) => <PlatformCard key={p.title} {...p} delay={1200+i*150} />)}
          </div>
          <p className="text-center text-muted-foreground mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "1500ms", animationFillMode: "forwards" }}>כלים נוספים יתווספו בקרוב...</p>
        </div>
      </section>
    </Layout>
  );
};
export default AIPage;
