"use client";

import { useSessionQuery } from "@/entities/session";
import { SignOutButton, protectedPage } from "@/features/auth";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { Header } from "@/shared/ui/header";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data } = useSessionQuery();
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
