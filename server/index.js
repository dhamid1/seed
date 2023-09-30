// server/index.js
import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Router from './routes/route.js';
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();


app.use('/', Router);
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



Connection(USERNAME, PASSWORD);