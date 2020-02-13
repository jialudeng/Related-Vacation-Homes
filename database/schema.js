const mongoose = require('mongoose');

// Create new schema
const ListingSchema = new mongoose.Schema({
  id: Number,
  recommendations: [{
    title: String,
    pricePerNight: String,
    images: [String],
    typeOfListing: String,
    numOfBeds: Number,
    numOfStars: Number,
    numOfReviews: Number,
    likedStatus: Boolean,
    plusStatus: Boolean,
  }],
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
