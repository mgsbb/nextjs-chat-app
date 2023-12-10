import { Message } from "@prisma/client";
import MessageBox from "./MessageBox";

const Body = async ({ messages }: { messages: Message[] }) => {
  return (
    <div className=" overflow-y-scroll p-4">
      <div className="flex flex-col  gap-4">
        {messages.map((message) => (
          <MessageBox message={message} key={message.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
