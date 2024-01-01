"use client";

import { SignOutButton } from "@/features/auth";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { Header } from "@/shared/ui/header";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });
  return (
    <main>
      <Header
        right={
          <div>
            {data?.email} <SignOutButton />
          </div>
        }
      />
    </main>
  );
}
