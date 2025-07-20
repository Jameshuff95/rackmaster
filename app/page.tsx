import AddUser from "@/_components/AddUser";
import DisplayUsers from "@/_components/DisplayUsers";

export default async function Home() {
  return (
    <main className="border h-full p-2 scroll-auto">
      <DisplayUsers />
      <AddUser />
    </main>
  );
}
