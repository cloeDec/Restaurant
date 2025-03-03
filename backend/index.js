const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const database = require('./config');
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB

database.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
