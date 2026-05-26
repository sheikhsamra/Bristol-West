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

// Root Route for health check
app.get('/', (req, res) => {
    res.send('InsureCareCenter Backend is running successfully!');
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'Insurancewebsite' // Force the database name
})
    .then(() => console.log('MongoDB connected to: Insurancewebsite'))
    .catch(err => console.error('MongoDB connection error:', err));

// Diagnostic route to check DB connection
app.get('/api/admin/debug-db', async (req, res) => {
    try {
        const admin = new mongoose.mongo.Admin(mongoose.connection.db);
        const dbs = await admin.listDatabases();
        res.json({ currentDb: mongoose.connection.name, allDbs: dbs.databases });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// User Schema
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }, // 'user' or 'admin'
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
    console.log('Registration attempt received:', req.body);
    try {
        const { fullName, email, phone, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists:', email);
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, phone, password: hashedPassword, role: role || 'user' });
        
        const savedUser = await newUser.save();
        console.log('User saved successfully to DB:', savedUser._id);
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error detail:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    console.log('Login attempt received for:', req.body.email);
    try {
        const { email, password } = req.body;

        // Special check for your specific admin credentials
        if (email === "admin@gmail.com" && password === "admin1234") {
            // Find or Create this admin user in DB to keep things consistent
            let adminUser = await User.findOne({ email: "admin@gmail.com" });
            if (!adminUser) {
                const hashedPassword = await bcrypt.hash("admin1234", 10);
                adminUser = new User({ 
                    fullName: "System Admin", 
                    email: "admin@gmail.com", 
                    password: hashedPassword, 
                    role: "admin" 
                });
                await adminUser.save();
            }
            return res.json({ 
                message: 'Admin Login successful', 
                user: { id: adminUser._id, fullName: adminUser.fullName, email: adminUser.email, role: "admin" } 
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found in DB:', email);
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Invalid password for:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log('Login successful for:', email);
        res.json({ 
            message: 'Login successful', 
            user: { id: user._id, fullName: user.fullName, email: user.email, role: user.role } 
        });
    } catch (error) {
        console.error('Login error detail:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Quote Routes
app.post('/api/quotes', async (req, res) => {
    try {
        const { userId, zipCode, firstName, lastName, dob, address, unit, city, email, phone, referralStatus } = req.body;
        if (!zipCode || !firstName || !lastName || !dob) {
            return res.status(400).json({ message: 'Core fields are required' });
        }
        const newQuote = new Quote({
            userId, zipCode, firstName, lastName, dob, address, unit, city, email, phone, referralStatus
        });
        await newQuote.save();
        res.status(201).json({ message: 'Quote request saved successfully', quote: newQuote });
    } catch (error) {
        console.error('Error saving quote:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Admin Routes (with role check middleware)
const isAdmin = async (req, res, next) => {
    // In a real app with JWT, you'd verify the token. 
    // Here we trust the role sent in the header for simplicity in this dev phase.
    const userRole = req.headers['x-user-role'];
    if (userRole === 'admin') {
        next();
    } else {
        res.status(403).json({ message: "Forbidden: Admin access only" });
    }
};

app.get('/api/admin/users', isAdmin, async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});

app.get('/api/admin/quotes', isAdmin, async (req, res) => {
    try {
        const quotes = await Quote.find().populate('userId', 'fullName email').sort({ createdAt: -1 });
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quotes' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
