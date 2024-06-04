"use client";

import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-4 md:px-20 md:py-8 lg:px-52 lg:py-10">{children}</main>
  );
}
