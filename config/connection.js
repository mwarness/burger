// Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "IamRESPONSIBLE!3",
//   database: "burgers_db"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
// module.exports = connection;



// --------------------------------------------------------------------
// working code above this line for mysql db
// --------------------------------------------------------------------
// code for remote jawsDB


// Set up MySQL connection.
var mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "IAMRESPONSIBLE!3",
    database: "burgers_db"

  })
}



// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;