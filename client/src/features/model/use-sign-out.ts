import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useSignOut() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.SIGN_IN);
      queryClient.removeQueries({ queryKey: ["session"] });
    },
  });

  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
