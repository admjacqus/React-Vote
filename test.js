const mysql = require('mysql');
const con = mysql.createConnection({
  host: "studentpoll.database.windows.net",
  user: "ajacques",
  password: "Legolas01!",
  database: "studentPollDatabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});