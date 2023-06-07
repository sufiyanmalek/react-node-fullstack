import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(admin);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = JSON.stringify(admin);

    var config = {
      method: "post",
      url: "http://localhost:3000/admin/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.status === 200) {
          Cookies.set("admin", JSON.stringify(admin));
          navigate("/admin/home");
        }
      })
      .catch(function (error) {
        setError(error);
        console.log(error);
      });
  };
  return (
    <>
      <div className="border border-black text-center w-[20%] mx-auto mt-52 rounded-xl  bg-white">
        <h1 className="text-xl p-2 font-bold">Admin Login</h1>
        <form
          action="#"
          onChange={handleChange}
          className=""
          onSubmit={handleSubmit}
        >
          <input
            className="my-2 p-2 rounded-xl border border-black bg-white"
            type="text"
            name="adminId"
            placeholder="admin userID"
          />{" "}
          <br />
          <input
            className="my-2 p-2 rounded-xl border border-black bg-white"
            type="password"
            name="adminPassword"
            placeholder="admin password"
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
            to={"/devotee/login"}
            className=" py-1.5 bg-green-900 px-3 text-white rounded-lg"
          >
            Devotee Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default AdminLoginPage;
