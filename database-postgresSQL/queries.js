const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: '54.219.178.138',
  database: 'airbnb',
  password: 'password',
  port: 5432,
  max: 150,
});

const getListingById =  function (req, res) {
  const id = parseInt(req.params.id);
  
  pool.query('select distinct r.listingtwo, r.similarity, p.url, l.category, l.beds, l.title, l. price, l.score, l.reviews, l.city, l.state, l.country from relations r inner join pictures p on p.listing=r.listingtwo inner join listings l on l.id=r.listingtwo where r.listingone=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.send(results.rows)
  })

};

const createListing = (req, res) => {
  const { category, beds, title, price, score, reviews, city, state, country } = req.body

  pool.query('INSERT INTO listings (id, category, beds, title, price, score, reviews, city, state, country) VALUES (default, $1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id', [category, beds, title, price, score, reviews, city, state, country], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${results.rows.id}`)
  })
};

const addPicture = (req, res) => {
  const { url, listing } = req.body;

  pool.query('INSERT INTO pictures (id, url, listing) VALUES (default, $1, $2) RETURNING id', [url, listing], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
};

const updateListing = (req, res) => {
  const id = parseInt(req.params.id)
  const { category, beds, title, price, score, reviews, city, state, country } = req.body

  pool.query(
    'UPDATE listings SET category = $1, beds = $2, title = $3, price = $4, score = $5, reviews = $6, city = $7, state = $8, country = $9 WHERE id = $10',
    [category, beds, title, price, score, reviews, city, state, country, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Listing modified with ID: ${id}`)
    }
  )
}

const updatePicture = (req, res) => {
  const id = parseInt(req.params.id)
  const { url } = req.body

  pool.query(
    'UPDATE pictures SET url=$1 WHERE id=$2',
    [url, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Picture modified with ID: ${id}`)
    }
  )
}

const deleteListing = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM listings WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Listing deleted with ID: ${id}`)
  })
};

const deletePicture = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM pictures WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Picture deleted with ID: ${id}`)
  })
}

module.exports = {
  getListingById,
  createListing,
  addPicture,
  updateListing,
  updatePicture,
  deleteListing,
  deletePicture
}
