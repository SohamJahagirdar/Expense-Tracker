const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// GET all
router.get('/', async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// POST new
router.post('/', async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.json(transaction);
});

// PUT (update)
router.put('/:id', async (req, res) => {
  const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
