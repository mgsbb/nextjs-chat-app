import { Message } from "@prisma/client";
import React from "react";

const MessageBox = ({ message }: { message: Message }) => {
  return (
    <span className="min-w-min rounded-md bg-gray-300 p-3">{message.body}</span>
  );
};

export default MessageBox;
