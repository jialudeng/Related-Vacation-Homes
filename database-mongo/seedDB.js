/* eslint-disable max-len */
const mongoose = require('mongoose');
const faker = require('faker');
const Listing = require('./schema');

mongoose.connect('mongodb://localhost:27017/listings', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        return Listing.countDocuments();
    })
    .then((number) => {
        if (number > 0) {
            Listing.deleteMany({})
                .then(() => {
                    saveNData(100);
                })
                .catch(() => {
                    console.log('Error in deleting previously generated data')
                })
        } else {
            saveNData(100);
        }
    });

const saveNData = (n) => {
    console.log(`START: generating and inserting ${n} sample data of house to database (MongoDB)`);
    let temp = Array(n).fill(0);
    const promiseAll = Promise.all(
        temp.map((ele, i) => {
            let imageUrls = [];
            for (var k = 1; k <= 40; k++) {
                let imageUrl = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo${k}`
                imageUrls.push(imageUrl);
            }
            let recommendationsArr = [];
            for (var j = 0; j < 12; j++) {
                recommendationsArr.push({
                    title: faker.lorem.sentence().slice(0, 30),
                    pricePerNight: Math.floor(Math.random() * 500) + 60,
                    images: imageUrls.sort(() => 0.5 - Math.random()).slice(0, Math.random() * 5 + 5),
                    typeOfListing: ['Entire place', 'Private room', 'Shared room'][Math.floor(Math.random() * 3)],
                    numOfBeds: Math.floor(Math.random() * 3) + 1,
                    numOfStars: (Math.random() * 4.9 + 0.1).toFixed(2),
                    numOfReviews: Math.floor(Math.random() * 100) + 1,
                    likedStatus: Math.random() >= 0.5,
                    plusStatus: Math.random() >= 0.2
                })
            }
            let listing = new Listing({
                id: i,
                recommendations: recommendationsArr
            });
            return listing.save();
        }));
    promiseAll
        .then(() => {
            console.log(`END: generating and inserting ${n} sample data`);
            mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        })
};
