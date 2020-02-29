DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

\c airbnb;

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

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  url varchar(100) NOT NULL,
  listing integer
);

ALTER TABLE pictures
ADD CONSTRAINT picture_listing_id
FOREIGN KEY (listing)
REFERENCES listings(id)
ON DELETE CASCADE;


CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  url varchar(100) NOT NULL,
  listing integer REFERENCES listings(id) ON DELETE CASCADE
);

CREATE TABLE relations (
  listingone integer NOT NULL, 
  listingtwo integer NOT NULL, 
  similarity integer
);

ALTER TABLE relations
ADD CONSTRAINT relationone_listing_id
FOREIGN KEY (listingone)
REFERENCES listings(id)
ON DELETE CASCADE;

ALTER TABLE relations
ADD CONSTRAINT relationtwo_listing_id
FOREIGN KEY (listingtwo)
REFERENCES listings(id)
ON DELETE CASCADE;

CREATE TABLE relations (
  listingone integer NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  listingtwo integer NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  similarity integer
);

COPY listings(category,beds,title,price,score,reviews,city,state,country) FROM '/home/ec2-user/listings5.csv' CSV HEADER;




select * from relations where listingone = 9482;
update relations set similarity = 99 where listingone = 9482 and listingtwo = 3989786;
delete from relations where listingone = 9482 and listingtwo = 3989786;
insert into relations (listingone,listingtwo,similarity) values (29401,3,90)


insert into pictures (id,url,listing) values (default,'testing',2387510);
update pictures set url = 'testing' where id = 23857143;
delete from pictures where listing = 6274914;

CREATE INDEX hash_pictures_listing
ON pictures USING HASH (listing);

CREATE INDEX hash_relations_listingone
ON relations USING HASH (listingone);


