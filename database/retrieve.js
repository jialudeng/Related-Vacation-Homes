const mongoose = require('mongoose');
const Listing = require('./schema');

const retrieve = (id, callback) => {
  mongoose.connect(`mongodb://localhost:27017/listings`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      return Listing.findOne({id: id}, {_id:0, __v:0});
    })
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = retrieve;
