import { useMutation, useQueryClient } from "react-query";

function useDeleteItem() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (itemId) => {
      const res = await fetch(`/api/items/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error while deleting item", 404);
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

export default useDeleteItem;
