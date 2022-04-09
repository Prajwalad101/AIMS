import { useQuery } from "react-query";

const getItems = async () => {
  const res = await fetch("/api/items");

  if (!res.ok) {
    throw new Error("Cound not fetch items, 404");
  }

  return res.json();
};

function useItems() {
  return useQuery("items", getItems());
}

export default useItems;
