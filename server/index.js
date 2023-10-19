import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// Components
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
  };
app.use(cors({
    origin: ['http://localhost:3000'], // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow the required HTTP methods
    allowedHeaders: 'Content-Type,Authorization' // Allow the required headers
  }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = 3001;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
