const mongoose = require('mongoose');
const Listing = require('./schema');

const add = (newListing, callback) => {
  mongoose.connect(`mongodb://localhost:27017/listings`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      const listing = new Listing(newListing);
      return listing.save();
    })
    .then((response) => {
      callback(null, response)
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = add;
