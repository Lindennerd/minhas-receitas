const mongoose = require('mongoose');
mongoose.set('debug', false);

const recipeSchema = new mongoose.Schema({
    name: String,
    createdAt: Date,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    comments: { type: mongoose.Schema.Types.ObjectId, ref: 'comment' },
    ingredients: {
        qtd: mongoose.Schema.Types.Decimal128,
        mesure: { type: mongoose.Schema.Types.ObjectId, ref: 'mesure' },
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'ingredient' }
    },
    preparationSteps: [{
        step: Number,
        description: String
    }],
    prepTime: Number,
    cookTime: Number,
    servings: Number
}, { collection: 'recipe' });

module.exports = mongoose.model('recipe', recipeSchema); 