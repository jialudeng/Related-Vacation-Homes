const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../postgres/queries');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/users', db.getUsers)

app.get('/users/:id', db.getUserById)

app.post('/users', db.createUser)

app.put('/users/:id', db.updateUser)

app.delete('/users/:id', db.deleteUser)

app.listen(port, () => console.log(`App listening on port ${port}`));