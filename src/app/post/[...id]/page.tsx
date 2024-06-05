import CardComments from "@/components/sections/CardComments";
import CardPost from "@/components/sections/CardPost";
import CardUserPost from "@/components/sections/CardUserPost";
import posts from "@/services/posts";
import React from "react";

const getDetailPosts = async (id: number, userId: number) => {
  try {
    const resDetailPost = await posts.getById(id);

    const resComments = await posts.getByComments(id);

    const resUser = await posts.getByUserId(userId);

    return {
      post: resDetailPost?.data,
      comments: resComments?.data,
      user: resUser?.data,
    };
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
  let postId = parseInt(params?.id[0]);

  let userId = parseInt(params?.id[1]);

  const data = await getDetailPosts(postId, userId);

  return (
    <main>
      {data.error ? (
        <p className="mt-32 text-center text-red-600 font-medium text-xl">
          * {data.error}
        </p>
      ) : (
        <>
          <CardUserPost user={data?.user} />

          <CardPost item={data?.post} detail />

          <CardComments comments={data.comments} />
        </>
      )}
    </main>
  );
}
