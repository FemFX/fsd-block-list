"use client";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { PageSpinner } from "@/shared/ui/page-spinner";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isLoading, isError } = useQuery({
      queryKey: ["session"],
      queryFn: authControllerGetSessionInfo,
      retry: 0,
      staleTime: 5 * 60 * 1000,
    });

    if (isLoading) {
      return <PageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
