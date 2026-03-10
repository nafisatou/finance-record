const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database('./finance_tracker.db');

async function runMigrations() {
  return new Promise((resolve, reject) => {
    const migrationPath = path.join(__dirname, 'migrations', 'create_users_table.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

    db.exec(migrationSQL, (err) => {
      if (err) {
        console.error('Error running migrations:', err);
        reject(err);
      } else {
        console.log('Migrations completed successfully');
        resolve();
      }
      db.close();
    });
  });
}

runMigrations().catch(console.error);
