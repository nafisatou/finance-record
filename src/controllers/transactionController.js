const Transaction = require("../models/transaction")

// Add a new transaction
exports.addTransaction = async (req, res) => {
  try {
    const { type, category, amount, description, date } = req.body
    const newTransaction = await Transaction.create({ type, category, amount, description, date })
    res.status(201).json(newTransaction)
  } catch (error) {
    console.error("Transaction Error:", error)  // <-- show full error
    res.status(500).json({ error: "Something went wrong", details: error.message })
  }
}

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.getAll()
    res.json(transactions)
  } catch (error) {
    console.error("Get Transactions Error:", error)
    res.status(500).json({ error: "Something went wrong", details: error.message })
  }
}

// Update a transaction
exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params
    const { type, category, amount, description, date } = req.body
    const updatedTransaction = await Transaction.update(id, { type, category, amount, description, date })
    if (!updatedTransaction) {
      return res.status(404).json({ error: 'Transaction not found' })
    }
    res.json(updatedTransaction)
  } catch (error) {
    console.error("Update Transaction Error:", error)
    res.status(500).json({ error: "Something went wrong", details: error.message })
  }
}