import Sidebar from "../Sidebar/Sidebar";

function Layout({ children, user }) {
  return (
    <div className="flex">
      <Sidebar user={user.current} />
      <div className="flex grow ml-64 overflow-x-hidden">{children}</div>
    </div>
  );
}

export default Layout;
