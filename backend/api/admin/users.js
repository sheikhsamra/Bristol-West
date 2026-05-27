const express = require('express');
const connectDB = require('../../lib/db');
const User = require('../../models/User');

const app = express();
app.use(require('cors')());
app.use(express.json());

app.all('*', async (req, res) => {
    await connectDB();
    if (req.headers['x-user-role'] !== 'admin') return res.status(403).end();
    res.json(await User.find().select('-password'));
});

module.exports = app;
