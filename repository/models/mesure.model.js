const mongoose = require('mongoose');
mongoose.set('debug', false);

const mesureModel = new mongoose.Schema({
    name: String
}, { collection: 'mesure' });

module.exports = mongoose.model('mesure', mesureModel);