"use client";
import TextField from "@/shared/ui/text-field";
import { useBlockItems } from "../model/use-block-items";
import { Spinner } from "@/shared/ui/spinner";
import { BlockItem } from "./block-item";

export const BlockList = ({ className }: { className?: string }) => {
  const { isLoading, q, setQ, items } = useBlockItems();
  return (
    <div className={className}>
      <TextField
        className="mb-2"
        label="Search..."
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />

      <div className="rounded-xl bg-slate-100/50 px-10 py-6">
        {isLoading ? (
          <>
            <Spinner className="text-teal-600 w-10 h-10 mx-auto" />
          </>
        ) : (
          items.map((item) => <BlockItem key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};
