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
CREATE INDEX ON :Listing(id)
CREATE INDEX ON :Picture(listing)

// constraints (if created will also create corresponding indexes)
CREATE CONSTRAINT ON (listing:Listing) ASSERT listing.id IS UNIQUE
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

Cannot use index hint in this context. Index hints are only supported for the following predicates in WHERE (either directly or as part of a top-level AND or OR): equality comparison, inequality (range) comparison, STARTS WITH, IN condition or checking property existence. The comparison cannot be performed between two property values. Note that the label and property comparison must be specified on a non-optional node (line 2, column 1 (offset: 18))

CALL apoc.periodic.iterate("MATCH (p:Picture) MATCH (l:Listing) WHERE l.id = p.listing CREATE (p)-[:PICTURE_OF]->(l);", {batchSize:10000, parallel:true})


LOAD CSV WITH HEADERS FROM 'file:/rels.csv' AS csvLine
MATCH (c:Client {CLIENT_ID: toInteger(csvLine. TECH_CLIENT_ID)})
MATCH (r:RelatedParty {RELATEDPARTY_ID: toInteger(trim(csvLine. RELATED_PARTY_ID))})
CREATE (c)-[:AssociatedWith {RELATEDPARTY_TYPE: csvLine. RELATEDPARTY_TYPE}]->(r)
return c, r

// most efficient when a relatively small number of nodes have the specified value on the queried property
MATCH (liskov:Scientist { name:'Liskov' })-[:KNOWS]->(wing:Scientist)-[:RESEARCHED]->(cs:Science { name:'Computer Science' })<-[:RESEARCHED]-(conway:Scientist { name: 'Conway' })
USING INDEX SEEK liskov:Scientist(name)
RETURN liskov.born AS column

// multiple index hints
MATCH (liskov:Scientist { name:'Liskov' })-[:KNOWS]->(wing:Scientist)-[:RESEARCHED]->(cs:Science { name:'Computer Science' })<-[:RESEARCHED]-(conway:Scientist { name: 'Conway' })
USING INDEX liskov:Scientist(name)
USING INDEX conway:Scientist(name)
RETURN liskov.born AS column

MATCH (a:Dense1) where a.id <> "1" 
WITH a 
MATCH (b:Dense1) where b.id = "1" 
WITH a,b 
WHERE a.key = b.key 
MERGE (a)-[:PARENT_OF]->(b)

MATCH (l:Listing) 
CALL apoc.lock.nodes([l])
WITH b
MATCH (p:Picture)
WHERE a.
CREATE (a)-[:PARENT_OF]->(b)

CALL apoc.load.csv('file:///listings.csv',{header:true})  YIELD map
CALL apoc.create.node(['map.AttributeName'], {key:['map.NodeID']}) YIELD node 
RETURN count(*)

call apoc.load.csv('listings-test.csv') YIELD lineNo, map, list
return *; 



CALL apoc.create.node(['Listing'], {id:toInteger(line.id),category: line.category,beds:toInteger(line.beds),title:line.title,price:toInteger(line.price),score:toFloat(line.score),reviews:toInteger(line.reviews),city:line.city,state:line.state,country:line.country}) YIELD node return count(*)