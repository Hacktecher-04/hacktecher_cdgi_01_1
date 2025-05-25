"use client"
import React, { useState } from "react";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";
import axios from "axios";
import { useRouter } from "next/navigation"

function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        setMessage("Login successful!");
        setIsSuccess(true);

        // Save token to localStorage or cookies if needed
        localStorage.setItem("token", response.data.token);

        // Redirect to home page
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      } else {
        setMessage("Login failed! Token not received.");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed!");
      setIsSuccess(false);
    }
  };

  return (
    <div className="w-full relative h-screen flex justify-center items-center bg-gradient-to-br from-rose-500 via-slate-100 to-pink-500">
      <span className="absolute top-5 left-10 hover:scale-[1.1]">
        <Link href="/">
          <IoReturnUpBack size={45} color="#fff" />
        </Link>
      </span>
      <div className="border flex flex-col justify-center items-center rounded-lg p-10 min-w-[400px] shadow-lg">
        <h1 className="text-slate-600 font-bold text-3xl mb-6">Login</h1>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          {/* Username Field */}

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-slate-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-slate-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Your Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-pink-400 text-white text-bold rounded hover:bg-pink-800 cursor-pointer transition"
          >
            Submit
          </button>
        </form>

        {/* Display message */}
        {message && <p className={`mt-4 ${isSuccess ? "text-green-500" : "text-red-500"}`}>{message}{
          isSuccess && <span className=" w-full text-center mt-4 text-green-500">
            <br />
            redirecting....
          </span>
        }</p>}
      </div>
    </div>
  );
}

export default LoginPage;
