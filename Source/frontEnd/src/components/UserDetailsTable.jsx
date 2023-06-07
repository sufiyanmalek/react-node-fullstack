import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDetailsTable = ({ setUserData, setView, setEditView }) => {
  const [userList, setUserList] = useState([]);
  // get All users
  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:3000/users",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setUserList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // handle delete user
  const deleteUser = (user) => {
    var data = JSON.stringify(user);
    const users = userList.filter((e) => e != user);
    console.log(users, "a");
    setUserList(users);
    var config = {
      method: "delete",
      url: "http://localhost:3000/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        alert(" user deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //handle edit user
  const editUser = (user) => {
    const editUser = { ...user, ...user.fullName, ...user.address };
    setUserData(editUser);
    setEditView(1);
    setView(1);
  };
  return (
    <div className="text-white font-bold w-[70%] mx-auto my-10">
      <h1 className="text-center text-2xl font-bold">Users:</h1>
      <table className="w-[100%]">
        <thead className="text-black">
          <tr>
            <th>Profile Photo</th>
            <th>UserDetails</th>
            <th>Address</th>
            <th>Registeration Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {userList.map((user) => {
            return (
              <tr className="text-black font-normal" key={user._id}>
                <td>
                  <img src={user.photo} alt="" />
                </td>
                <td>
                  <p>
                    <strong>FirstName:</strong> {user.fullName.firstName}
                  </p>
                  <p>
                    {" "}
                    <strong>MiddleName:</strong> {user.fullName.middleName}
                  </p>
                  <p>
                    {" "}
                    <strong>LastName:</strong> {user.fullName.lastName}
                  </p>
                  <p>
                    {" "}
                    <strong>Email:</strong> {user.emailId}
                  </p>
                </td>
                <td>
                  <p>
                    <strong>FlatNumber:</strong> {user.address.flatNumber}
                  </p>
                  <p>
                    <strong>Area:</strong> {user.address.area}
                  </p>
                  <p>
                    <strong>City:</strong> {user.address.city}
                  </p>
                  <p>
                    <strong>Pincode:</strong> {user.address.pincode}
                  </p>
                </td>
                <td>
                  <p>
                    <strong>InitiationDate:</strong>{" "}
                    {user.initiationDate.substring(0, 10)}
                  </p>
                </td>
                <td>
                  <button
                    className="text-white font-bold rounded-md p-2 bg-blue-500"
                    onClick={() => editUser(user)}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="text-white font-bold rounded-md p-2 bg-red-500"
                    onClick={() => deleteUser(user)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default UserDetailsTable;
