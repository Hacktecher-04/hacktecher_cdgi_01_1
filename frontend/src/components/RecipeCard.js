import React from "react";


const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        {recipe.title || "Sample Recipe"}
      </h2>
      <p className="text-gray-600 text-sm mb-2">
        <strong>Ingredients:</strong>{" "}
        {recipe.ingredients ||
          "Tomatoes, onions, garlic, olive oil, salt, pepper"}
      </p>
      <p className="text-gray-600 text-sm mb-2">
        <strong>Instructions:</strong>{" "}
        {recipe.instructions ||
          "Chop the onions and garlic. Saut  them in olive oil until golden brown. Add the tomatoes and cook for 10 minutes."}
      </p>
      <p className="text-gray-600 text-sm mb-2">
        <strong>Cooking Time:</strong> {recipe.cookingTime || 30} minutes
      </p>
      <p className="text-gray-600 text-sm">
        <strong>Health Score:</strong> {recipe.healthScore || 70}
      </p>
    </div>
  );
};

export default RecipeCard;
