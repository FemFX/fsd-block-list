"use client";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
} from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });
  return <div>{data?.email}</div>;
}
