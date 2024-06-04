import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  variants: "success" | "danger";
};

export default function Chip({ children, variants }: Props) {
  return (
    <span
      className={cn(
        "p-2 rounded-full flex w-20 justify-center text-white font-medium",
        variants === "success" ? "bg-green-600" : "bg-red-600"
      )}
    >
      {children}
    </span>
  );
}
