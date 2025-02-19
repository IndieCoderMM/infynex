import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const ProfileButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
};

export default ProfileButton;
