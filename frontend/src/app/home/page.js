"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import MainForm from "@/components/MainForm";
import RecipeCard from "@/components/RecipeCard";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

const HomePage = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const fetchRecipes = async (ingredients) => {
    setLoading(true); // start loading
    try {
      const response = await axios.post(`http://localhost:5000/api/recipe/recommendation`, { ingredients });
      setRecipeData(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false); // stop loading
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
          <div className="h-[90%] w-full flex flex-wrap justify-center items-center gap-4 p-4 sm:p-2">
            {loading ? <Loader /> : <RecipeCard recipe={recipeData} />}

          </div>
          <div className="w-full bg-slate-100 flex justify-center max-h-[10%] p-2 sm:p-1">
            <MainForm fetchRecipes={fetchRecipes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
