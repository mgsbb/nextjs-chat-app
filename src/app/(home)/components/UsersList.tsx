"use client";
import { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import UserBox from "./UserBox";
import { User } from "@prisma/client";
import { usePathname } from "next/navigation";

const UsersList = ({ users }: { users: User[] }) => {
  const pathname = usePathname();
  const [screenWidth, setScreenWidth] = useState(0);

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
      className={`border-gray-300 p-8 lg:visible lg:min-h-screen lg:min-w-[25%] lg:border-r lg:p-4`}
    >
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-center text-lg font-bold">Messages</h2>
        <button className="w-min opacity-0">
          <UserPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {users.map((user) => (
          <UserBox key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
