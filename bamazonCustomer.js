var mysql = require('mysql');
var inquirer = require("inquirer");


var connection = mysql.createConnection({
	host: 'localhost',
	port: 8889,
	user: 'root',
	password: 'root',
	database: 'bamazon'
});


// Load Products

function loadProducts() {
	connection.query("SELECT * FROM products", function (err, res) {
		if (err) throw err;
		console.table(res);
		purchasePrompt();
	});
}
loadProducts();

// purchasePrompt();

function purchasePrompt() {
	inquirer.prompt([{
				name: "ID",
				type: "input",
				message: "Please enter Item Id of the Product you would like to purchase.",
				filter: Number
			},
			{
				name: "Quantity",
				type: "input",
				message: "How many items do you wish to purchase?",
				filter: Number
			},

		]).then(function (purchase) {
				var quantity = purchase.Quantity;
				var IDrequested = purchase.ID;

				let productQuery = `SELECT * FROM products WHERE item_id = ${IDrequested}`;

				connection.query(productQuery, {ID: IDrequested}, function (err, res) {
						if (err) throw err

						if (res.length === 0) {
							console.log("ERROR: Invalid Item ID. Please select a valid Item ID.")
						
						} else {
							
							let productInfo = res[0]

							if (quantity <= productInfo.stock_quantity) {
								console.log(productInfo.product_name + "is in stock! Placing order now!")
								connection.end();
							}
						}
					})
				})
			}

				

		
