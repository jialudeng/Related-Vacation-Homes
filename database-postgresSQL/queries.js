const Pool = require('pg').Pool;
const path = require('path');

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'airbnb',
  password: 'password',
  port: 5432,
});

const seedDatabase = (req, res) => {
  const filepath = path.join(__dirname, 'listings.csv');
  pool.query(`COPY LISTINGS(category,beds,title,price,score,reviews,city,state,country) FROM '${filepath}' DELIMITER ',' CSV HEADER`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(201)
  })
};

const getListing = (req, res) => {
  pool.query('SELECT * FROM listings ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

const getListingById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM listings WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

const createListing = (req, res) => {
  const { category, beds, title, price, score, reviews, city, state, country } = req.body

  pool.query('INSERT INTO listings (category, beds, title, price, score, reviews, city, state, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id', [category, beds, title, price, score, reviews, city, state, country], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${results.rows.id}`)
  })
};

const updateListing = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, email } = req.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteListing = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`User deleted with ID: ${id}`)
  })
};

module.exports = {
  seedDatabase,
  getListing,
  getListingById,
  createListing,
  updateListing,
  deleteListing,
};