const connectDB = require('../../lib/db');
const Quote = require('../../models/Quote');

module.exports = async (req, res) => {
    await connectDB();
    if (req.method === 'POST') {
        try {
            await new Quote(req.body).save();
            res.status(201).json({ message: 'Saved' });
        } catch (e) { res.status(500).json({ message: 'Error' }); }
    } else if (req.method === 'GET') {
        if (req.headers['x-user-role'] !== 'admin') return res.status(403).end();
        res.json(await Quote.find().populate('userId', 'fullName email'));
    } else if (req.method === 'PUT') {
        if (req.headers['x-user-role'] !== 'admin') return res.status(403).end();
        const updated = await Quote.findByIdAndUpdate(req.query.id, { referralStatus: req.body.status }, { new: true });
        res.json(updated);
    }
};
