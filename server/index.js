const express = require('express');
const path = require('path');
// const {getListings} = require('../database/db.js');

const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/listings', (req, res) => {
//     getListings((error, listingsArr) => {
//         if (error) {
//             res.status(500).end();
//         } else {
//             res.status(200).send(listingsArr);
//         }
//     }) 
// })

app.listen(port, () => console.log(`App listening on port ${port}`));