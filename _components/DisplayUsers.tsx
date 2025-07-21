import { prisma } from "@/lib/prisma";
import User from "@/_types/typeList";

export const dynamic = "force dynamic";

const DisplayUsers = async () => {
  const user: User[] = await prisma.user.findMany();

  return (
    <section className="border h-full p-2">
      <ul className="flex flex-col gap-2">
        {user.map((user) => (
          <li key={user.id} className="border p-2 bg-red-500">
            <p>User Id: {user.id}</p>
            <p>User Name: {user.name}</p>
            <p>User Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayUsers;
