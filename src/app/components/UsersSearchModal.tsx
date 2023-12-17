"use client";

import { Transition, Dialog } from "@headlessui/react";
import { User } from "@prisma/client";
import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import Avatar from "./Avatar";

const UsersSearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState<User[] | null>(null);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        onClose();
        setUserInput("");
        setResults(null);
      }}
      className="relative z-50"
    >
      {/* overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full rounded bg-white p-10 md:max-w-xl lg:max-w-4xl">
          <Dialog.Title className="text-center text-xl font-bold">
            Find users
          </Dialog.Title>
          <Dialog.Description className="text-center text-gray-500">
            Search by username or email address
          </Dialog.Description>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const response = await axios.get(
                  `/api/users?search=${userInput}`,
                );
                setResults(response.data.users);
              } catch (error) {
                console.log(error);
              }
            }}
            className="flex flex-col gap-6 py-10 md:flex-row"
          >
            <label htmlFor="users" className="sr-only">
              Users:
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-200 p-2"
              id="users"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="rounded-md bg-purple-500 p-2 px-4 text-white">
              Search
            </button>
          </form>

          <h2
            className={`pb-3 text-center font-semibold ${
              results === null ? "hidden" : ""
            }`}
          >
            Search results
          </h2>
          <div className="flex flex-col gap-4">
            {results?.length !== 0 ? (
              results?.map((user) => (
                <UserResultBox key={user.id} user={user} />
              ))
            ) : (
              <div className="text-center text-sm text-gray-500">
                No results found
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default UsersSearchModal;

const UserResultBox = ({ user }: { user: User }) => {
  return (
    <div
      className="flex flex-col items-center justify-between 
    gap-4 rounded-md border p-4 md:flex-row md:p-2"
    >
      <div className="flex gap-6">
        <Avatar src={user.image} />
        <div className="flex flex-col">
          <span>{user.name}</span>
          <span className="text-sm text-gray-600">{user.email}</span>
        </div>
      </div>

      <button className="rounded-md bg-purple-500 p-2 px-4 text-xs text-white">
        Send Friend Request
      </button>
    </div>
  );
};
