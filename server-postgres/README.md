## CRUD  API Routes 

GET /api/listings/:id -get recommendations for specified listing
  request.body = null
  return [{
  id int NOT NULL AUTO_INCREMENT,
  pictureone varchar(255) NOT NULL,
  picturetwo varchar(255) NOT NULL,
  picturethree varchar(255) NOT NULL,
  picturefour varchar(255) NOT NULL,
  picturefive varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  beds int(20) NOT NULL,
  title varchar(50) NOT NULL,
  price int(50000) NOT NULL,
  reviewscore int(5) NOT NULL,
  reviewcount int(1000) NOT NULL,
  PRIMARY KEY (id)
  }]

POST /api/listings -insert new listing
  request.body = {
  id int NOT NULL AUTO_INCREMENT,
  pictureone varchar(255) NOT NULL,
  picturetwo varchar(255) NOT NULL,
  picturethree varchar(255) NOT NULL,
  picturefour varchar(255) NOT NULL,
  picturefive varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  beds int(20) NOT NULL,
  title varchar(50) NOT NULL,
  price int(50000) NOT NULL,
  reviewscore int(5) NOT NULL,
  reviewcount int(1000) NOT NULL,
  PRIMARY KEY (id)
  }
  return status code


DELETE /api/listings/data/:id -delete recommendations at specified listing
  request.body = {id int NOT NULL AUTO_INCREMENT}
  return status code

PUT /api/listings -update a specific listing
  request.body = {
    id int NOT NULL AUTO_INCREMENT
    (col) (value)
  }
  return status code