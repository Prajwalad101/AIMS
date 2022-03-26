import { useState } from "react";

import UserModal from "../components/UserModal";
import useUsers from "../hooks/users/useUsers";

function Users() {
  const { isLoading, isError, data, error } = useUsers();

  const users = data?.data;

  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  const modalHandler = (user) => {
    setOpen(true);
    setSelectedUser(user);
  };

  if (isLoading) {
    return <div>Loading users</div>;
  }

  if (isError) {
    return <div>Error while fetching users information</div>;
  }

  return (
    <div className="flex grow mx-3 flex-col">
      <UserModal open={open} setOpen={setOpen} user={selectedUser} />
      <h1 className="text-xl font-medium py-3 pl-2 mb-2">Users</h1>
      <div className="relative overflow-x-auto shadow-md rounded-sm w-full">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-black uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-6 py-3 text-gray-500">
                User
              </th>
              <th scope="col" className="px-6 py-3 text-gray-500">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-gray-500">
                Province
              </th>
              <th scope="col" className="px-6 py-3 text-gray-500">
                District
              </th>
              <th scope="col" className="px-6 py-3 text-gray-500">
                Municipality
              </th>
              <th scope="col" className="px-6 py-3 text-gray-500">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="border-b hover:bg-gray-50" key={user._id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {user.firstName} {user.lastName}
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.provinceNo}</td>
                <td className="px-6 py-4">{user.district}</td>
                <td className="px-6 py-4">{user.municipality}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => modalHandler(user)}
                  >
                    Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
