const express = require('express');
const connectDB = require('../../utils/db');
const Quote = require('../../models/Quote');
const isAdmin = require('../../middleware/isAdmin');

const app = express();
app.use(require('cors')());
app.use(express.json());

app.all('*', async (req, res) => {
    await connectDB();
    if (req.method === 'POST') {
        try {
            await new Quote(req.body).save();
            res.status(201).json({ message: 'Saved' });
        } catch (e) { res.status(500).json({ message: 'Error' }); }
    } else if (req.method === 'GET') {
        isAdmin(req, res, async () => {
            res.json(await Quote.find().populate('userId', 'fullName email'));
        });
    } else if (req.method === 'PUT') {
        isAdmin(req, res, async () => {
            const updated = await Quote.findByIdAndUpdate(req.query.id, { referralStatus: req.body.status }, { new: true });
            res.json(updated);
        });
    }
});

module.exports = app;
