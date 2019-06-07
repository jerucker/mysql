var mysql = require('mysql');

// Create A Connection
var con = mysql.createConnection({
    host: "localhost",
    port = 8889,
	user: "root",
	password: "root",
	// database: "bamazon",

})


// Connect To MySQL
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected To The Database!");
	
	// Create Database
	con.query("CREATE DATABASE bamazon", function (err, result) {
		if (err) throw err;
		console.log("Database Created!");
	});
});