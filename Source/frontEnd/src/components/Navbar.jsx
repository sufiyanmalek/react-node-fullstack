import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({ setView, handleLogout }) => {
  const location = useLocation();
  return (
    <div className="w-[100vw]">
      <div className="border border-black flex align-items-center justify-between">
        <a
          href="#"
          onClick={() => setView(0)}
          className="text-blue-700 text-2xl font-bold "
        >
          Spiritual Organization
        </a>
        {location.pathname !== "/user/home" && (
          <ul className="flex w-100 justify-between align-items-center ">
            <li className="mx-3 my-auto">
              <a href="#" onClick={() => setView(1)}>
                Create User
              </a>
            </li>
            <li className="mx-3 my-auto">
              <a href="#" onClick={() => setView(2)}>
                Donations
              </a>
            </li>
            <li className="mx-3 my-auto">
              <a href="#" onClick={handleLogout}>
                LogOut
              </a>
            </li>
          </ul>
        )}
        {location.pathname === "/user/home" && (
          <ul className="flex w-100 justify-between align-items-center ">
            <li className="mx-3 my-auto">
              <a href="#" onClick={() => setView(1)}>
                Pay Online
              </a>
            </li>
            <li className="mx-3 my-auto">
              <a href="#" onClick={() => setView(2)}>
                Profile
              </a>
            </li>
            <li className="mx-3 my-auto">
              <a href="#" onClick={handleLogout}>
                LogOut
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
