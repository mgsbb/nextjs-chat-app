import { Message, User } from "@prisma/client";
import React from "react";

const MessageBox = ({
  message,
  currentUser,
}: {
  message: Message;
  currentUser: User;
}) => {
  return (
    <span
      className={`${
        message.senderId === currentUser?.id
          ? "self-end bg-purple-500 text-white"
          : "bg-gray-300"
      } 
     w-max max-w-[70%] rounded-md p-3  lg:max-w-[700px]`}
    >
      {message.body}
    </span>
  );
};

export default MessageBox;
