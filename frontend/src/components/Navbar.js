"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaRegUser } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function using Axios
  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await axios.get('http://localhost:5000/api/auth/logout', {}, { withCredentials: true }); // Ensure cookies are sent
      localStorage.removeItem('authToken'); // If using JWTs
      alert("Logged out successfully!"); // Optional: Use a toast notification
      router.push('/'); // Redirect to login page
    } catch (error) {
      console.error('Logout failed:', error.response?.data || error.message);
      alert("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-between items-center py-3 px-5 bg-[#f572af] relative">
      <h1 className="font-bold text-2xl text-white">Foodies' Paradise</h1>
      <div className="relative" ref={dropdownRef}>
        {/* Profile Icon */}
        <div
          className="p-2 rounded-full border-2 border-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaRegUser color="#ffffff" />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
              <li
                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={!loading ? handleLogout : undefined}
              >
                {loading ? "Logging out..." : "Logout"}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
