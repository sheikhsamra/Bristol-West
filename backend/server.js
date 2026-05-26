const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'Insurancewebsite'
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Quote Schema
const quoteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    zipCode: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: String, required: true },
    address: { type: String },
    unit: { type: String },
    city: { type: String },
    email: { type: String },
    phone: { type: String },
    referralStatus: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', quoteSchema);

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, phone, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Admin bypass
        if (email === "admin@gmail.com" && password === "admin1234") {
            let adminUser = await User.findOne({ email: "admin@gmail.com" });
            if (!adminUser) {
                const hashedPassword = await bcrypt.hash("admin1234", 10);
                adminUser = new User({ fullName: "System Admin", email: "admin@gmail.com", password: hashedPassword, role: "admin" });
                await adminUser.save();
            }
            return res.json({ message: 'Login successful', user: { id: adminUser._id, fullName: adminUser.fullName, email: adminUser.email, role: "admin" } });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        res.json({ message: 'Login successful', user: { id: user._id, fullName: user.fullName, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Quote Routes
app.post('/api/quotes', async (req, res) => {
    try {
        const { userId, zipCode, firstName, lastName, dob, address, unit, city, email, phone } = req.body;
        const newQuote = new Quote({ userId, zipCode, firstName, lastName, dob, address, unit, city, email, phone, referralStatus: "Special Attention Required" });
        await newQuote.save();
        res.status(201).json({ message: 'Quote request saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Admin Routes
app.get('/api/admin/users', async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
});

app.get('/api/admin/quotes', async (req, res) => {
    try {
        const quotes = await Quote.find().populate('userId', 'fullName email').sort({ createdAt: -1 });
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
