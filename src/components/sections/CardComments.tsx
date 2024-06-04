import { IComments } from "@/type";
import React from "react";

export default function CardComments({ comments }: { comments: IComments[] }) {
  return (
    <main className="space-y-7 py-5">
      <h1 className="font-bold text-lg">Comments {comments?.length}</h1>

      {comments?.length === 0 && (
        <p className="text-gray-500">No comments yet</p>
      )}

      {comments.map((item) => (
        <article
          key={item.id}
          className="space-y-2 border-b pb-5 last:border-none"
        >
          <div>
            <h1 className="font-medium">{item.name}</h1>
            <h5 className="text-xs md:text-sm text-gray-500">{item.email}</h5>
          </div>

          <p>{item.body}</p>
        </article>
      ))}
    </main>
  );
}
