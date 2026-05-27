const connectDB = require('../../lib/db');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end();
    await connectDB();
    try {
        const { fullName, email, phone, password } = req.body;
        if (await User.findOne({ email })) return res.status(400).json({ message: 'User already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        await new User({ fullName, email, phone, password: hashedPassword }).save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (e) { res.status(500).json({ message: 'Error' }); }
};
