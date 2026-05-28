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

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'Insurancewebsite'
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Models
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
    fullName: String, 
    email: { type: String, unique: true }, 
    phone: String, 
    password: String, 
    role: { type: String, default: 'user' }, 
    createdAt: { type: Date, default: Date.now }
}));

const Quote = mongoose.models.Quote || mongoose.model('Quote', new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    zipCode: String, 
    firstName: String, 
    lastName: String, 
    dob: String, 
    address: String, 
    unit: String, 
    city: String, 
    email: String, 
    phone: String,
    referralStatus: { type: String, default: 'Special Attention Required' },
    createdAt: { type: Date, default: Date.now }
}));

// Routes
app.get("/", (req, res) => res.send("Backend is running"));

app.post('/api/auth/register', async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;
        if (await User.findOne({ email })) return res.status(400).json({ message: 'User already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        await new User({ fullName, email, phone, password: hashedPassword }).save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (e) { 
        console.error("Register Error:", e);
        res.status(500).json({ message: 'Error' }); 
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === "admin@gmail.com" && password === "admin1234") {
            let admin = await User.findOne({ email: "admin@gmail.com" });
            if (!admin) {
                const hashedPassword = await bcrypt.hash("admin1234", 10);
                admin = await new User({ fullName: "System Admin", email: "admin@gmail.com", password: hashedPassword, role: "admin" }).save();
            }
            return res.json({ user: { id: admin._id, fullName: admin.fullName, email: admin.email, role: "admin" } });
        }
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) return res.status(400).json({ message: 'Invalid credentials' });
        res.json({ user: { id: user._id, fullName: user.fullName, email: user.email, role: user.role } });
    } catch (e) { 
        console.error("Login Error:", e);
        res.status(500).json({ message: 'Error' }); 
    }
});

app.post('/api/quotes', async (req, res) => {
    try {
        await new Quote(req.body).save();
        res.status(201).json({ message: 'Saved' });
    } catch (e) { 
        console.error("Quote Error:", e);
        res.status(500).json({ message: 'Error' }); 
    }
});

const isAdmin = (req, res, next) => {
    if (req.headers['x-user-role'] === 'admin') next();
    else res.status(403).json({ message: "Forbidden" });
};

app.get('/api/admin/users', isAdmin, async (req, res) => {
    try {
        res.json(await User.find().select('-password'));
    } catch (e) { res.status(500).json({ message: 'Error' }); }
});

app.get('/api/admin/quotes', isAdmin, async (req, res) => {
    try {
        res.json(await Quote.find().populate('userId', 'fullName email'));
    } catch (e) { res.status(500).json({ message: 'Error' }); }
});

app.put('/api/admin/quotes/:id', isAdmin, async (req, res) => {
    try {
        const updated = await Quote.findByIdAndUpdate(req.params.id, { referralStatus: req.body.status }, { new: true });
        res.json(updated);
    } catch (e) { res.status(500).json({ message: 'Error updating status' }); }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
