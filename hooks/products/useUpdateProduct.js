import { useMutation, useQueryClient } from "react-query";

function useUpdateProduct(id) {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (updatedProduct) => {
      const res = await fetch(`/api/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        throw new Error("Error while updating product", 404);
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

export default useUpdateProduct;
