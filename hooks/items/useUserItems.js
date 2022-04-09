import { useQuery } from "react-query";

const getItemsByUser = async (userId) => {
  const res = await fetch(`/api/items?userId=${userId}`);

  if (!res.ok) {
    throw new Error("Cound not fetch items, 404");
  }

  return res.json();
};

function useUserItems(userId) {
  return useQuery(["items", userId], () => getItemsByUser(userId));
}

export default useUserItems;
