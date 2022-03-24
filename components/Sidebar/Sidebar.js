import { useRouter } from "next/router";
import { useState } from "react";

function Sidebar({ user }) {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("dashboard");

  const userHandler = () => {
    console.log("Link clicked");
    user === "farmer" ? router.push("/personal-info") : router.push("/users");
  };

  return (
    <div className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 h-[100vh] ">
        <a href="https://flowbite.com" className="flex pl-2.5 mb-5">
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            AIMS
          </span>
        </a>
        <ul className="space-y-2">
          <li>
            <a
              className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedOption === "dashboard" ? "bg-gray-900" : ""
              }`}
            >
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li onClick={userHandler}>
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="flex-1 ml-3 whitespace-nowrap">
                {user === "admin" && "Users"}
                {user === "farmer" && "Personal Info"}
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                3
              </span>
            </a>
          </li>

          <li>
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
          </li>
          <li>
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
