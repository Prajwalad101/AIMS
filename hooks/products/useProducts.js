import { useQuery } from "react-query";

const getAllProducts = async () => {
  const res = await fetch("/api/products");

  if (!res.ok) {
    throw new Error("Could not fetch products", 404);
  }
  return res.json();
};

function useProducts() {
  return useQuery("products", getAllProducts);
}

export default useProducts;
