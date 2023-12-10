"use client";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(message);
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
            className="w-full rounded-md border bg-gray-300/80 p-2 focus:outline-none"
          />
        </div>

        <button className="rounded-md bg-gray-200 p-2 hover:bg-gray-300">
          <Send className="text-gray-500" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
