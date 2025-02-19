import {
  FolderOpenDotIcon,
  LayoutDashboardIcon,
  LockOpen,
  RocketIcon,
} from "lucide-react";
import { Drizzle, ShadcnUi } from "../_components/feature-icons";

export const Features = [
  {
    name: "Instant Setup",
    description:
      "Pre-configured Next.js, Tailwind CSS, and Clerk authentication – launch in minutes.",
    logo: RocketIcon,
  },
  {
    name: "Easy Authentication",
    description: "Fully integrated authentication, including social logins.",
    logo: LockOpen,
  },
  {
    name: "Database Ready",
    description:
      "Drizzle ORM and PostgreSQL, already wired up and migration-ready.",
    logo: Drizzle,
  },
  {
    name: "Modern UI",
    description:
      "Shadcn UI, a modern, responsive, and customizable UI kit for your app.",
    logo: ShadcnUi,
  },
  {
    name: "Dashboard",
    description:
      "Pre-built dashboard template so you can start adding features, not layouts.",
    logo: LayoutDashboardIcon,
  },
  {
    name: "App router",
    description: "Ready-to-go App routes to get you started quickly.",
    logo: FolderOpenDotIcon,
  },
];
