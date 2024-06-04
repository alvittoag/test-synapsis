"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();

  const [inputValue, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setValue(inputValue);
  };

  const handleSearch = () => {
    if (inputValue) return router.push(`/users/?search=${inputValue}`);

    if (!inputValue) return router.push("/users");
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  const handleClick = () => {
    return handleSearch();
  };

  return (
    <div className="flex items-center gap-3">
      <Input
        value={inputValue ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Search User Name..."
        className="w-full md:w-72"
      />

      <Button variant="secondary" onClick={handleClick}>
        Search
      </Button>
    </div>
  );
}
