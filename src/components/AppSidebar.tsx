import { Home, Calendar, MessageSquare, Hash, Users, User } from "lucide-react";
import { MenuNavLink } from "@/components/MenuNavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Messages", url: "/messages", icon: MessageSquare },
  { title: "Channels", url: "/channels", icon: Hash },
  { title: "Directory", url: "/directory", icon: Users },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <MenuNavLink
                    to={item.url}
                    icon={item.icon}
                    label={item.title}
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
