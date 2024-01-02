import {
  authControllerGetSessionInfo,
  authControllerSignOut,
} from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const sessionKey = ["session"];

export function useSessionQuery() {
  const session = useQuery({
    queryKey: sessionKey,
    queryFn: () => authControllerGetSessionInfo(),
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
  return session;
}

export function useResetSession() {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries();
}
