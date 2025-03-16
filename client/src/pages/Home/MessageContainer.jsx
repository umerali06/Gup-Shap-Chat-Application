import React from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";

const MessageContainer = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="border-b border-b-white/10 p-3">
        <User />
      </div>
      <div className="h-full overflow-y-auto p-3">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="flex p-2 gap-1">
        <input
          type="text"
          placeholder="Type Here ..."
          className="input input-primary w-full p-3 focus:outline-none"
        />
        <button className="btn btn-square hover:btn-primary border-1 border-[#5754e8]/50 p-3 w-[4rem]">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
