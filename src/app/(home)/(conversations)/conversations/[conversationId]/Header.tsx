import Avatar from "@/app/(home)/components/Avatar";
import { User } from "@prisma/client";

const Header = ({ user }: { user: User | null }) => {
  return (
    <div className="flex w-full flex-row items-center gap-4 border-b border-gray-300 p-4">
      <Avatar src={user?.image || null} />

      <div className="flex flex-col">
        <h1>{user?.name}</h1>
        <span className="text-xs text-gray-500">Status</span>
      </div>
    </div>
  );
};

export default Header;
