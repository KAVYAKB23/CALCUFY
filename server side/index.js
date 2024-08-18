require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./router');
require("./connection")

const app = express();

app.use(cors());

app.use(express.json());

app.use(router); // Pass the router directly without calling it as a function

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
    console.log(`Server running successfully at PORT: ${PORT}`);
});
