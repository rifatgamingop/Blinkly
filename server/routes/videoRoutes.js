const express = require('express');
const Video = require('../models/Video');

const router = express.Router();

router.get('/', async (req, res) => {
    const videos = await Video.find().populate('uploader');
    res.json(videos);
});

router.post('/', async (req, res) => {
    const { title, url, uploader } = req.body;
    const video = new Video({ title, url, uploader });
    await video.save();
    res.status(201).json(video);
});

module.exports = router;
