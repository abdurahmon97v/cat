import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="p-[40px] gap-[40px] bg-blue-500 flex justify-center">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/profile"}>Profile</Link>
    </div>
  );
};
