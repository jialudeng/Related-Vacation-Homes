const express = require('express');
const cors = require('cors');
const path = require('path');
const retrieve = require('../database/retrieve');
const add = require('../database/add');
const deleteListing = require('../database/delete');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/api/listings/data', (req, res) => {
  add(req.body, (err, response) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(response);
    }
  });
});1

app.get('/api/listings/data/:id', (req, res) => {
  const { id } = req.params;
  retrieve(id, (err, data) =>{
    if (err) {
      console.log(err); 
      res.send(500);
    } else {
      if(data){
        res.jsonp(data);    
      } else {
        res.send('no house with such id value');
      }
    }
  });
});

app.put('/api/listings/data', (req, res) => {
  console.log(req.body)
  add(req.body, (err, response) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(response);
    }
  });
});

app.delete('/api/listings/data/:id', (req, res) => {
  const { id } = req.params;
  deleteListing(id, (err, response) =>{
    if (err) {
      console.log(err); 
      res.send(500);
    } else {
      res.send(response)
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
