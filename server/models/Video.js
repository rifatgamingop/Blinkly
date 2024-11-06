const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: String,
    url: String,
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', videoSchema);
