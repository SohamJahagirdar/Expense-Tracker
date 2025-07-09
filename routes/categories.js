const express = require('express');
const router = express.Router();

// Dummy category list
const categories = [
  { id: 1, name: 'Food' },
  { id: 2, name: 'Travel' },
  { id: 3, name: 'Shopping' },
];

// GET all categories
router.get('/', (req, res) => {
  res.json(categories);
});

module.exports = router;
