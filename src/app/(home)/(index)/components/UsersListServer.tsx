import UsersList from "./UsersList";
import getUsers from "@/actions/getUsers";

const UsersListServer = async () => {
  const users = await getUsers();

  return <UsersList users={users} />;
};

export default UsersListServer;
