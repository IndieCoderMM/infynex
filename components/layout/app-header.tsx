import { SidebarTrigger } from "@/components/ui/sidebar";
import ProfileButton from "../logic/profile-button";

function AppHeader() {
  return (
    <div className="flex w-full items-center justify-between p-4 shadow-sm">
      <SidebarTrigger />
      <ProfileButton />
    </div>
  );
}

export default AppHeader;

