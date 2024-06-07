"use client";

import { IUsers } from "@/type";
import { toast } from "../ui/use-toast";
import React from "react";

export default function CardUserPost({
  user,
  error,
}: {
  user: IUsers;
  error: string;
}) {
  React.useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        description: "User create this post not found",
      });
    }
  }, []);

  return (
    <main className="space-y-1 italic mt-4">
      <h1 className="text-gray-500 font-medium text-sm md:text-base">
        Post by:
      </h1>

      <h1 className="md:text-lg font-medium">
        {user.name} {""}
        <span className="text-xs text-gray-500">{`(${user.status})`}</span>
      </h1>

      <div className="flex items-center gap-2 text-xs md:text-base">
        <p>{user.email}</p>·<p>{user.gender}</p>
      </div>
    </main>
  );
}
