import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/dashboard" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="IdeaHub Logo" 
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-heading font-bold text-primary-foreground">
              IdeaHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors duration-200 relative",
                  isActive(link.path) && "text-primary-foreground after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="navAccent" size="sm" asChild>
              <Link to="/add-idea">Add Idea</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="navAccent" size="sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-primary-foreground/80 hover:text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-foreground/10 transition-colors",
                  isActive(link.path) && "text-primary-foreground bg-primary-foreground/10"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 px-4 pt-2">
              <Button variant="navAccent" size="sm" asChild>
                <Link to="/add-idea" onClick={() => setIsOpen(false)}>Add Idea</Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground" asChild>
                <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
              </Button>
              <Button variant="navAccent" size="sm" asChild>
                <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
