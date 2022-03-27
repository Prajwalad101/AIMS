import Image from "next/image";
import { useState } from "react";

import UserModal from "../components/UserModal";
import useUsers from "../hooks/users/useUsers";

function Users() {
  const { isLoading, isError, data, error } = useUsers();

  let users = data?.data;

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

  users = users.filter((user) => user.isVerified === "pending");

  return (
    <div className="font-poppins flex grow mx-3 flex-col">
      <UserModal open={open} setOpen={setOpen} user={selectedUser} />
      <h1 className="text-xl font-medium py-3 pl-2 mb-2">Applicants</h1>
      <div className="relative overflow-x-auto shadow-md rounded-sm w-full">
        <table className="w-full text-sm text-left">
          <thead className="text-[15px] text-gray-500 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3 ">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Province
              </th>
              <th scope="col" className="px-6 py-3">
                District
              </th>
              <th scope="col" className="px-6 py-3">
                Municipality
              </th>
              <th scope="col" className="px-6 py-3 text-gray-500">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {users.length === 0 && (
            <div className="py-3 pl-5 text-lg font-medium">
              No submissions found
            </div>
          )}

          {users.length !== 0 && (
            <tbody>
              {users.map((user) => (
                <tr
                  className="border-b hover:bg-gray-50 text-[15px]"
                  key={user._id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    <div className="flex gap-2 items-center">
                      <Image
                        alt={user.name}
                        src={user.image}
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                  </th>
                  <td className="px-6 py-4 ">{user.email}</td>
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
          )}
        </table>
      </div>
    </div>
  );
}

export default Users;
