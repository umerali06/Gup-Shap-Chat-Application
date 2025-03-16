import React from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";

const UserSidebar = () => {
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col">
      <div>
        <h1 className="bg-black px-2 py-1 mx-3 mt-3 rounded-xl text-[#5754e8] text-xl font-semibold">
          Gup Shup
        </h1>
      </div>
      <div className="p-3">
        <label className="input focus-within:ring-0 focus-within:outline-none focus-within:border-none">
          <FaSearch />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="h-full overflow-y-scroll">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <div className=" flex items-center justify-between py-2 px-3">
        <div class="avatar">
          <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <button className="btn btn-primary btn-sm px-5">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;
