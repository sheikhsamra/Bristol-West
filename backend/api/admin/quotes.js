const express = require('express');
const connectDB = require('../../utils/db');
const Quote = require('../../models/Quote');
const isAdmin = require('../../middleware/isAdmin');

const app = express();
app.use(require('cors')());
app.use(express.json());

app.all('*', async (req, res) => {
    await connectDB();
    isAdmin(req, res, async () => {
        res.json(await Quote.find().populate('userId', 'fullName email'));
    });
});

module.exports = app;
