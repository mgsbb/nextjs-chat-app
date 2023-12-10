import getUserById from "@/actions/getUserById";
import Header from "./Header";
import MessageInput from "./MessageInput";
import Body from "./Body";
import getOtherUserInConversation from "@/actions/getOtherUserInConversation";
import getMessages from "@/actions/getMessages";

const ConversationPage = async ({
  params: { conversationId },
}: {
  params: { conversationId: string };
}) => {
  const otherUser = await getOtherUserInConversation(conversationId!);
  const messages = await getMessages(conversationId);

  return (
    <div className="flex w-full flex-col">
      <Header user={otherUser} />
      <Body messages={messages!} />
      <MessageInput />
    </div>
  );
};

export default ConversationPage;
