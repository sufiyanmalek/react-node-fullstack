import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const UserHomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [view, setView] = useState(0);

  // verify user on page access
  useEffect(() => {
    const cookie = JSON.parse(Cookies.get("user"));
    if (cookie) {
      setUser(cookie);
    } else {
      navigate("/devotee/login");
    }
  }, []);

  //handle logout
  const handleLogout = () => {
    Cookies.remove("user");
    navigate("/devotee/login");
  };

  //donate Money
  const donateMoney = (e) => {
    e.preventDefault();
  };
  console.log(user);
  return (
    <div>
      <Navbar handleLogout={handleLogout} setView={setView} />
      {view === 1 && (
        <div className="w-[50%] mx-auto border border-black mt-10">
          <h1 className="text-center text-3xl border-b border-black">
            Donation Form:{" "}
          </h1>
          <div className="p-5">
            <form action="#" onSubmit={donateMoney}>
              <label htmlFor="amount">Amount:</label>
              <input
                className="block border border-black mb-2 rounded-md py-1 px-2"
                type="number"
                name="amount"
                placeholder="Donation Amount"
                min={100}
              />
              <label htmlFor="month">Select Month:</label>
              <input
                className="block border border-black mb-2 rounded-md py-1 px-2"
                type="month"
                name="month"
                placeholder="Select Month"
              />
              <label htmlFor="month">Year:</label>

              <input
                className="block border border-black mb-2 rounded-md py-1 px-2"
                type="number"
                name="Year"
                max={9999}
                min={1000}
                placeholder="yyyy"
                required
              />
              <div>
                <button className="py-1 px-2 bg-green-600 text-white font-semibold rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHomePage;
