import { APP_TITLE } from "@/lib/constants";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "Effortless Next.js Starter With Endless Potentials",
};

function LandingPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <div className="h-20"></div>
      <Footer />
    </>
  );
}

export default LandingPageLayout;
