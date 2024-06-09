import { cookies } from "next/headers";

export default function ProfilePage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return <h2>Profile page</h2>;
}
