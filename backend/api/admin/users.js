const express = require('express');
const connectDB = require('../../utils/db');
const User = require('../../models/User');
const isAdmin = require('../../middleware/isAdmin');

const app = express();
app.use(require('cors')());
app.use(express.json());

app.all('*', async (req, res) => {
    await connectDB();
    isAdmin(req, res, async () => {
        res.json(await User.find().select('-password'));
    });
});

module.exports = app;
