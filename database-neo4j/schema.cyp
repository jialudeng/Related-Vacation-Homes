// EXAMPLE DATA
CREATE (listing1:Listing {id:1, title:'Perfectly located Castro', beds:1, type:'private room', price:79, score:4.92, reviews:424, neighborhood:'Castro', city:'San Francisco', state:'CA'})
CREATE (listing2:Listing {id:2, title:'Valencia Corridor Center Of It All!', beds:1, type:'private room', price:70, score:4.90, reviews:680, neighborhood:'Mission', city:'San Francisco', state:'CA'})
CREATE (picture1:Picture {url:'https://a0.muscache.com/im/pictures/9158991/d0fa6362_original.jpg?aki_policy=xx_large'})
CREATE (picture2:Picture {url:'https://a0.muscache.com/im/pictures/15491620/af8521ad_original.jpg?aki_policy=xx_large'})
CREATE (picture3:Picture {url:'https://a0.muscache.com/im/pictures/9159113/ce0d6383_original.jpg?aki_policy=xx_large'})
CREATE (host1:Host {id:1, name:'Jialu'})
CREATE (host2:Host {id:2, name:'Adam'})

CREATE (picture1)-[:PICTURE_OF]->(listing1),
(picture3)-[:PICTURE_OF]->(listing1),
(picture2)-[:PICTURE_OF]->(listing2)

CREATE (host1)-[:HOST_OF]->(listing1),
(host2)-[:HOST_OF]->(listing2)

CREATE (listing1)-[:SIMILAR_TO]->(listing2)


// indexes
CREATE INDEX ON :Host(name)
CREATE INDEX ON :Listing(title, beds, type, price, score, reviews, neighborhood, city, state)
CREATE INDEX ON :Picture(url)

// constraints
CREATE CONSTRAINT ON (picture:Picture) ASSERT picture.url IS UNIQUE
CREATE CONSTRAINT ON (listing:Listing) ASSERT listing.id IS UNIQUE
CREATE CONSTRAINT ON (host:Host) ASSERT host.id IS UNIQUE
