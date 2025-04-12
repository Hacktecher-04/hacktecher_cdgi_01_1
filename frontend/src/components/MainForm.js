"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";

const MainForm = ({fetchRecipes}) => {
  const [inputText, setInputText] = useState(""); // Temporary input text
  const [ingredients, setIngredients] = useState([]); // Stores final ingredients on submit

  const handleChange = (e) => {
    setInputText(e.target.value); // Update text input only
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (inputText.trim() === "") return; // Ignore empty submissions

    setIngredients(inputText.split(",").map((item) => item.trim())); // Store only the latest input
    setInputText("");
    fetchRecipes(ingredients) ;
  };

  useEffect(() => {
    console.log(ingredients); // Logs whenever ingredients state updates
  }, [ingredients]);

  return (
    <div className="w-full grow-1 bg-slate-100 flex flex-col px-6">
      <form onSubmit={handleSubmit} className="flex items-center mt-1 relative">
        <input
          onChange={handleChange}
          value={inputText}
          type="text"
          id="txtSearch"
          placeholder="Enter ingredients e.g. potato, tomato, chilli etc. ..."
          className="h-[50px] min-w-[100%] border rounded px-4 py-2"
        />
        <button
          type="submit"
          className="w-[40px] h-[40px] absolute pl-1 bg-slate-100 rounded-full flex items-center justify-center right-1 hover:scale-[1.08] cursor-pointer"
        >
          <AiOutlineSend size={28} />
        </button>
      </form>

    </div>
  );
};

export default MainForm;
