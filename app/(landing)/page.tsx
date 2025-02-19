import LoginButton from "@/components/logic/login-button";
import { Button } from "@/components/ui/button";
import { APP_TITLE, Contact } from "@/lib/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { GithubIcon, PlusIcon, RocketIcon } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import { CopyToClipboard } from "./_components/copy-to-clipboard";
import { NextjsIcon } from "./_components/feature-icons";
import CardSpotlight from "./_components/hover-card";
import { Features } from "./_content/features";
import { Texts } from "./_content/texts";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "Effortless Next.js Starter With Endless Potentials",
};

const githubUrl = {
  ssh: `git@github.com:${Contact.ghUsername}/${Contact.repo}.git`,
  http: `https://github.com/${Contact.ghUsername}/${Contact.repo}`,
};

const HomePage = () => {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl flex-col items-center justify-center gap-4 py-10 text-center md:py-12">
        <div className="p-4">
          <div className="mb-10 flex items-center justify-center gap-3">
            <NextjsIcon className="h-[52px] w-[52px]" />
            <PlusIcon className="h-8 w-8" />
            <RocketIcon className="h-12 w-12" />
          </div>
          <h1 className="text-balance bg-gradient-to-tr from-black/70 via-black to-black/60 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20 sm:text-5xl md:text-6xl lg:text-7xl">
            {Texts.hero.title}
          </h1>
          <p className="mb-10 mt-4 text-balance text-center text-muted-foreground md:text-lg lg:text-xl">
            {Texts.hero.subtitle}
          </p>
          <div className="mb-10">
            <div className="mx-auto flex max-w-[450px] items-center justify-center">
              <CopyToClipboard text={"git clone " + githubUrl.ssh} />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a
                href={githubUrl.http}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-1 h-5 w-5" />
                {Texts.hero.ctaSecondary}
              </a>
            </Button>

            <SignedIn>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <LoginButton>{Texts.hero.ctaPrimary}</LoginButton>
            </SignedOut>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto lg:max-w-screen-lg">
          <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            <a id="features"></a> {Texts.features.title}
          </h1>
          <p className="mb-10 text-balance text-center text-muted-foreground md:text-lg lg:text-xl">
            {Texts.features.subtitle}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {Features.map((feature, i) => (
              <CardSpotlight
                key={i}
                name={feature.name}
                description={feature.description}
                logo={<feature.logo className="h-12 w-12" />}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
