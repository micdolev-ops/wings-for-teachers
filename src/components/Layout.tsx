import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <ScrollProgress />
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <BackToTop />
  </div>
);
export default Layout;
