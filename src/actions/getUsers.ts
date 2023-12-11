import prisma from "@/libs/prisma";
import getSession from "./getSession";

const getUsers = async (search: string) => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return [];
    }

    // find all users except current session user
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getUsers;
