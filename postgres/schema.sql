DROP TABLE listings CASCADE;

CREATE TABLE listings (
  id int NOT NULL AUTO_INCREMENT,
  category varchar(255) NOT NULL,
  beds int(20) NOT NULL,
  title varchar(50) NOT NULL,
  price int(50000) NOT NULL,
  reviewscore int(5) NOT NULL,
  reviewcount int(1000) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE pictures (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(50) NOT NULL,
  listing int(10000000) NOT NULL
)

CREATE TABLE relations (
  id int NOT NULL AUTO_INCREMENT,
  listingone int(10000000),
  listingtwo int(10000000),
  score int(1000)
);
