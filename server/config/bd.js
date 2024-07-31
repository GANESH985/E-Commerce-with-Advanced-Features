const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection failed');
        process.exit(1);
    }
}
module.exports = ConnectDB