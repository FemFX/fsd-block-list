"use client";

import { useSignOut } from "@/features/auth/model/use-sign-out";
import Button from "@/shared/ui/button";

export const SignOutButton = () => {
  const { signOut, isLoading } = useSignOut();

  return (
    <Button onClick={() => signOut({})} disabled={isLoading} variant="outlined">
      Sign Out
    </Button>
  );
};
