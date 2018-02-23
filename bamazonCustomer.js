var mysql = require("mysql");
var inquirer = require("inquirer");
var string;
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
console.log("working");
displayProducts();
});
function displayProducts() {
  var query="SELECT product_name,price,item_id FROM products";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Product_name: "+ res[i].product_name + " Product_id: "+res[i].item_id + " Price :"+res[i].price +"\n");
    }
      item_idSearch();
  });
}


function item_idSearch(){
  inquirer
    .prompt([
      {
        name: "item_id",
      type: "input",
      message: "Enter the product_id of the item you would like to purchase:"
    },
      {name: "quantity",
      type:"input",
      message:"Enter the quantity of the product that you would like to buy:"

      }
    ])
    .then(function(answer) {
    var query = "SELECT * FROM products WHERE ?";
      connection.query(query,{item_id:answer.item_id},function (err,res) {
var stock=res[0].stock_quantity-answer.quantity;
// console.log(res);
if(answer.quantity<= res[0].stock_quantity){
  console.log("Your order total is : $ " + answer.quantity*res[0].price);
  inquirer.prompt({
    name:"continue",
    type:"list",
    message:"Would you like to continue?",
    choices:[
      "Yes, place my order.",
      "No, continue shopping."
    ]
  }).then(function(order){
    switch (order.continue) {
      case "Yes, place my order.":
      var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: stock
          },
          {
            item_id: answer.item_id
          }
        ],);
        console.log("Your order has been placed.  Thank you for shopping with bamazon.");
        item_idSearch();
        break;

      case "No, continue shopping.":
        item_idSearch();
        break;
      }
  })
}
else{
  console.log("There is not enough "+ res[0].product_name +" in stock for your order.");
  console.log("We have " + res[0].stock_quantity + " " + res[0].product_name+" in stock.");
  item_idSearch();
}

});
  });
};
