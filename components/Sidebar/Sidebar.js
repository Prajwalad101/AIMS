import { useRouter } from "next/router";
import { useState } from "react";

import { farmerSidebarData, adminSidebarData } from "./Sidebar-data";

function Sidebar({ user }) {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  // change the sidebar data depending the logged in user
  const sidebarData = user === "farmer" ? farmerSidebarData : adminSidebarData;

  const linkHandler = (item) => {
    setSelectedOption(item.title);
    router.push(`${item.url}`);
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
          {sidebarData.map((item) => (
            <li
              key={item.id}
              className="hover:cursor-pointer"
              onClick={() => linkHandler(item)}
            >
              <a
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700 ${
                  selectedOption === item.title ? "bg-gray-700" : ""
                }`}
              >
                <span className="ml-3">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
