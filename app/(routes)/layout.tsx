import AppHeader from "@/components/layout/app-header";
import AppSidebar from "@/components/layout/app-sidebar";
import React from "react";
import DashboardProvider from "./provider";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader />
        <div className="p-10">{children}</div>
      </main>
    </DashboardProvider>
  );
}

export default DashboardLayout;

