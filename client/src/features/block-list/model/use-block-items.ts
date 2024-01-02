import { useBlockListQuery } from "@/entities/block-list";
import { useDebounce } from "@/shared/lib/use-debounce";
import { useState } from "react";

export function useBlockItems() {
  const [q, setQ] = useState<string>("");

  const blockListQuery = useBlockListQuery({ q: useDebounce(q, 400) });

  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isLoading, q, setQ };
}
