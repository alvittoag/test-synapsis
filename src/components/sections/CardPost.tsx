import { IPosts } from "@/type";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CardPost({
  item,
  detail,
}: {
  item: IPosts;
  detail?: boolean;
}) {
  return (
    <article className="mt-5 md:mt-7 space-y-5 border-b last:border-none pb-8">
      <Link
        className="hover:text-gray-400 duration-500"
        href={`/post/${item.id}/${item.user_id}`}
      >
        <h1 className="text-xl md:text-2xl font-medium">{item.title}</h1>
      </Link>

      <p className="md:text-lg">{item.body}</p>

      {!detail && (
        <Button variant="outline" asChild>
          <Link href={`/post/${item.id}/${item.user_id}`}>Read More</Link>
        </Button>
      )}
    </article>
  );
}
