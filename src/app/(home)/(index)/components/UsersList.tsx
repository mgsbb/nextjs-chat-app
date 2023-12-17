"use client";
import { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import UserBox from "./UserBox";
import { User } from "@prisma/client";
import { usePathname } from "next/navigation";
import UsersSearchModal from "@/app/components/UsersSearchModal";

const UsersList = ({ users }: { users: User[] }) => {
  const pathname = usePathname();
  const [screenWidth, setScreenWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <UsersSearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div
        className={`overflow-y-auto border-gray-300 p-8 lg:visible lg:h-screen
       lg:min-w-[25%] lg:border-r lg:p-4`}
      >
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-center text-lg font-bold">Messages</h2>
          <button className="hidden w-min" onClick={() => setIsModalOpen(true)}>
            <UserPlus size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {users.map((user) => (
            <UserBox key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersList;
