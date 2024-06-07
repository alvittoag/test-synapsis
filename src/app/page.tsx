import CardPost from "@/components/sections/CardPost";
import posts from "@/services/posts";
import { IPosts } from "@/type";

const getPosts = async () => {
  try {
    const res = await posts.getAll();

    return { data: res.data };
  } catch (err: any) {
    const errorMessage = err.response.data.message;
    return { error: errorMessage };
  }
};

export const revalidate = 3600;

export default async function Home() {
  const { data } = await getPosts();

  return (
    <main>
      {data.map((item: IPosts) => (
        <CardPost key={item.id} item={item} />
      ))}
    </main>
  );
}
