const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const transactionRoutes = require("./routes/transactionRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Finance Tracker API Running")
})

app.use("/api/transactions", transactionRoutes)
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})