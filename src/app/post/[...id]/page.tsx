import CardComments from "@/components/sections/CardComments";
import CardPost from "@/components/sections/CardPost";
import CardUserPost from "@/components/sections/CardUserPost";
import posts from "@/services/posts";
import { IComments, IPosts, IUsers } from "@/type";
import React from "react";

const getDetailPosts = async (id: number, userId: number) => {
  const resDetailPost = await posts.getById(id);

  const resComments = await posts.getByComments(id);

  const resUser = await posts.getByUserId(userId);

  return {
    post: resDetailPost.data,
    comments: resComments.data,
    user: resUser.data,
  };
};

export default async function DetailPost({
  params,
}: {
  params: { id: string[] };
}) {
  let postId = parseInt(params.id[0]);

  let userId = parseInt(params.id[1]);

  const {
    post,
    comments,
    user,
  }: { post: IPosts; comments: IComments[]; user: IUsers } =
    await getDetailPosts(postId, userId);

  return (
    <main>
      <CardUserPost user={user} />

      <CardPost item={post} detail />

      <CardComments comments={comments} />
    </main>
  );
}
