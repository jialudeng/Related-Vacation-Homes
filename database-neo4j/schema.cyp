//Directories in use: (from readme)
home:         /usr/local/Cellar/neo4j/3.5.14/libexec
config:       /usr/local/Cellar/neo4j/3.5.14/libexec/conf
logs:         /usr/local/var/log/neo4j
plugins:      /usr/local/Cellar/neo4j/3.5.14/libexec/plugins
import:       /usr/local/Cellar/neo4j/3.5.14/libexec/import
data:         /usr/local/var/neo4j/data
certificates: /usr/local/Cellar/neo4j/3.5.14/libexec/certificates
run:          /usr/local/Cellar/neo4j/3.5.14/libexec/run


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

CREATE (listing1)-[:SIMILAR_TO]->(listing2)


// indexes
CREATE INDEX ON :Picture(listing)

// load listings csv
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM 'file:///listings.csv' AS line
CREATE (:Listing {id:toInteger(line.id),category: line.category,beds:toInteger(line.beds),title:line.title,price:toInteger(line.price),score:toFloat(line.score),reviews:toInteger(line.reviews),city:line.city,state:line.state,country:line.country})

// load pictures csv
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM 'file:///pictures.csv' AS line
CREATE (:Picture {id:toInteger(line.id),url:line.url,listing:toInteger(line.listing)})

// load relations csv
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM 'file:///relations-test.csv' AS line
MATCH (l1:Listing {id:toInteger(line.listingone)})
MATCH (l2:Listing {id:toInteger(line.listingtwo)})
CREATE (l1)-[:SIMILAR_TO {similarity:toInteger(line.similarity)}]->(l2)


// indexes
CREATE INDEX ON :Picture(listing)

// load listings csv and create nodes
CALL apoc.periodic.iterate("
CALL apoc.load.csv('file:///listings.csv',{
  mapping:{
    id: {type:'int'},
    beds: {type:'int'},
    price: {type: 'int'},
    score: {type: 'float'},
    reviews: {type: 'int'}
  }
}) YIELD map as row return row
","
CREATE (l:Listing) SET l = row
", {batchSize:10000, iterateList:true, parallel:true});

// constraints (if created will also create corresponding indexes)
CREATE CONSTRAINT ON (listing:Listing) ASSERT listing.id IS UNIQUE

// THIS VERSION WORKS FOR UP TO 180000 load pictures csv and create nodes
CALL apoc.periodic.iterate("
CALL apoc.load.csv('file:///pictures.csv',{
  mapping:{
    id: {type:'int'},
    listing: {type:'int'}
  }
}) YIELD map as row RETURN row
"," 
  CREATE (p:Picture) SET p = row
  WITH p
  MATCH (l:Listing)
  WHERE p.listing = l.id
  CREATE (p)-[:PICTURE_OF]->(l)
", {batchSize:5000, parallel:false, iterateList:true});

CREATE INDEX FOR (p:Picture) ON (p.listing)

CALL apoc.periodic.iterate("
  MATCH (p:Picture),(l:Listing)
  WHERE p.listing = l.id
  RETURN p,l
","
  CALL apoc.create.relationship(p,'PICTURE_OF',{},l)
  YIELD rel REMOVE rel.noOp
", {batchSize:10000, parallel:true, iterateList:true})

// load relations and connect listings
CALL apoc.periodic.iterate("
  CALL apoc.load.csv('file:///relations.csv',{
    mapping:{
      listingone: {type:'int'},
      listingtwo: {type:'int'},
      similarity: {type:'int'}
    }
  }) YIELD map AS row RETURN row
  ","
  MATCH (l1:Listing), (l2:Listing)
  WHERE l1.id = row.listingone
  AND l2.id = row.listingtwo
  CALL apoc.create.relationship(l1,'SIMILAR_TO',{similarity:row.similarity},l2)
  YIELD rel REMOVE rel.noOp
", {batchSize:10000, parallel:false, iterateList:true})

// neo4j config for apoc
apoc.import.file.use_neo4j_config=true
apoc.import.file.enabled=true

// create node in listings
CREATE (l:Listing {id:10000001,category:'Entire apartment', beds:2,title:'testing',price:49,score:4.52,reviews:94,city:'Guangzhou',state:'Guangdong',country:'China'})

MATCH (l:Listing {id:812493})<-[:PICTURE_OF]-(p:Picture) detach delete p detach delete l

MATCH (l:Listing {id:74265})
CREATE (p:Picture {id:50000002,url:'testing2',listing:74265})
CREATE (p)-[:PICTURE_OF]->(l)

MATCH (l:Listing {id:923150})<-[:PICTURE_OF]-(p:Picture)
RETURN p

MATCH (p:Picture {id:19471345}) SET p.url = 'testing2'

MATCH (p:Picture {id:12424}) DETACH DELETE p


MATCH (l1:Listing {id:23}),(l2:Listing {id:827250})
CREATE (l1)-[:SIMILAR_TO {similarity:49}]->(l2)

MATCH (l1:Listing {id:2985})-[r:SIMILAR_TO]->(l3:Listing)
RETURN l3, r.similarity

MATCH (l1:Listing {id:2985})-[r:SIMILAR_TO]->(l2:Listing {id:8061815})
SET r.similarity = 99

MATCH (l1:Listing {id:2985})-[r:SIMILAR_TO]->(l2:Listing {id:6646374})
DELETE r

CREATE CONSTRAINT ON (p:Picture) ASSERT p.id IS UNIQUE