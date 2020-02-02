// Set up mongoose connection
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mongoDB = 'mongodb://localhost/listings';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }); 
const db = mongoose.connection; // Get default connection
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Create new schema 
const ListingSchema = new Schema({
    listingId: Number,
    recommendations: [ {
        recommendationId: Number, 
        title: {type: String},
        pricePerNight: {type: String},
        images: {type: [String]},
        typeOfListing: {type: String},
        numOfBeds: {type: Number},
        numOfStars: {type: Number},
        numOfReviews: {type: Number},
        likedStatus: {type: Boolean},
        plusStatus: {type: Boolean}
    } ]
});

// Compile schema into a model, which is a class with which we construct documents
const Listing = mongoose.model('Listing', ListingSchema);

const getAllListings = (callback) => {
    Listing.find((error, listingsArr) => {
        if (error) {
            console.log(error);
            callback(error);
        } else {
            console.log(listingsArr);
            callback(null, listingsArr);
        }
    })
}

// getAllListings(()=> {})

// const getListing = (id, callback) => {
//     Listing.find({listingId: id}, "recommendations", (error, listingObject) => {
//         if (error) {
//             console.log(error);
//             callback(error);
//         } else {
//             console.log(listingObject);
//             callback(null, listingObject);
//         }
//     });
// }

// to test function getListings()
// getListing(8, () => {})

module.exports = {Listing, getAllListings};



