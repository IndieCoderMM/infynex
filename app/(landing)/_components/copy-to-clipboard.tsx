"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/tailwind-utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export const CopyToClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    await navigator.clipboard.writeText(text);
    toast("Copied to clipboard", {
      icon: <CopyIcon className="h-4 w-4" />,
    });
  };

  return (
    <div className="flex w-full justify-center gap-3">
      <Input
        readOnly
        value={text}
        className="w-full bg-secondary font-mono text-muted-foreground"
      />
      <Button size="icon" onClick={() => copyToClipboard()}>
        {copied ? (
          <CheckIcon
            className={cn(
              copied ? "opacity-100" : "opacity-0",
              "h-5 w-5 transition-opacity duration-500",
            )}
          />
        ) : (
          <CopyIcon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};
