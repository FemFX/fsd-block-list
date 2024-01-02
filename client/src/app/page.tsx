"use client";

import { SignOutButton, protectedPage } from "@/features/auth";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { Header } from "@/shared/ui/header";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
    staleTime: 5 * 60 * 1000,
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
export default protectedPage(Home);
