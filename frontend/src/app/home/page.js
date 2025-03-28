"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import MainForm from "@/components/MainForm";
import RecipeCard from "@/components/RecipeCard";

const HomePage = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("YOUR_BACKEND_API_URL/recipes"); // Replace with your backend API
        setRecipeData(response.data);
      } catch (err) {
        setError("Failed to fetch recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="w-full flex bg-gray-100">
        <div className="h-[90vh] w-full bg-slate-100 flex flex-col">
          <div className="h-[90%] w-full flex flex-wrap justify-center items-center gap-4">
            {loading ? (
              <p>Loading recipes...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : recipeData.length > 0 ? (
              recipeData.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))
            ) : (
              <p className="text-gray-500 text-lg font-semibold">
                Enter a recipe to get started...
              </p>
            )}
          </div>
          <div className="w-full bg-slate-100 flex justify-center max-h-[10%]">
            <MainForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
