const Recipe = require('../models/recipe');
const axios = require('axios');
const ai = require('../services/ai.service');
const dotenv = require("dotenv");
dotenv.config();

const getRecommendation = async (req, res) => {
    try {
        const { ingredients, userId } = req.body;

        const prompt = `I have these ingredients: ${ingredients.join(', ')}. Suggest only one recipe with:
           1. Recipe name (short and clear without any special characters and give only name )
           2. Brief list of ingredients (comma-separated, max 5 items)
           3. Short cooking instructions ( simple and clear short para max 2 lines)
           4. Estimated cooking time (in minutes)
           5. Health score (1-100)
        `;

        const generatedText = await ai.generateResult(prompt);


        const result = generatedText.split("\n").filter(line => line.trim());


        const title = result[0].trim();


        const ingredientsList = result[1].trim();


        let instructions = result.slice(2, result.length - 2).join(" ").trim();


        const regex = /(\d+)\s*(?:minutes|min)/i;
        const cookingTimeMatch = generatedText.match(regex);
        const cookingTime = cookingTimeMatch ? cookingTimeMatch[1] : "N/A";

        // Remove cooking time from instructions if it was mistakenly included
        instructions = instructions.replace(regex, "").trim();

        // Extract health score from the last line
        const healthScore = parseInt(result[result.length - 1].trim(), 10);


        const newRecipe = new Recipe({
            title,
            ingredients: ingredientsList,
            instructions,
            cookingTime,
            healthScore,

        });
        await newRecipe.save();

        res.status(201).json({
            title, ingredients: ingredientsList, instructions, cookingTime, healthScore
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { getRecommendation };
