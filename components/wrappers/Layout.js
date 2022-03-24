import Sidebar from "../Sidebar/Sidebar";

function Layout({ children, user }) {
  return (
    <div className="flex">
      <Sidebar user={user.current} />
      {children}
    </div>
  );
}

export default Layout;
