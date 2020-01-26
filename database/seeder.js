const {Listing} = require('./db.js');
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/recommendations')

// Each listing will have 12 Recommendations which will each have 5 photos
let recommendationsArr = []
for (var i = 0; i < 12; i++) {
    recommendationsArr.push({
        recommendationId: i,
        title: faker.lorem.sentence(),
        pricePerNight: (Math.random() * 500 + 60).toFixed(2),
        images: ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-design-ideas-lead-1565726251.jpg?crop=1.00xw:0.647xh;0.00160xw,0.258xh&resize=480:*',
            'https://st.hzcdn.com/simgs/5521998808dae7e1_4-1087/home-design.jpg',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-1547660017.jpg',
            'https://www.dailyherald.com/storyimage/DA/20190922/ENTLIFE/190929996/AR/0/AR-190929996.jpg&updated=201909201813&MaxW=900&maxH=900&noborder&Q=80',
            'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/6/6/0/original_Adriana-Gerbig-tall-tufted-headboard-grey-pale-blue-traditional.jpg.rend.hgtvcom.966.725.suffix/1400978900230.jpeg'],
        typeOfListing: ['Entire place', 'Private room', 'Shared room'][Math.floor(Math.random() * 3)],
        numOfBeds: Math.floor(Math.random() * 4) + 1,
        numOfStars: Math.floor(Math.random() * 5),
        numOfReviews: Math.floor(Math.random() * 100) + 1,
        likedStatus: false,
        plusStatus: Math.random() >= 0.2
    })
}

// We will have 100 different listings
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
