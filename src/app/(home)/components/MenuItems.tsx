"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { LogOut, MessagesSquare, Settings } from "lucide-react";
import Avatar from "@/app/components/Avatar";
import { User } from "@prisma/client";
import { usePathname } from "next/navigation";

const MenuItems = ({ user }: { user: User | null }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(window.innerWidth);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [screenWidth]);

  if (pathname.startsWith("/conversations") && screenWidth < 1024) {
    return <></>;
  }

  return (
    <div
      className="flex flex-row border-t border-gray-300 bg-white p-4 lg:min-h-screen lg:flex-col 
    lg:justify-between lg:border-r lg:pb-4 lg:pt-10"
    >
      <div className="flex w-full items-center gap-4 lg:flex-col">
        <Link href={"/"} className=" w-full ">
          <button className="flex w-full justify-center rounded-lg hover:bg-gray-200">
            <MessagesSquare size={36} className=" p-2 text-gray-700 " />
          </button>
        </Link>

        <Link href="/settings" className="w-full">
          <button className="flex w-full justify-center rounded-lg hover:bg-gray-200">
            <Settings size={36} className=" p-2 text-gray-700 " />
          </button>
        </Link>

        <button
          onClick={() => signOut()}
          className="flex w-full justify-center rounded-lg hover:bg-gray-200"
        >
          <LogOut size={36} className="p-2 text-gray-700" />
        </button>
      </div>

      <Link href={`/profile/${user?.id}`} className="hidden lg:block">
        <Avatar src={user?.image || null} />
      </Link>
    </div>
  );
};

export default MenuItems;
