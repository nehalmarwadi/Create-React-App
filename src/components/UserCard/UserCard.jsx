import React from "react";

const UserCard = ({ user }) => {
  return (
    <li class="flex flex-col items-center py-8 m-8 list-none w-64 bg-white rounded-xl shadow-lg">
      <img
        class="mb-4 h-32 w-32 rounded-full self-center"
        src={user?.avatar}
        alt="user-img"
      />
      <div class="self-center flex flex-col items-center">
        <p class="text-2xl font-medium text-slate-900 self-center">
          {user?.first_name} {user?.last_name}
        </p>
        <p class="text-xl text-slate-500 truncate self-center">{user?.email}</p>
      </div>
    </li>
  );
};

export default UserCard;