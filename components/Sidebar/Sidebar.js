import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { farmerSidebarData, adminSidebarData } from "./Sidebar-data";
import UserDropdown from "../UserDropdown";

function Sidebar({ user }) {
  console.log("User1", user);
  const router = useRouter();
  const url = router.pathname;

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // change the sidebar data depending the logged in user
  const sidebarData = user === "farmer" ? farmerSidebarData : adminSidebarData;

  useEffect(() => {
    sidebarData.forEach((item) => {
      if (url.includes(item.url)) {
        setSelectedItem(item);
      }
    });
  }, [url, sidebarData]);

  useEffect(() => {
    if (selectedItem === null) {
      return;
    }
    setSelectedOption(selectedItem.title);
  }, [selectedItem]);

  const linkHandler = (item) => {
    router.push(`${item.url}`);
  };

  return (
    <div className="w-64 fixed" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 h-[100vh] ">
        <a href="https://flowbite.com" className="flex pl-2.5 mb-5">
          <span className="self-center text-lg font-poppins font-semibold whitespace-nowrap text-white tracking-wider">
            AIMS
          </span>
        </a>
        <ul className="space-y-3">
          {sidebarData.map((item) => (
            <li
              key={item.id}
              className={`hover:cursor-pointer hover:bg-gray-700 rounded-sm text-white ${
                selectedOption === item.title ? "bg-gray-700" : ""
              }`}
              onClick={() => linkHandler(item)}
            >
              <div className="flex items-center pl-3 ">
                {item.icon}
                <a className="flex items-center p-2 text-base font-lato">
                  <span className="ml-3">{item.title}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 ">
          <UserDropdown user={user} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
