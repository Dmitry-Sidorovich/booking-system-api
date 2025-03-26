require('dotenv').config();

const express = require('express');
const app = express();

require('./database');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Booking system API is running!');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`Server is running at: http://localhost:${PORT}/`);
})