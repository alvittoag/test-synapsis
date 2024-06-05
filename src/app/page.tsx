import CardPost from "@/components/sections/CardPost";
import posts from "@/services/posts";
import { IPosts } from "@/type";
import React from "react";

const getPosts = async (page: number) => {
  const res = await posts.getAll(page);

  return res.data;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const data: IPosts[] = await getPosts(parseInt(searchParams.page));
  return (
    <main>
      {data.map((item) => (
        <CardPost key={item.id} item={item} />
      ))}
    </main>
  );
}
