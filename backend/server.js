const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

async function initializeDB() {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    console.log("Connected to MySQL database");
    return db;
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
}

initializeDB().then((db) => {
  app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
      await db.execute(query, [name, email, hashedPassword]);

      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const query = "SELECT * FROM users WHERE email = ?";
      const [users] = await db.execute(query, [email]);

      if (users.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const user = users[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      res.json({ message: "Login successful", user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
