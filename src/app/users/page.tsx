import ButtonAddUser from "@/components/sections/ButtonAddUser";
import Search from "@/components/sections/Search";
import TableUser from "@/components/sections/TableUser";

import users from "@/services/users";

const getUsers = async (search: string) => {
  try {
    const res = await users.getAll(search);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Users({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const data = await getUsers(searchParams.search ?? "");

  return (
    <main className="space-y-4">
      <div className="mt-7 space-y-4 md:space-y-0 md:flex justify-between items-center">
        <ButtonAddUser />

        <Search />
      </div>

      <TableUser data={data} />
    </main>
  );
}
