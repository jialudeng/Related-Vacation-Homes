const express = require('express');
const cors = require('cors');
const path = require('path');
const { getAllListings } = require('../database/db.js');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// Create
// app.post('./listings', (req, res) => {

// })

// Read
app.get('/listings', (req, res) => {
  getAllListings((error, listingsArr) => {
    if (error) {
      res.status(500).end();
    } else {
      res.status(200).send(listingsArr);
    }
  });
});

// handler for get requests for all listings
// app.get('/legacy/listings', (req, res) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   getAllListings((error, listingsArr) => {
//   if (error) {
//     console.log(error);
//     res.status(500).end();
//   } else {
//     console.log('get request is successful');
//     res.status(200).send(listingsArr);
//   }
//   });
// });

app.listen(port, () => console.log(`App listening on port ${port}`));