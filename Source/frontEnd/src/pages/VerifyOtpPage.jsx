import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const VerifyOtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState();

  //verify otp
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = location.state.devotee.userId;
    console.log(otp);
    var data = JSON.stringify({
      userId: userId,
      otp: otp,
    });

    var config = {
      method: "post",
      url: "http://localhost:3000/user/verify",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          setError();
          console.log(response);
          alert("login successful");
          Cookies.set("user", JSON.stringify(response.data.user));
          navigate("/user/home");
        }
      })
      .catch(function (error) {
        setError(error);
      });
  };

  //resend otp
  const resendOtp = () => {
    setError();
    var data = JSON.stringify(location.state.devotee);

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
        }
      })
      .catch(function (error) {
        setError(error);
      });
  };
  return (
    <div className="border border-black text-center w-[20%] mx-auto mt-52 rounded-xl bg-white">
      <h1 className="text-xl p-2 font-bold">Verify Otp</h1>
      <form action="#" className="" onSubmit={handleSubmit}>
        <input
          className="my-2 p-2 rounded-xl border border-black bg-white"
          type="text"
          name="otp"
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter Otp"
        />{" "}
        <br />
        {error && (
          <span className="text-xs  text-red-500 m-0">
            {error.response.data}
          </span>
        )}
        <div className="mt-0">
          <span
            className="text-blue-700 hover:cursor-pointer"
            onClick={resendOtp}
          >
            Resend Otp
          </span>
        </div>
        <br />
        <button
          type="submit"
          className="py-1 px-3 m-2 bg-blue-700 text-white rounded-lg"
        >
          Verify Otp
        </button>
      </form>
    </div>
  );
};

export default VerifyOtpPage;
