const db = require("../config/database")

const Transaction = {
  create: async ({ type, category, amount, description, date }) => {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO transactions (type, category, amount, description, date) VALUES (?, ?, ?, ?, ?)",
        [type, category, amount, description, date],
        function(err) {
          if (err) {
            console.error('Error creating transaction:', err)
            reject(new Error('Database error'))
          } else {
            db.get("SELECT * FROM transactions WHERE id = ?", [this.lastID], (err, row) => {
              if (err) {
                console.error('Error retrieving transaction:', err)
                reject(new Error('Database error'))
              } else {
                resolve(row)
              }
            })
          }
        }
      )
    })
  },

  update: async (id, { type, category, amount, description, date }) => {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE transactions SET type = ?, category = ?, amount = ?, description = ?, date = ? WHERE id = ?",
        [type, category, amount, description, date, id],
        function(err) {
          if (err) {
            console.error('Error updating transaction:', err)
            reject(new Error('Database error'))
          } else if (this.changes === 0) {
            resolve(null)
          } else {
            db.get("SELECT * FROM transactions WHERE id = ?", [id], (err, row) => {
              if (err) {
                console.error('Error retrieving transaction:', err)
                reject(new Error('Database error'))
              } else {
                resolve(row)
              }
            })
          }
        }
      )
    })
  },

  getAll: async () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM transactions ORDER BY date DESC", (err, rows) => {
        if (err) {
          console.error('Error retrieving transactions:', err)
          reject(new Error('Database error'))
        } else {
          resolve(rows)
        }
      })
    })
  }
}

module.exports = Transaction