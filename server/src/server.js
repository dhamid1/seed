require('dotenv').config(); 
const cors = require('cors');
app.use(cors());
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const State = require('./models/State');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGODB_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// ... rest of your code for endpoints ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
