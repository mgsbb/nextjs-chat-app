"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut, MessagesSquare, Settings } from "lucide-react";
import Avatar from "./Avatar";
import { User } from "@prisma/client";

const MenuItems = ({ user }: { user: User | null }) => {
  return (
    <div
      className="flex min-h-screen flex-col justify-between border-r 
    border-gray-100 bg-white p-4 pb-4 pt-10"
    >
      <div className="flex flex-col gap-4">
        <Link href={"/"}>
          <button>
            <MessagesSquare
              size={36}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-200"
            />
          </button>
        </Link>

        <Link href="/settings">
          <button>
            <Settings
              size={36}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-200"
            />
          </button>
        </Link>

        <button onClick={() => signOut()}>
          <LogOut
            size={36}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-200"
          />
        </button>
      </div>

      <Link href={`/profile/${user?.id}`}>
        <Avatar src={user?.image || null} />
      </Link>
    </div>
  );
};

export default MenuItems;
