import { useQuery } from "react-query";

const getUsers = async () => {
  const res = await fetch("/api/users");

  if (!res.ok) {
    throw new Error("Could not fetch users");
  }

  return res.json();
};

function useUsers() {
  return useQuery(["users"], getUsers);
}

export default useUsers;
