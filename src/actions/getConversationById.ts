import prisma from "@/libs/prisma";
import getSession from "./getSession";

const getConversationById = async (conversationId: string) => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
    });

    if (!conversation) {
      return null;
    }

    return conversation;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getConversationById;
