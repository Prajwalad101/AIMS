import { useMutation, useQueryClient } from "react-query";

function useCreateProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (newProduct) => {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Error while creating product", 404);
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

export default useCreateProduct;
