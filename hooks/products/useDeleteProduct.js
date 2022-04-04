import { useMutation, useQueryClient } from "react-query";

function useDeleteProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (productId) => {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error while deleting product", 404);
      }

      return res;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
      },
    }
  );

  return mutation;
}

export default useDeleteProduct;
