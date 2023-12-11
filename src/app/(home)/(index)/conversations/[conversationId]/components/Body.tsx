"use client";
import { Message, User } from "@prisma/client";
import MessageBox from "./MessageBox";
import { pusherClient } from "@/libs/pusher";
import { useEffect, useRef, useState } from "react";
import { find } from "lodash";

const Body = ({
  initialMessages,
  conversationId,
  currentUser,
}: {
  initialMessages: Message[];
  conversationId: string;
  currentUser: User;
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    pusherClient.subscribe(conversationId);
    bottomRef?.current?.scrollIntoView();

    const messageHandler = (message: Message) => {
      setMessages((current) => {
        if (find(current, { id: message.id })) {
          return current;
        }
        return [...current, message];
      });

      bottomRef?.current?.scrollIntoView();
    };

    pusherClient.bind("messages:new", messageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("messages:new", messageHandler);
    };
  }, [conversationId, messages]);

  return (
    <div className=" h-full overflow-y-scroll p-4">
      <div className="flex flex-col  gap-4">
        {messages.map((message) => (
          <MessageBox
            message={message}
            key={message.id}
            currentUser={currentUser}
          />
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

export default Body;
