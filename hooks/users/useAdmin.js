import { useQuery } from "react-query";

const getAdminById = async (id) => {
  const res = await fetch(`/api/admin/${id}`);

  if (!res.ok) {
    throw new Error("No developer with that id found");
  }
  return res.json();
};

function useAdmin(id) {
  return useQuery(["admin", id], () => getAdminById(id), {
    enabled: !!id,
  });
}

export default useAdmin;
