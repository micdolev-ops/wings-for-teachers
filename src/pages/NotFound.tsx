import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center flex-col gap-4">
    <h1 className="text-6xl font-bold gradient-text">404</h1>
    <p className="text-muted-foreground text-xl">הדף לא נמצא</p>
    <Link to="/" className="text-primary hover:underline">חזרה לדף הבית</Link>
  </div>
);
export default NotFound;
