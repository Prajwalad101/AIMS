import { useSession } from "next-auth/react";
import useUser from "../../hooks/users/useUser";

function Dashboard() {
  const { data: userSession, status } = useSession();

  const id = userSession.user.id;
  const { isLoading, isError, error, data } = useUser(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const userData = data?.data;
  const verificationStatus = userData.isVerified;

  let userName = userData.name;
  userName = userName.split(" ");
  userName = userName[0];
  return (
    <div>
      <span className="bg-blue-100 text-blue-800 text-sm mr-2 px-3 py-1 rounded capitalize">
        {verificationStatus}
      </span>
    </div>
  );
}

export default Dashboard;
