import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children, user }) {
  return (
    <div className="flex">
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        bodyClassName="font-poppins text-sm"
      />
      <Sidebar user={user.current} />
      <div className="flex grow ml-64 overflow-x-hidden">{children}</div>
    </div>
  );
}

export default Layout;
