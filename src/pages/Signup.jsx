import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://interview-mock-api.onrender.com/api-docs/signup",
        { email, password }
      );
      if (res.data.status === "success") {
        alert("Signup successfully!!");
        navigate("/login");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-2xl">SIGNUP</h1>
      <div className="w-1/3 bg-gray-100 p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="block mb-2 text-lg" htmlFor="email">
              Email: <p className="text-red-500">*</p>
            </label>
            <input
              className="block mb-4"
              placeholder="Enter your email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-lg" htmlFor="password">
              Password: <p className="text-red-500">*</p>
            </label>
            <input
              className="block mb-4"
              placeholder="Enter your password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
            />
          </div>
          <button
            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
