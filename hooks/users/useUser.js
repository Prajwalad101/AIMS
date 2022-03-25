import { useQuery } from "react-query";

const getUserFromId = async (userId) => {
  const res = await fetch(`/api/user/${userId}`);

  if (!res.ok) {
    throw new Error("Could not fetch user with given id");
  }

  return res.json();
};

function useUser(userId) {
  return useQuery("user", () => getUserFromId(userId));
}

export default useUser;
