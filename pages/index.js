import { useSession } from "next-auth/react";

import Sidebar from "../components/Sidebar/Sidebar";
import useAdmin from "../hooks/users/useAdmin";

export default function Home({ user }) {
  console.log(user);

  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
}
