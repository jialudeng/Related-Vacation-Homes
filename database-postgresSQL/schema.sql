DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

\c airbnb;


CREATE TABLE listings_staging (
  id SERIAL PRIMARY KEY,
  category varchar(50) NOT NULL,
  beds varchar(50) NOT NULL,
  title varchar(50) NOT NULL,
  price varchar(50) NOT NULL,
  score varchar(50) NOT NULL,
  reviews varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  state varchar(50) NOT NULL,
  country varchar(50) NOT NULL
);


CREATE TABLE listings (
  id SERIAL PRIMARY KEY,
  category varchar(50) NOT NULL,
  beds integer NOT NULL,
  title varchar(50) NOT NULL,
  price integer NOT NULL,
  score numeric(3, 2) NOT NULL,
  reviews integer NOT NULL,
  city char(50) NOT NULL,
  state char(50) NOT NULL,
  country char(50) NOT NULL
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  url varchar(100) NOT NULL,
  listing integer,
  CONSTRAINT pictures_listing_fkey FOREIGN KEY (listing)
    REFERENCES listings (id) MATCH SIMPLE
    ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE relations (
  listingone integer NOT NULL,
  listingtwo integer NOT NULL,
  similarity integer,
  PRIMARY KEY (listingone, listingtwo),
  CONSTRAINT relations_listingone_fkey FOREIGN KEY (listingone)
    REFERENCES listings (id) MATCH SIMPLE
    ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT relations_listingtwo_fkey FOREIGN KEY (listingtwo)
    REFERENCES listings (id) MATCH SIMPLE
    ON UPDATE NO ACTION ON DELETE NO ACTION
);

