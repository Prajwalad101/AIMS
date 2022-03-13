import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  const { name, email, image } = session?.user;

  return (
    <div>
      <h1>User</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
