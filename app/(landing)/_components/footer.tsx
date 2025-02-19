import { Contact } from "@/lib/constants";
import { CodeIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-4 py-6">
      <div className="container flex items-center justify-between p-0">
        <div className="flex items-center">
          <CodeIcon className="mr-2 h-6 w-6" />
          <p className="text-sm">
            Built by{" "}
            <a
              className="underline underline-offset-4"
              href={Contact.personal}
              target="_blank"
            >
              {Contact.ghUsername}
            </a>
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <CodeIcon className="mr-2 h-6 w-6" />
            <p className="text-sm">
              Get the source code on{" "}
              <a
                className="underline underline-offset-4"
                href={`https://github.com/${Contact.ghUsername}/${Contact.repo}`}
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
