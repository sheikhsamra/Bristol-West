const connectDB = require('../../lib/db');
const User = require('../../models/User');

module.exports = async (req, res) => {
    await connectDB();
    if (req.headers['x-user-role'] !== 'admin') return res.status(403).end();
    res.json(await User.find().select('-password'));
};
