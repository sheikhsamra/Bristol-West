const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
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
});

module.exports = mongoose.models.Quote || mongoose.model('Quote', quoteSchema);
