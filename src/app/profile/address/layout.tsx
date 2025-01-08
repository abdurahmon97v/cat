import Link from "next/link";
import React from "react";

const AdressLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-4xl text-red-400">AdressLayout</h1>
      <Link href={"/profile/address/news"}>News Link</Link>
      {children}
    </div>
  );
};

export default AdressLayout;
