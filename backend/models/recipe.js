const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    instructions: String,
    cookingTime:String,
    healthScore:Number,
    
});

module.exports = mongoose.model('Recipe', recipeSchema);

