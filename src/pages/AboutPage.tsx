import Layout from "@/components/Layout";
import ScrollAnimation from "@/components/ScrollAnimation";
import michalProfile from "@/assets/michal-profile.jpg";

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 min-h-[80vh]">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
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
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bio Text */}
                <div className="text-center md:text-right flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">מיכל אלגרבלי</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      שלום! אני מיכל, מורה עם תשוקה לטכנולוגיה חינוכית.
                    </p>
                    <p>
                      הקמתי את "בינה יתרה" מתוך רצון לעזור למורים להכיר את הכלים הטכנולוגיים החדשניים ביותר בצורה פשוטה ונגישה.
                    </p>
                    <p>
                      אני מאמינה שטכנולוגיה טובה לא מחליפה מורים - היא מעניקה להם כנפיים לעוף גבוה יותר וליצור חוויות למידה בלתי נשכחות.
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
