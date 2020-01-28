const {Listing} = require('./db.js');
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/listings')

// Get all image urls from bucket in amazon s3 and store into an array
let imageUrls = []
for (var k = 1; k <= 40; k++) {
    let imageUrl = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo${k}`
    imageUrls.push(imageUrl);
}

// Each listing will have 12 recommendations which will each have 5 random photos
let recommendationsArr = []
for (var i = 0; i < 12; i++) {
    recommendationsArr.push({
        recommendationId: i,
        title: faker.lorem.sentence().slice(0, 30), 
        pricePerNight: (Math.random() * 500 + 60).toFixed(2),
        images: imageUrls.sort(() => 0.5 - Math.random()).slice(0, Math.random() * 5 + 5), // shuffle imageUrls array and then get sub-array of first 5-10 elements after shuffled
        typeOfListing: ['Entire place', 'Private room', 'Shared room'][Math.floor(Math.random() * 3)],
        numOfBeds: Math.floor(Math.random() * 4) + 1,
        numOfStars: Math.floor(Math.random() * 5),
        numOfReviews: Math.floor(Math.random() * 100) + 1,
        likedStatus: Math.random() >= 0.5,
        plusStatus: Math.random() >= 0.2
    })
}

// we will have 100 different listings
for (var j = 0; j <= 100; j++) {
    const listing = new Listing({
        listingId: j, 
        recommendations: recommendationsArr
    })  
    listing.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
        }
    })  
}