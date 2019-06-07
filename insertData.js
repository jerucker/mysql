var mysql = require('mysql');

// Create A Connection
var con = mysql.createConnection({
    host: "localhost",
    port: 8889,
	user: "root",
	password: "root",
	database: "bamazon",

})


// Connect To MySQL
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected To The Database!");
	
	// Insert Into 
	var sql = "INSERT INTO products (product_name, department_name, priice, stock_quanity) VALUES ?";
	var values = [
        ['VaporMax 2019', 'Running Shoes', 190.00,200],
        ['VaporMax Plus', 'Running Shoes', 200.00,200]
        ['Air Max 720', 'Running Shoes', 190.00,200]
        ['NIKE KYRIE 5', 'Basketball Shoes', 130.00,100]
        ['NIKE LEBRON 16', 'Basketball Shoes', 160.00,200]
		
	]
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Records Inserted: " + result.affectedRows);
	});
});