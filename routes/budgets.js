const express = require('express');
const router = express.Router();

// Dummy budgets
const budgets = [
  { id: 1, category: 'Food', limit: 5000 },
  { id: 2, category: 'Travel', limit: 2000 },
];

// GET all budgets
router.get('/', (req, res) => {
  res.json(budgets);
});

module.exports = router;
