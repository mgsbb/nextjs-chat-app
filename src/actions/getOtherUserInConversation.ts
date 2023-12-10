import prisma from "@/libs/prisma";
import getSession from "./getSession";
import getCurrentUser from "./getCurrentUser";
import getConversationById from "./getConversationById";
import getUserById from "./getUserById";

const getOtherUserInConversation = async (conversationId: string) => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await getCurrentUser();
    const conversation = await getConversationById(conversationId);

    if (!currentUser) {
      return null;
    }

    const userId = conversation?.userIds.filter(
      (userId) => userId !== currentUser?.id,
    )[0];

    const otherUser = await getUserById(userId!);

    return otherUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getOtherUserInConversation;
