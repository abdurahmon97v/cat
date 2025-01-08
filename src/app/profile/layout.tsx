import Link from "next/link";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[100%]">
      <div className="p-[30px] w-[300px] bg-blue-400 flex flex-col h-[70vh] gap-[30px]">
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/profile/address"}>address</Link>
        <Link href={"/profile/change-profile"}>change profile</Link>
      </div>
      <div className="p-[30px]">{children}</div>
    </div>
  );
};

export default ProfileLayout;
