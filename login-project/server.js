const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Server se connect karna (bina database bataye)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // WAMP ka default user
  password: ''       // WAMP ka default password (empty)
});

db.connect((err) => {
  if (err) {
    console.error('Connection failed: ' + err.stack);
    return;
  }
  console.log('✅ Connected to WAMP MySQL Server!');

  // 1. Auto Create Database
  db.query("CREATE DATABASE IF NOT EXISTS login_db", (err) => {
    if (err) throw err;
    console.log("✅ Database 'login_db' is ready!");

    // 2. Database Select Karna
    db.query("USE login_db", (err) => {
      if (err) throw err;

      // 3. Auto Create 'users' Table
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      db.query(createTableQuery, (err) => {
        if (err) throw err;
        console.log("✅ Table 'users' is ready!");
      });
    });
  });
});

// Server Start Karna
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000');
});