import Layout from "@/components/Layout";
import { Youtube, ChevronDown } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const channels = [
  { name: "הדס אבידור גולדין", channelName: "I Can Canva Hebrew", description: "הדרכות קנבה בעברית — מתחילים ועד מתקדמים, כלי Pro וסטודיו קסם", url: "https://youtube.com/@icancanva-hebrew", category: "קנבה" },
  { name: "שגית חדד", channelName: "לומדים Canva ועוד", description: "הדרכות קנבה ממוקדות למורים — בקצב ברור ורגוע, עם דוגמאות ישימות לכיתה", url: "https://youtube.com/@sagithadad", category: "קנבה" },
  { name: "הילי זוורו", channelName: "Tel Avivit", description: "כלי בינה מלאכותית למורים — חומרים ליצירת תוכן ופעילויות לתלמידים", url: "https://youtube.com/@telavivit", category: "בינה מלאכותית" },
  { name: "עדי הרטוב-דמרי", channelName: "חינוך לבינה", description: "בינה מלאכותית למורים — כלים, פדגוגיה ויישומים מעשיים בכיתה", url: "https://youtube.com/@adihartuv-dimri", category: "בינה מלאכותית" },
  { name: 'ד"ר לימור ליבוביץ', channelName: "חינוך ליצירתיות בעידן ה-AI", description: "חינוך ליצירתיות בעידן הבינה המלאכותית — מחקר, פדגוגיה וכלים מעשיים", url: "https://youtube.com/@visual-class", category: "בינה מלאכותית" },
];

const categoryColors: Record<string, string> = {
  "קנבה": "bg-primary/10 text-primary border border-primary/20",
  "בינה מלאכותית": "bg-secondary/10 text-secondary border border-secondary/20",
};

const LifelongLearningPage = () => (
  <Layout>
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,40%,19%)] via-[hsl(285,40%,26%)] to-[hsl(280,40%,22%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          <span className="gradient-text">למידה לאורך החיים</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          הישארו מעודכנים — המלצות על ערוצי יוטיוב ואתרים שיעזרו לכם להמשיך לצמוח
        </p>
        <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
          <ChevronDown className="w-8 h-8 mx-auto text-primary/70 animate-bounce" />
        </div>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/20">
              <Youtube className="w-5 h-5 text-red-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">ערוצי יוטיוב מומלצים</h2>
          </div>
          <p className="text-muted-foreground mb-10">עקבו אחר היוצרים האלה כדי להישאר מעודכנים בכלים ובפדגוגיה החדישה ביותר</p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {channels.map((channel, i) => (
            <ScrollAnimation key={channel.name} delay={i * 100}>
              <a href={channel.url} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col h-full p-6 rounded-2xl bg-[hsl(280_50%_25%_/_0.4)] backdrop-blur-xl border border-[hsl(320_70%_60%_/_0.35)] hover:border-red-400/50 hover:shadow-[0_12px_40px_-8px_rgba(220,38,38,0.3)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <Youtube className="w-6 h-6 text-red-400" />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[channel.category]}`}>{channel.category}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-red-400 transition-colors mb-0.5">{channel.name}</h3>
                <p className="text-sm text-primary/80 mb-2 font-medium">{channel.channelName}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{channel.description}</p>
                <div className="flex items-center gap-1.5 mt-4 text-xs text-muted-foreground group-hover:text-red-400 transition-colors">
                  <Youtube className="w-3.5 h-3.5" />
                  <span>פתח ביוטיוב</span>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={600} className="mt-16 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-muted/20 border border-border/30 text-center">
            <p className="text-muted-foreground">המלצות על אתרים יתווספו בקרוב 🔜</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </Layout>
);

export default LifelongLearningPage;
