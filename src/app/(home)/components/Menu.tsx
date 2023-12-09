import MenuItems from "./MenuItems";
import getCurrentUser from "@/actions/getCurrentUser";

const Menu = async () => {
  const user = await getCurrentUser();
  return <MenuItems user={user} />;
};

export default Menu;
