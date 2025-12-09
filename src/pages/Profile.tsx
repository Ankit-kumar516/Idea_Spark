import Navbar from "@/components/layout/Navbar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { User, Mail, Calendar, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinedDate: "January 2024",
    ideasCount: 5,
    likesReceived: 23,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <DashboardSidebar />

      <main className="ml-64 pt-20 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-8">
            My Profile
          </h1>

          <div className="bg-card rounded-2xl shadow-card p-8 animate-fade-up">
            {/* Avatar */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  {user.name}
                </h2>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-accent/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-accent">{user.ideasCount}</p>
                <p className="text-sm text-muted-foreground">Ideas Shared</p>
              </div>
              <div className="bg-info/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-info">{user.likesReceived}</p>
                <p className="text-sm text-muted-foreground">Likes Received</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-primary flex items-center justify-center gap-1">
                  <Calendar className="w-5 h-5" />
                </p>
                <p className="text-sm text-muted-foreground">{user.joinedDate}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button variant="accent" className="flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;