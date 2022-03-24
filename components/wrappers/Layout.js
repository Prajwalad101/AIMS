import Sidebar from "../Sidebar/Sidebar";

function Layout({ children, user }) {
  return (
    <div className="flex">
      <Sidebar user={user.current} />
      <div className="sm:mx-7 mx-3 sm:mt-5 mt-5">{children}</div>
    </div>
  );
}

export default Layout;
