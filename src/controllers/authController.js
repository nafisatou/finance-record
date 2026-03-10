const User = require("../models/user")

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const user = await User.register({ username, email, password })
    res.status(201).json(user)
  } catch (error) {
    console.error("Register Error:", error)
    res.status(500).json({ error: "Something went wrong", details: error.message })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await User.login({ email, password })
    res.json(result)
  } catch (error) {
    console.error("Login Error:", error)
    res.status(500).json({ error: "Something went wrong", details: error.message })
  }
}
