import { Link } from "react-router-dom";
import { Lightbulb, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-accent rounded-lg">
                <Lightbulb className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">IdeaHub</span>
            </div>
            <p className="text-background/70 max-w-sm">
              A platform for students to share ideas, collaborate, and build amazing projects together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-background/70 hover:text-accent transition-colors">
                  Explore Ideas
                </Link>
              </li>
              <li>
                <Link to="/add-idea" className="text-background/70 hover:text-accent transition-colors">
                  Submit Idea
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-background/50 text-sm">
          <p>© 2024 IdeaHub. Built with ❤️ for Hackathon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
