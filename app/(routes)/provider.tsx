import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const DashboardProvider = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { redirectToSignIn, userId } = await auth();

  if (!userId) {
    redirectToSignIn();
    return;
  }

  return <SidebarProvider>{children}</SidebarProvider>;
};

export default DashboardProvider;
