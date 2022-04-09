import { useQuery } from "react-query";

const getItemById = async (userId) => {
  const res = await fetch(`/api/items?${userId}`);

  if (!res.ok) {
    throw new Error("Could not fetch item", 404);
  }

  return res.json();
};

function useItem(userId) {
  return useQuery(["users", userId], () => getItemById(userId));
}

export default useItem;
