const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/leaddatabase', {
    useNewUrlParser: true,   // Parses MongoDB connection strings correctly
    useUnifiedTopology: true // Uses the new server discovery and monitoring engine
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

module.exports = mongoose;