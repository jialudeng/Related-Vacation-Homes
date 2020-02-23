require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const { getListingById, createListing, addPicture, updateListing, updatePicture, deleteListing, deletePicture } = require('../database-postgresSQL/queries');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
});
app.get('/api/listings/:id', getListingById);
app.post('/api/listings', createListing);
app.post('/api/pictures', addPicture);
app.put('/api/listings/:id', updateListing);
app.put('/api/pictures/:id', updatePicture);
app.delete('/api/listings/:id', deleteListing);
app.delete('/api/pictures/:id', deletePicture);

app.listen(port, () => console.log(`App listening on port ${port}`));