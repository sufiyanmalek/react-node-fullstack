import React from "react";

const UserRegistrationForm = ({
  handleChange,
  registerUser,
  userData,
  handleEdit,
  editView,
  error,
}) => {
  return (
    <div
      className="border border-black w-[70%] mx-auto p-5 mt-10"
      onSubmit={registerUser}
    >
      <form action="#">
        <div>
          <h1>FullName:</h1>

          <div className="border border-black p-5">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              required
              className="border border-black rounded-md mx-2"
              onChange={handleChange}
              value={userData?.firstName || ""}
            />
            <label htmlFor="middleName">Middle Name: </label>
            <input
              type="text"
              name="middleName"
              required
              onChange={handleChange}
              value={userData?.middleName || ""}
              className="border border-black rounded-md mx-2"
            />
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              required
              onChange={handleChange}
              value={userData?.lastName || ""}
              className="border border-black rounded-md mx-2"
            />
          </div>
        </div>
        <div>
          <h1>Photo:</h1>

          <div className="border border-black p-5">
            <input
              type="text"
              name="photo"
              required
              onChange={handleChange}
              value={userData?.photo || ""}
              className="border border-black rounded-md mx-2"
            />
          </div>
        </div>
        <div>
          <h1>Address:</h1>

          <div className="border border-black p-5">
            <label htmlFor="firstName">Flat No: </label>
            <input
              type="number"
              name="flatNumber"
              required
              onChange={handleChange}
              value={userData?.flatNumber || ""}
              className="border border-black rounded-md mx-2"
            />
            <label htmlFor="middleName"> Area : </label>
            <input
              type="text"
              name="area"
              required
              onChange={handleChange}
              value={userData?.area || ""}
              className="border border-black rounded-md mx-2"
            />
            <label htmlFor="lastName">City : </label>
            <input
              type="text"
              name="city"
              required
              onChange={handleChange}
              value={userData?.city || ""}
              className="border border-black rounded-md mx-2"
            />{" "}
            <br />
            <div className="my-1">
              <label htmlFor="lastName">Pincode : </label>
              <input
                type="text"
                name="pincode"
                required
                onChange={handleChange}
                value={userData?.pincode || ""}
                className="border border-black rounded-md mx-2"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="border border-black p-5">
            <label htmlFor="">Email ID: </label>
            <input
              type="email"
              name="emailId"
              required
              onChange={handleChange}
              value={userData?.emailId || ""}
              className="border border-black rounded-md mx-2"
            />
            <label htmlFor="initiationDate">Initiation Date:</label>
            <input
              className="border border-black p-1 rounded-lg"
              type="date"
              required
              name="initiationDate"
              id="initiationDate"
              value={userData?.initiationDate || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        {error && (
          <span className="text-sm text-red-500">
            {error.response.data.error}
          </span>
        )}
        <br></br>
        <button type="submit" className="border border-black p-2 my-2 ">
          Add User
        </button>
        <br />
        {editView === 1 && (
          <button
            type="button"
            onClick={handleEdit}
            className="border border-black p-2 my-2 "
          >
            Edit User
          </button>
        )}
      </form>
    </div>
  );
};

export default UserRegistrationForm;
