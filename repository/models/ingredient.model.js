const mongoose = require('mongoose');
mongoose.set('debug', false);

const ingredientSchema = new mongoose.Schema({
    name: String,
    price: mongoose.Schema.Types.Decimal128
}, { collection: 'ingredient' });

module.exports = mongoose.model('ingredient', ingredientSchema);