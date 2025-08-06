const Leaderboard = require('../models/Leaderboard');

// Save a new score 
exports.saveScore = async (req, res) => {
  try {
    const { user, subject, score } = req.body;

    if (!user || !subject || score === undefined) {
      return res.status(400).json({ error: 'Missing user, subject, or score' });
    }

    const newEntry = new Leaderboard({ user, subject, score });
    await newEntry.save();

    res.status(201).json({ message: 'Score saved', entry: newEntry });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save score' });
  }
};

// Get  leaderboard: 
exports.getLeaderboard = async (req, res) => {
  try {
    const entries = await Leaderboard.find({})
      .sort({ score: -1, date: 1 })
      .limit(50); 

    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
};
