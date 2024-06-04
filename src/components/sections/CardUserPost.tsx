import { IUsers } from "@/type";

export default function CardUserPost({ user }: { user: IUsers }) {
  return (
    <main className="space-y-1 italic mt-4">
      <h1 className="text-gray-500 font-medium text-sm md:text-base">
        Post by:
      </h1>

      <h1 className="md:text-lg font-medium">
        {user.name}
        <span className="text-xs text-gray-500">{`(${user.status})`}</span>
      </h1>

      <div className="flex items-center gap-2 text-xs md:text-base">
        <p>{user.email}</p>·<p>{user.gender}</p>
      </div>
    </main>
  );
}
