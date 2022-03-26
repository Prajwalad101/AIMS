import Sidebar from "../Sidebar/Sidebar";

function Layout({ children, user }) {
  return (
    <div className="flex">
      <Sidebar user={user.current} />
      <div className="flex grow">{children}</div>
    </div>
  );
}

export default Layout;
