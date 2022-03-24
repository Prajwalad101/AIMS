import { useMutation, useQueryClient } from "react-query";

function useAdmins() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (newAdmin) => {
      const res = await fetch(`/api/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAdmin),
      });

      if (!res.ok) {
        throw Error("Error while adding admin to the database");
      }

      return res;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["admins"]);
      },
    }
  );

  return mutation;
}

export default useAdmins;
