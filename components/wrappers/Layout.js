import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMenu } from "react-icons/ai";

function Layout({ children, user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        bodyClassName="font-poppins text-sm"
      />

      <Sidebar user={user.current} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full">
        <AiOutlineMenu
          size={27}
          className="ml-5 mt-5 hover:cursor-pointer hover:text-gray-700 lg:hidden"
          onClick={() => setIsOpen(true)}
        />
        <div className="flex grow lg:ml-64 overflow-x-hidden ">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
