"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Topbar;