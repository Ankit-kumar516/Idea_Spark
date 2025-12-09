import { Link, useLocation } from "react-router-dom";
import { Lightbulb, LayoutDashboard, PlusCircle, User, LogOut, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "All Ideas", path: "/dashboard", icon: LayoutDashboard },
    { name: "My Ideas", path: "/dashboard/my-ideas", icon: Lightbulb },
    { name: "Add New", path: "/add-idea", icon: PlusCircle },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border p-4 fixed left-0 top-16">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200",
              isActive(item.path)
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}

        <div className="pt-4 mt-4 border-t border-sidebar-border">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-destructive hover:bg-destructive/10 w-full transition-all duration-200">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Trending Section */}
      <div className="mt-8 p-4 bg-accent/10 rounded-2xl">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-5 w-5 text-accent" />
          <span className="font-heading font-semibold text-foreground">Trending</span>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            #sustainability
          </li>
          <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            #ai-projects
          </li>
          <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            #mobile-apps
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
