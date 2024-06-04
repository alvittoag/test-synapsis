import CardPost from "@/components/sections/CardPost";
import posts from "@/services/posts";
import { IPosts } from "@/type";
import React from "react";

const getPosts = async () => {
  const res = await posts.getAll();

  return res.data;
};

export default async function Home() {
  const data: IPosts[] = await getPosts();
  return (
    <main>
      {data.map((item) => (
        <CardPost key={item.id} item={item} />
      ))}
    </main>
  );
}
