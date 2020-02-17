var env = process.env.NODE_ENV || 'development';
var config = require('../config/config')[env];
var neo4j = require('neo4j-driver').v1;
 
var driver = neo4j.driver(config.neo4j, neo4j.auth.basic(config.username, config.password));
 
 
exports.getSession = function (context) {
  if (context.neo4jSession) {
    return context.neo4jSession;
  } else {
    context.neo4jSession = driver.session();
    return context.neo4jSession;
  }
};