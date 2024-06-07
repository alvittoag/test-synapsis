import CardComments from "@/components/sections/CardComments";
import CardPost from "@/components/sections/CardPost";
import CardUserPost from "@/components/sections/CardUserPost";
import { dummyUser } from "@/constans";
import posts from "@/services/posts";
import React from "react";

const getDetailPosts = async (id: number) => {
  try {
    const resDetailPost = await posts.getById(id);

    const resComments = await posts.getByComments(id);

    return {
      post: resDetailPost.data,
      comments: resComments.data,
    };
  } catch (err: any) {
    const errorMessage = err.response.data.message;

    return { error: errorMessage };
  }
};

const getUserPosts = async (userId: number) => {
  try {
    const resUser = await posts.getByUserId(userId);

    return { data: resUser.data };
  } catch (err: any) {
    const errorMessage = err.response.data.message;

    return { error: errorMessage };
  }
};

export default async function DetailPost({
  params,
}: {
  params: { id: string[] };
}) {
  let postId: number = parseInt(params?.id[0]);

  let userId: number = parseInt(params?.id[1]);

  const { post, comments } = await getDetailPosts(postId);

  const { data: useData, error: errorUserData } = await getUserPosts(userId);

  return (
    <main>
      <CardUserPost error={errorUserData} user={useData ?? dummyUser} />

      <CardPost item={post} detail />

      <CardComments comments={comments} />
    </main>
  );
}
