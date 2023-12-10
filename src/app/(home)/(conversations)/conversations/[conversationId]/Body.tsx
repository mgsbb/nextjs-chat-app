import { Message } from "@prisma/client";
import MessageBox from "./MessageBox";

const Body = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="h-full p-4">
      <div className="flex flex-col gap-3">
        {messages.map((message) => (
          <MessageBox key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Body;
