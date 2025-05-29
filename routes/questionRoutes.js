// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/:subject', async (req, res) => {
  const { subject } = req.params;
  try {
    const questions = await Question.find({ subject });
    const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
    res.json(shuffled);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
