import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-md">
        <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
          Error 404
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in [animation-delay:100ms]">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground animate-fade-in [animation-delay:200ms]">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 animate-fade-in [animation-delay:300ms]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg animate-fade-in [animation-delay:400ms]"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;