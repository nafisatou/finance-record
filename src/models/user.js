const db = require("../config/database")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = {
  register: async ({ username, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword],
        function(err) {
          if (err) {
            console.error('Error registering user:', err)
            reject(new Error('Database error'))
          } else {
            resolve({ id: this.lastID, username, email })
          }
        }
      )
    })
  },

  login: async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
        if (err) {
          console.error('Error logging in:', err)
          reject(new Error('Authentication error'))
          return
        }
        if (!user) {
          reject(new Error('User not found'))
          return
        }
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
          reject(new Error('Invalid password'))
          return
        }
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' })
        resolve({ user: { id: user.id, username: user.username, email: user.email }, token })
      })
    })
  }
}

module.exports = User
