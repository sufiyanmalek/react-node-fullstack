import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DevoteeLoginPage = () => {
  const navigate = useNavigate();
  const [devotee, setDevotee] = useState();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setDevotee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(devotee);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    var data = JSON.stringify(devotee);

    var config = {
      method: "post",
      url: "http://localhost:3000/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          alert("Otp has been sent to your Registered email!");
          setError();
          navigate("/verify", { state: { devotee: devotee } });
        }
      })
      .catch(function (error) {
        setError(error);
      });
  };
  return (
    <div className="border border-black text-center w-[20%] mx-auto mt-52 rounded-xl bg-white">
      <h1 className="text-xl p-2 font-bold">Devotee Login</h1>
      <form
        action="#"
        onChange={handleChange}
        className=""
        onSubmit={handleSubmit}
      >
        <input
          className="my-2 p-2 rounded-xl border border-black bg-white"
          type="text"
          name="userId"
          placeholder="Devotee userID"
        />{" "}
        <br />
        <input
          className="my-2 p-2 rounded-xl border border-black bg-white"
          type="password"
          name="password"
          placeholder="Devotee password"
        />{" "}
        <br />
        {error && (
          <span className="text-xs  text-red-500 m-0">
            {error.response.data}
          </span>
        )}
        <br></br>
        <button
          type="submit"
          className="py-1 px-3 m-2 bg-blue-700 text-white rounded-lg"
        >
          login
        </button>
        <Link
          to={"/"}
          className=" py-1.5 bg-green-900 px-3 text-white rounded-lg"
        >
          Admin Login
        </Link>
      </form>
    </div>
  );
};

export default DevoteeLoginPage;
