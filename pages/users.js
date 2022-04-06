import Image from "next/image";
import { useState } from "react";

import UserModal from "../components/UserModal";
import useUsers from "../hooks/users/useUsers";
import nodata from "../public/no-data.png";

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

  if (users.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center mx-auto mt-16">
        <Image src={nodata} alt="no-records" width={450} height={400} />
        <h1 className="text-2xl font-medium font-ibm mb-2">
          No Applications found!
        </h1>
      </div>
    );
  }

  return (
    <div className="font-poppins flex grow mx-3 flex-col">
      <UserModal open={open} setOpen={setOpen} user={selectedUser} />
      <h1 className="text-2xl font-ibm font-medium py-3 pl-2 mb-2 text-gray-700">
        Applicants
      </h1>
      <div className="relative overflow-x-auto shadow-md rounded-sm w-full">
        <table className="w-full text-sm text-left">
          <thead className="text-[14px] text-gray-400 font-ibm uppercase bg-gray-100">
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
                  <td className="px-6 py-4">
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
