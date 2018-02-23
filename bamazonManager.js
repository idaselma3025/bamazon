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
  displayProducts();
});
function displayProducts() {
  var query="SELECT product_name,price,item_id FROM products";
    runSearch();
}

function runSearch() {
  inquirer
  .prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View Products for Sale",
      "View Low Inventory",
      "Add to Inventory",
      "Add New Product"
    ]
  })
  .then(function(answer) {
    switch (answer.action) {
      case "View Products for Sale":
      productsSale();
      break;

      case "View Low Inventory":
      lowInventory();
      break;

      case "Add to Inventory":
      addInventory();
      break;

      case "Add New Product":
      addProduct();
      break;
    }
  });
}

function productsSale(){
  connection.query("SELECT item_id, product_name, price, stock_quantity FROM products",function (err,res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Product_name: "+ res[i].product_name + " Item_id: "+res[i].item_id + " Price :"+res[i].price +"\n" + " Stock_quantity :"+res[i].stock_quantity +"\n");
    }
    runSearch();
  });
};

function lowInventory(){
  connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity<5",function (err,res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Product_name: "+ res[i].product_name + " Item_id: "+res[i].item_id + " Price :"+res[i].price +"\n" + " Stock_quantity :"+res[i].stock_quantity +"\n");
    }
    runSearch();
  });
};

function addInventory(){
  inquirer.prompt([{
    name:"item_id",
    type:"input",
    message: "Enter the item_id of the product you would like to update:"
  },
  {
    name:"stock_update",
    type:"input",
    message: "Enter the quantity by which you would like to increase the stock:"
  }]).then(function(answer){
    connection.query("SELECT * FROM products WHERE ?",{item_id:answer.item_id},function(err,res){
      console.log("The product"+ res[0].product_name + " has "+res[0].stock_quantity + " units available for sale.");
      var currentStock = parseInt(res[0].stock_quantity);
      var stockUpdate = parseInt(answer.stock_update);
      var stock=currentStock+stockUpdate;
      console.log("With this update there will be : " + stock + " " +res[0].product_name + " available.");
      inquirer.prompt({
        name:"continue",
        type:"list",
        message:"Would you like to continue?",
        choices:[
          "Yes, add inventory.",
          "No, cancel inventory."
        ]
      }).then(function(order){
        switch (order.continue) {
          case "Yes, add inventory.":
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
            console.log("Your inventory has been updated.  Thank you for working for bamazon.");
            runSearch();
            break;

            case "No, cancel inventory.":
            runSearch();
            break;
          }
        })
      })
    })
  }

  function addProduct(){
    inquirer.prompt([
      {
        name:"product_name",
        type:"input",
        message: "Enter the name of the product you would like to add:"
      },
      {
        name:"department_name",
        type:"input",
        message: "Enter the department you would like the product place within:"
      },
      {
        name:"price",
        type:"input",
        message: "Enter the price of the new product:"
      },
      {
        name:"stock_quantity",
        type:"input",
        message: "Enter the quantity of the new product you would like have in stock:"
      },
    ]).then(function(answer){
       var query = connection.query(
         "INSERT INTO products SET ?",
         {
           product_name: answer.product_name,
           department_name: answer.department_name,
           price: answer.price,
           stock_quantity: answer.stock_quantity
         },function(err, res){
           console.log("You successfully added " + answer.product_name+ " !");
         });
         runSearch();
    })
  };
