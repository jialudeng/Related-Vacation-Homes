// Set up mongoose connection
const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/recommendations';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }); 
const db = mongoose.connection; // Get default connection
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Define schema
const recommendationSchema = mongoose.Schema({
    title: String,
    pricePerNight: Number,
    images: Array,
    type: String,
    numOfBeds: Number,
    numOfStars: Number,
    numOfReviews: Number
});

// Compile schema into a model, which is a class with which we construct documents
const Recommendation = mongoose.model('Recommendation', recommendationSchema);







