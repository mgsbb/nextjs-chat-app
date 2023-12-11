import getUserById from "@/actions/getUserById";
import Header from "./components/Header";
import MessageInput from "./components/MessageInput";
import Body from "./components/Body";
import getOtherUserInConversation from "@/actions/getOtherUserInConversation";
import getMessages from "@/actions/getMessages";
import getCurrentUser from "@/actions/getCurrentUser";

const ConversationPage = async ({
  params: { conversationId },
}: {
  params: { conversationId: string };
}) => {
  const otherUser = await getOtherUserInConversation(conversationId!);
  const messages = await getMessages(conversationId);
  const currentUser = await getCurrentUser();
  return (
    <div className="flex h-screen w-full flex-col">
      <Header user={otherUser} />
      <Body
        initialMessages={messages!}
        conversationId={conversationId}
        currentUser={currentUser!}
      />
      <MessageInput />
    </div>
  );
};

export default ConversationPage;
