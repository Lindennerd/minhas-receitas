const mongoose = require('mongoose');
mongoose.set('debug', false);

const commentSchema = new mongoose.Schema({
    comment: String,
    commentDate: Date,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
}, { collection: 'comment' });

module.exports = mongoose.model('comment', commentSchema);