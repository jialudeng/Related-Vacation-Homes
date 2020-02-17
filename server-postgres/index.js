const express = require('express');
const cors = require('cors');
const path = require('path');
const { seedDatabase, getListing, getListingById, createListing, updateListing, deleteListing } = require('../database-postgresSQL/queries');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
});
app.post('/seed', seedDatabase);
app.get('/api/listings', getListing);
app.get('/api/listings/id', getListingById);
app.post('/api/listings', createListing);
app.put('/api/listings/id', updateListing);
app.delete('/api/listings/:id', deleteListing);

app.listen(port, () => console.log(`App listening on port ${port}`));