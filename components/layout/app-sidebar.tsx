import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { APP_TITLE, copyRight } from "@/lib/constants";
import {
  Calendar,
  Home,
  Inbox,
  RocketIcon,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link className="flex items-center text-2xl font-semibold" href="/">
          <RocketIcon className="mr-2 h-5 w-5" /> {APP_TITLE}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title} className="p-2">
                  <Link href={item.url}>
                    <SidebarMenuButton className="text-lg" size={"lg"}>
                      <item.icon className="h-8 w-8" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <h2 className="p-2 text-sm text-gray-400">{copyRight}</h2>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
