"use client";

import { User } from "@prisma/client";
import Avatar from "./Avatar";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UserBox = ({ user }: { user: User }) => {
  const router = useRouter();

  const openConversation = async () => {
    try {
      const response = await axios.post("/api/conversations", {
        userId: user.id,
      });
      const conversationId = (await response.data.conversationId) as string;
      router.push(`/conversations/${conversationId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={openConversation}
      className="flex items-center gap-4 rounded-md p-2 hover:bg-gray-200"
    >
      <Avatar src={user.image} />
      <div className="flex w-full flex-col justify-between text-left  ">
        <p className="w-full text-sm ">{user.name}</p>
        <p className="text-xs text-gray-500">message</p>
      </div>

      <div>
        <p className="text-xs text-gray-500">20:20</p>
        <p className="w-min rounded-full bg-purple-500 px-2 text-xs text-white opacity-0">
          1
        </p>
      </div>
    </button>
  );
};

export default UserBox;
