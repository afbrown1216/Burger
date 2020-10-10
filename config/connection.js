const mysql = require("mysql"); 

const connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connetion = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'RamblingFun2020!',
    database: 'burger_db'
  });
}; 

connection.connect();

  module.exports = connection;



