"use client";
import axios from "axios";
import { Send } from "lucide-react";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";

const MessageInput = () => {
  const params = useParams();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios.post("/api/messages", {
      message,
      conversationId: params.conversationId,
    });
  };

  return (
    <div className=" border-t border-gray-300 p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <div className="w-full">
          <label htmlFor="messageInput"></label>
          <input
            type="text"
            id="messageInput"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md border bg-gray-200 p-2 
            placeholder:text-gray-500 focus:outline-none"
          />
        </div>

        <button className="rounded-md bg-purple-500 p-2 hover:bg-purple-600">
          <Send className="text-gray-100" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
