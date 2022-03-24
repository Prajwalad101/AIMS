import { useMutation, useQueryClient } from "react-query";

function useValidateUser() {
  const queryClient = useQueryClient();

  // create a mutation
  const mutation = useMutation(
    async (userDetails) => {
      const res = await fetch("/api/verify-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (!res.ok) {
        throw Error("Error when adding user info for validation");
      }
      return res;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );

  return mutation;
}

export default useValidateUser;
