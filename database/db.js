// Set up mongoose connection
const mongoose = require('mongoose');
const faker = require('faker');

const Schema = mongoose.Schema;

const mongoDB = 'mongodb://localhost/recommendations';
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

const typeOfListings = ['Entire place', 'Private room', 'Shared room'];

const Listing = mongoose.model('Listing', ListingSchema);

// const recommendations = []
// for (var i =0; i < 100; i++) {

// }

const listing = new Listing({
    listingId: 1, 
    recommendations: [
    {
        recommendationId: 1,
        title: faker.lorem.sentence(),
        pricePerNight: Math.floor(Math.random() * 1000) + 100,
        images: ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-design-ideas-lead-1565726251.jpg?crop=1.00xw:0.647xh;0.00160xw,0.258xh&resize=480:*',
            'https://st.hzcdn.com/simgs/5521998808dae7e1_4-1087/home-design.jpg',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-1547660017.jpg',
            'https://www.dailyherald.com/storyimage/DA/20190922/ENTLIFE/190929996/AR/0/AR-190929996.jpg&updated=201909201813&MaxW=900&maxH=900&noborder&Q=80',
            'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/6/6/0/original_Adriana-Gerbig-tall-tufted-headboard-grey-pale-blue-traditional.jpg.rend.hgtvcom.966.725.suffix/1400978900230.jpeg'],
        typeOfListing: typeOfListings[Math.floor(Math.random() * typeOfListings.length)],
        numOfBeds: Math.floor(Math.random() * 10) + 1,
        numOfStars: Math.floor(Math.random() * 5) + 0.1,
        numOfReviews: Math.floor(Math.random() * 100) + 1,
        likedStatus: false,
        plusStatus: Math.random() >= 0.5
    } ]
})

listing.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("saved")
    }
})

// Compile schema into a model, which is a class with which we construct documents
// module.exports = mongoose.model('Recommendation', recommendationSchema);






