import { useMutation, useQueryClient } from "react-query";

function useValidateUser(id) {
  const queryClient = useQueryClient();

  // create a mutation
  const mutation = useMutation(
    async ({ userInfo, id }) => {
      const res = await fetch(`/api/user/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (!res.ok) {
        throw Error("Error when adding user info for validation");
      }
      return res;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", id]);
      },
    }
  );

  return mutation;
}

export default useValidateUser;
