require('newrelic');
const express = require('express');
const path = require('path');
const { getListingById, createListing, addPicture, updateListing, updatePicture, deleteListing, deletePicture } = require('../database-postgresSQL/queries');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/:name', (req, res, next) => {
  var options = {
    root: path.join(__dirname, '../client/dist'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

app.get('/api/listings/:id', getListingById);
app.post('/api/listings', createListing);
app.post('/api/pictures', addPicture);
app.put('/api/listings/:id', updateListing);
app.put('/api/pictures/:id', updatePicture);
app.delete('/api/listings/:id', deleteListing);
app.delete('/api/pictures/:id', deletePicture);

app.listen(port, () => console.log(`App listening on port ${port}`));