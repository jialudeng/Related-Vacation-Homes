DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

\c airbnb;

CREATE TABLE listings_staging (
  id SERIAL PRIMARY KEY,
  category varchar(100) NOT NULL,
  beds varchar(100) NOT NULL,
  title varchar(100) NOT NULL,
  price varchar(100) NOT NULL,
  score varchar(100) NOT NULL,
  reviews varchar(100) NOT NULL,
  city varchar(100) NOT NULL,
  state varchar(100) NOT NULL,
  country varchar(100) NOT NULL
);

CREATE TABLE listings (
  id SERIAL PRIMARY KEY,
  category varchar(100) NOT NULL,
  beds integer NOT NULL,
  title varchar(100) NOT NULL,
  price integer NOT NULL,
  score numeric(3, 2) NOT NULL,
  reviews integer NOT NULL,
  city char(100) NOT NULL,
  state char(100) NOT NULL,
  country char(100) NOT NULL
);

CREATE TABLE pictures_staging (
  id SERIAL PRIMARY KEY,
  url varchar(100) NOT NULL,
  listing varchar(100) NOT NULL
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  url varchar(100) NOT NULL,
  listing integer REFERENCES listings(id) ON DELETE CASCADE
);

CREATE TABLE relations_staging (
  listingone varchar(100) NOT NULL,
  listingtwo varchar(100) NOT NULL,
  similarity varchar(100) NOT NULL
);

CREATE TABLE relations (
  listingone integer NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  listingtwo integer NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  similarity integer
);

select * from relations where listingone = 9482;
update relations set similarity = 99 where listingone = 9482 and listingtwo = 3989786;
delete from relations where listingone = 9482 and listingtwo = 3989786;
insert into relations (listingone,listingtwo,similarity) values (29401,3,90)


insert into pictures (id,url,listing) values (default,'testing',2387510);
update pictures set url = 'testing' where id = 23857143;
delete from pictures where listing = 6274914;

CREATE INDEX idx_pictures_listing
ON pictures(listing);

CREATE INDEX idx_relations_listingone
ON relations(listingone);


