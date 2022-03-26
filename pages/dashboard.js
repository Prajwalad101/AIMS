import useUser from "../hooks/users/useUser";

function Dashboard({ userSession }) {
  const id = userSession.current.id;
  const { isLoading, isError, error, data } = useUser(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const userData = data?.data;
  const verificationStatus = userData.isVerified;

  console.log(verificationStatus);
  return (
    <div>
      <h1>Dashboard</h1>
      <p className="text-lg">{verificationStatus}</p>
    </div>
  );
}

export default Dashboard;
