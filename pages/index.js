import { useSession } from "next-auth/react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  const { data: session, status } = useSession();

  const { name, email, image } = session?.user;

  return (
    <div className="flex">
      <Sidebar />
      {/* <Dashboard /> */}
    </div>
  );
}
