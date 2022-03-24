import Sidebar from "../Sidebar/Sidebar";

function Layout({ children, user }) {
  return (
    <div>
      <Sidebar user={user.current} />
      {children}
    </div>
  );
}

export default Layout;
