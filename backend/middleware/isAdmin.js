const mongoose = require('mongoose');

const isAdmin = (req, res, next) => {
    if (req.headers['x-user-role'] === 'admin') next();
    else res.status(403).json({ message: "Forbidden: Admin access only" });
};
module.exports = isAdmin;
