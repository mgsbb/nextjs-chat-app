import { User } from "@prisma/client";
import Avatar from "./Avatar";

const UserBox = ({ user }: { user: User }) => {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-md p-2 hover:bg-gray-200">
      <Avatar src={user.image} />
      <div className="flex w-full flex-col justify-between">
        <p className="text-sm">{user.name}</p>
        <p className="text-xs text-gray-500">message</p>
      </div>

      <div>
        <p className="text-xs text-gray-500">20:20</p>
        <p className="w-min rounded-full bg-gray-500 px-2 text-xs text-white ">
          100
        </p>
      </div>
    </div>
  );
};

export default UserBox;
