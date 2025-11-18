import { Home, BookOpen, Calendar, Heart, HandHeart, MessageSquare, Hash, Users, User, Settings } from "lucide-react";
import { MenuNavLink } from "@/components/MenuNavLink";
import civiCircleLogo from "@/assets/civicircle-logo.jpg";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Sidebar Navigation - Always Visible on Desktop */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-sidebar border-r border-sidebar-border z-50">
        <div className="flex items-center gap-3 p-6 border-b border-sidebar-border">
          <img src={civiCircleLogo} alt="CiviCircle" className="h-10 w-10 rounded-lg object-contain" />
          <div>
            <h1 className="text-base font-bold text-primary">CiviCircle</h1>
            <p className="text-xs text-muted-foreground">San Francisco</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <MenuNavLink to="/" icon={Home} label="Home" />
          <MenuNavLink to="/posts" icon={BookOpen} label="Posts" />
          <MenuNavLink to="/events" icon={Calendar} label="Events" />
          <MenuNavLink to="/donations" icon={Heart} label="Donations" />
          <MenuNavLink to="/volunteering" icon={HandHeart} label="Volunteering" />
          <MenuNavLink to="/messages" icon={MessageSquare} label="Messages" />
          <MenuNavLink to="/channels" icon={Hash} label="Channels" />
          <MenuNavLink to="/directory" icon={Users} label="Directory" />
        </nav>

        <div className="p-4 space-y-1 border-t border-sidebar-border">
          <MenuNavLink to="/profile" icon={User} label="Profile" />
          <MenuNavLink to="/settings" icon={Settings} label="Settings" />
        </div>
      </aside>

      {/* Main Content Area with Sidebar Offset */}
      <div className="flex-1 lg:pl-64">
        <Outlet />
      </div>
    </div>
  );
};
