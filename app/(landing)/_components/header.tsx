import LoginButton from "@/components/logic/login-button";
import { ThemeToggle } from "@/components/logic/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { APP_TITLE } from "@/lib/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { MenuIcon, RocketIcon } from "lucide-react";
import Link from "next/link";

const routes = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
] as const;

export const Header = () => {
  return (
    <header className="px-2 py-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="focus:outline-none focus:ring-1 md:hidden"
              size="icon"
              variant="outline"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <div className="py-1">
              {routes.map(({ name, href }) => (
                <DropdownMenuItem key={name} asChild>
                  <Link href={href}>{name}</Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          className="flex items-center justify-center text-xl font-medium"
          href="/"
        >
          <RocketIcon className="mr-2 h-5 w-5" /> {APP_TITLE}
        </Link>
        <nav className="ml-10 hidden gap-4 sm:gap-6 md:flex">
          {routes.map(({ name, href }) => (
            <Link
              key={name}
              className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
              href={href}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <SignedIn>
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <LoginButton>Login</LoginButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
