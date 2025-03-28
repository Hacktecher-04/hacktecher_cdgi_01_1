import React from "react";


const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h2>
      <p className="text-gray-600 text-sm mb-2">
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>
      <p className="text-gray-600 text-sm mb-2">
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
      <p className="text-gray-600 text-sm mb-2">
        <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
      </p>
      <p className="text-gray-600 text-sm">
        <strong>Health Score:</strong> {recipe.healthScore}
      </p>
    </div>
  );
};

export default RecipeCard;
