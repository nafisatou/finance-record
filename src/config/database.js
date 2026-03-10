const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./finance_tracker.db');

module.exports = db