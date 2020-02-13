const mongoose = require('mongoose');
const Listing = require('./schema');

const deleteListing = (id, callback) => {
  mongoose.connect(`mongodb://localhost:27017/listings`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      return Listing.deleteOne({id: id});
    })
    .then((response) => {
      callback(null, response)
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = deleteListing;

