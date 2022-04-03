import { useRouter } from "next/router";

export default function Home({ user }) {
  const router = useRouter();

  if (user.current === "farmer") {
    router.push("/user/dashboard");
  } else if (user.current === "admin") {
    router.push("/admin/dashboard");
  }
  return <div></div>;
}
