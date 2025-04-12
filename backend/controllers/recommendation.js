const Recipe = require('../models/recipe');
const axios = require('axios');
const ai = require('../services/ai.service');
const dotenv = require("dotenv");
dotenv.config();

const getRecommendation = async (req, res) => {
    try {
        const { ingredients } = req.body;

        // Validate input
        if (!Array.isArray(ingredients) || ingredients.length === 0) {
            return res.status(400).json({ error: "Ingredients must be a non-empty array." });
        }

        const prompt = `I have these ingredients: ${ingredients.join(', ')}. Suggest only one recipe with:
           - Recipe name (short and clear without any special characters and give only name )
           - Brief list of ingredients (comma-separated, max 5 items)
           - Short cooking instructions ( simple and clear short para max 2 lines)
           - Estimated cooking time (in minutes)
           - Health score (1-100)
        `;

        const generatedText = await ai.generateResult(prompt);

        console.log("Generated Text:", generatedText); // helpful for debugging

        const result = generatedText.split("\n").filter(line => line.trim());

        // Validate AI response
        if (result.length < 5) {
            return res.status(400).json({ error: "AI response is incomplete or incorrectly formatted." });
        }

        const title = result[0]?.trim() || "Untitled";
        const ingredientsList = result[1]?.trim() || "N/A";

        // Join all lines between 2nd and 2nd-to-last as instructions
        let instructions = result.slice(2, result.length - 2).join(" ").trim();

        // Extract cooking time from the whole text
        const regex = /(\d+)\s*(?:minutes|min)/i;
        const cookingTimeMatch = generatedText.match(regex);
        const cookingTime = cookingTimeMatch ? cookingTimeMatch[1] : "N/A";

        // Remove cooking time from instructions if it’s mistakenly included
        instructions = instructions.replace(regex, "").trim();

        // Extract health score from last line
        const healthScoreLine = result[result.length - 1]?.trim();
        const healthScore = parseInt(healthScoreLine, 10);
        const validHealthScore = !isNaN(healthScore) ? healthScore : 50;

        const newRecipe = new Recipe({
            title,
            ingredients: ingredientsList,
            instructions,
            cookingTime,
            healthScore: validHealthScore
        });

        await newRecipe.save();

        res.status(201).json({
            title,
            ingredients: ingredientsList,
            instructions,
            cookingTime,
            healthScore: validHealthScore
        });

    } catch (error) {
        console.error("Error in getRecommendation:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { getRecommendation };
