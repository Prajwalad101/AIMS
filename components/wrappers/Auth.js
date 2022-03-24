import { useSession } from "next-auth/react";
import useAdmin from "../../hooks/users/useAdmin";

function Auth({ children, loggedUser, userSession }) {
  const { data: session, status } = useSession({ required: true });

  // check for the user
  const isUser = !!session?.user;

  // logged in user information
  const userInfo = session?.user;
  userSession.current = userInfo;
  // check if user email matches the admin email
  const { data, isError, error } = useAdmin(userInfo?.email);

  // if not, the user is a farmer
  if (data?.body.length === 0) {
    // userSession.current.role = "farmer";
    loggedUser.current = "farmer";
  } else {
    // userSession.current.role = "admin";
    loggedUser.current = "admin";
  }

  if (isError) {
    console.log(error.message);
  }

  if (isUser && data) {
    return children;
  }

  return <div>Loading...</div>;
}

export default Auth;
