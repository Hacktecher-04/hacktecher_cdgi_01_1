"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import MainForm from "@/components/MainForm";
import RecipeCard from "@/components/RecipeCard";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const fetchRecipes = async (ingredients) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe/recommendation`, { ingredients }); // Use environment variable for API URL
      setRecipeData(response.data);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/auth/login"); // Redirect to login page if not authenticated
    }
  }, []);

  if (!isAuthenticated) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="w-full flex bg-gray-100">
        <div className="h-[90vh] w-full bg-slate-100 flex flex-col">
          <div className="h-[90%] w-full flex flex-wrap justify-center items-center gap-4">
            <RecipeCard recipe={recipeData} />
          </div>
          <div className="w-full bg-slate-100 flex justify-center max-h-[10%]">
            <MainForm fetchRecipes={fetchRecipes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
