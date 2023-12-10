import prisma from "@/libs/prisma";
import getSession from "./getSession";

const getMessages = async (conversationId: string) => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const messages = prisma.message.findMany({
      where: { conversationId },
    });

    return messages;
  } catch (error) {
    console.log(error);
  }
};

export default getMessages;
