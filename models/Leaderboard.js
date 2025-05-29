const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  user: { type: String, required: true },
  subject: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
