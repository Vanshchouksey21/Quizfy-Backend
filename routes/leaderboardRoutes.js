const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// POST save score after quiz submission
router.post('/', leaderboardController.saveScore);  

// GET all leaderboard entries
router.get('/', leaderboardController.getLeaderboard);

module.exports = router;
