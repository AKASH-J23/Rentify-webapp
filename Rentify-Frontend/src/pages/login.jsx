import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/user-login",
        formData
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.data);
        navigate("/");
        console.log(response.data.message);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log("Something Went Wrong !");
    }
  };
  

  return (
    <div className="bg-col1-700 p-2 w-full mx-auto my-20 rounded-lg max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-col1-300 shadow-md rounded px-8 pt-6 pb-6 mb-2"
      >
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
        <div className="mb-3">
          <label
            className="block text-black text-md font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-black mb-2"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            type="password"
            placeholder="*******"
          />
          <p className="text-red-600 text-xs italic">*Enter your password.</p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <Link
            to="/register"
            className="text-black hover:text-white font-sm font-semibold"
          >
            New user?
          </Link>
        </div>
      </form>
      <p className="text-center text-white text-xs">
        &copy;2024 Alpha Developers. All rights reserved.
      </p>
    </div>
  );
}

export default Login;
