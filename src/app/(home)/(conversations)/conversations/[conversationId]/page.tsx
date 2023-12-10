import getUserById from "@/actions/getUserById";
import Header from "./Header";
import MessageInput from "./MessageInput";
import Body from "./Body";
import getOtherUserInConversation from "@/actions/getOtherUserInConversation";

const ConversationPage = async ({
  params: { conversationId },
}: {
  params: { conversationId: string };
}) => {
  const otherUser = await getOtherUserInConversation(conversationId!);

  return (
    <div className="flex w-full flex-col">
      <Header user={otherUser} />
      <Body />
      <MessageInput />
    </div>
  );
};

export default ConversationPage;
