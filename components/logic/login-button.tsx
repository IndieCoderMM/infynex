import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

const LoginButton = ({ children }: PropsWithChildren) => {
  return (
    <SignInButton forceRedirectUrl={"/dashboard"}>
      <Button variant={"default"}>{children}</Button>
    </SignInButton>
  );
};

export default LoginButton;
