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
    const fetchRecipes = async (ingredients) => {
      try {
        const response = await axios.post("http://localhost:5000/api/recipe/recommendation", {ingredients}); // Replace with your backend API
        setRecipeData(response.data);
      } catch (err) {
        setError("Failed to fetch recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="w-full flex bg-gray-100">
        <div className="h-[90vh] w-full bg-slate-100 flex flex-col">
          <div className="h-[90%] w-full flex flex-wrap justify-center items-center gap-4">
            <RecipeCard recipe={recipeData} />
          </div>
          <div className="w-full bg-slate-100 flex justify-center max-h-[10%]">
            <MainForm fetchRecipes = {fetchRecipes}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
