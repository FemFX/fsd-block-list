"use client";

import { useBlockListQuery } from "@/entities/block-list";
import { protectedPage } from "@/features/auth";
import { AddBlockItemForm, BlockList } from "@/features/block-list";
import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { Header } from "@/shared/ui/header";
import { Profile } from "@/widgets/profile";

function Home() {
  const { data } = useBlockListQuery({ q: "" });
  return (
    <main className="min-h-screen flex flex-col">
      <Header right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main className="pt-10 px-5">
          <h1 className="text-2xl mb-8">Block List</h1>
          <AddBlockItemForm />

          <BlockList className="mt-5" />
        </main>
      </div>
    </main>
  );
}
export default protectedPage(Home);
