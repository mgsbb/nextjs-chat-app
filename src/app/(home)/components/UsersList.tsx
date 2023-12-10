import { UserPlus } from "lucide-react";
import UserBox from "./UserBox";
import getUsers from "@/actions/getUsers";

const UsersList = async () => {
  const users = await getUsers();

  return (
    <div className="min-h-screen  bg-gray-50 p-4">
      <div className="flex items-center gap-40 pb-4">
        <h2 className="text-center text-lg font-bold">Messages</h2>
        <button className="w-min">
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
