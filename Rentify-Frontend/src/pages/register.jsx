import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    setPasswordMatch(true);
    const { confirmPassword, ...dataWithoutConfPassword } = formData;

    try {
      const response = await axios.post(
        "http://localhost:3000/user/user-register",
        dataWithoutConfPassword
      );
      if (response.data.success === true) {
        console.log("User Registration Successfull");
        navigate("/login");
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log("Something Went Wrong");
    }
  };

  return (
    <div className="bg-col1-700 px-2 pt-2 w-full mx-auto my-10 rounded-lg max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="bg-col1-300 shadow-md rounded px-8 pt-6 pb-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-black text-md font-bold mb-2"
              htmlFor="fname"
            >
              First Name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-black"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-md font-bold mb-2"
              htmlFor="lname"
            >
              Last Name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-black"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-md font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-black"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-md font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-black"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              type="tel"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-md font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-black"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-md font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-black"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              type="password"
              placeholder="Confirm Password"
              required
            />
            {!passwordMatch && (
              <p className="text-red-600 text-xs italic">Passwords do not match.</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Register
          </button>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <Link
            to="/login"
            className="text-black hover:text-white font-sm font-semibold"
          >
            Already have an account?
          </Link>
        </div>
      </form>
      <p className="text-center text-white text-xs p-2">
        &copy;2024 Alpha Developers. All rights reserved.
      </p>
    </div>
  );
}

export default Register;
