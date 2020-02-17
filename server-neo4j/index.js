const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const neo4j = require('neo4j-driver');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger());
// app.use(express.static(path.join(__dirname, '../client/dist')));

const driver = neo4j.driver(
  'bolt://localhost',
  neo4j.auth.basic('neo4j', '123')
);
const session = driver.session();

app.get('/', (req, res) => {
  session
    .run('MATCH (n) RETURN n LIMIT 25')
    .then(function(result) {
      result.records.forEach((record) => {
        console.log(record._fields[0])
      })
    })
    .catch(err => {
      console.log(err)
    })
  res.send('hello from express!')
})

app.listen(port, () => console.log(`App listening on port ${port}`));