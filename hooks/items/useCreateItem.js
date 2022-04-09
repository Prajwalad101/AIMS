import { useMutation, useQueryClient } from "react-query";

function useCreateItem() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (newItem) => {
      console.log(newItem);
      const res = await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!res.ok) {
        throw new Error("Error while adding item", 404);
      }

      return res;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("items");
      },
    }
  );

  return mutation;
}

export default useCreateItem;
