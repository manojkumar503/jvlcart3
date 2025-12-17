const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI)
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch((err) => {
            console.log('MongoDB connection error:', err.message);
            process.exit(1);
        });
};

module.exports = connectDatabase;
