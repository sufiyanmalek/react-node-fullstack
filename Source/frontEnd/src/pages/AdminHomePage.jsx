import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserRegistrationForm from "../components/UserRegistrationForm";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import UserDetailsTable from "../components/UserDetailsTable";

const AdminHomePage = () => {
  // to change views
  const [view, setView] = useState(0);
  // to set form data
  const [userData, setUserData] = useState();

  // edit button view
  const [editView, setEditView] = useState(0);

  //error handler state
  const [error, setError] = useState();

  //to navigate
  const navigate = useNavigate();

  //validate admin on page load
  useEffect(() => {
    const cookie = Cookies.get("admin");
    console.log(cookie);
    if (cookie) {
      var data = cookie;

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
          if (response.status === 200) {
            navigate("/admin/home");
          }
        })
        .catch(function (error) {
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, []);

  // form data
  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(userData);
  };

  // admin logout
  const handleLogout = () => {
    Cookies.remove("admin");
    navigate("/");
  };

  // register user api request
  const registerUser = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      fullName: {
        firstName: userData.firstName,
        middleName: userData.middleName,
        lastName: userData.lastName,
      },
      photo: userData.photo,
      address: {
        flatNumber: userData.flatNumber,
        area: userData.area,
        city: userData.city,
        pincode: userData.pincode,
      },
      emailId: userData.emailId,
      initiationDate: userData.initiationDate,
    });

    var config = {
      method: "post",
      url: "http://localhost:3000/addUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setError();
        e.target.reset();
        setUserData();
        setView(0);
        alert("user Created");
      })
      .catch(function (error) {
        setError(error);
      });
  };

  //edit user request
  const handleEdit = (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      fullName: {
        firstName: userData.firstName,
        middleName: userData.middleName,
        lastName: userData.lastName,
      },
      photo: userData.photo,
      address: {
        flatNumber: userData.flatNumber,
        area: userData.area,
        city: userData.city,
        pincode: userData.pincode,
      },
      emailId: userData.emailId,
      initiationDate: userData.initiationDate,
      _id: userData._id,
    });

    var config = {
      method: "put",
      url: "http://localhost:3000/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setUserData();
        setError();
        setView(0);
        setEditView(0);
        alert("User Updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar setView={setView} handleLogout={handleLogout} />
      {view === 1 && (
        <UserRegistrationForm
          handleChange={handleChange}
          registerUser={registerUser}
          userData={userData}
          error={error}
          handleEdit={handleEdit}
          editView={editView}
        />
      )}
      {view === 0 && (
        <UserDetailsTable
          setUserData={setUserData}
          setEditView={setEditView}
          setView={setView}
        />
      )}
    </div>
  );
};

export default AdminHomePage;
