# Bamazon for Customers
1. To purchase a product that has sufficient quantity follow the below directions and use this video as reference: [Shopping link for available products](https://screencast-o-matic.com/watch/cFn336oS0x)
1. To start the application run node bamazonCustomer.js
1. After starting the application all products available for sale will display.  The **Product_name**. **Product_id**, and the **Price** will display.  
1. The following prompt will display for users : **Enter the product_id of the item you would like to purchase.**
1. After entering the **Product_id** for the product the user would like to purchase.  A second prompt will display to the user.  The second prompt will be: **Enter the quantity of the product you would like to buy:**.
1. If the quantity of the product is available the total price of their purchase will be displayed and the user will be asked if they would like to continue with their purchase.
  1. If the user chooses to complete the purchase by selecting **Yes, please place my order.** then a message will display **Your order has been placed. Thank you for shopping with bamazon.** The user will then be prompted to enter an additional product_id for continued shopping.
  1. If the user chooses not to complete the purchase by selecting **No, please cancel my order.** then the user will be prompted to enter an additional product_id for continued shopping.

1. To purchase a product that has sufficient quantity follow the below directions and use this video as reference: [Shopping link for unavailable products](https://screencast-o-matic.com/watch/cFn33loS0A)
1. To start the application run node bamazonCustomer.js
1. After starting the application all products available for sale will display.  The **Product_name**. **Product_id**, and the **Price** will display.  
1. The following prompt will display for users : **Enter the product_id of the item you would like to purchase.**
1. After entering the **Product_id** for the product the user would like to purchase.  A second prompt will display to the user.  The second prompt will be: **Enter the quantity of the product you would like to buy:**.
1. If the quantity of the product is unavailable a message will be displayed to the user that says: **There is not enough of your product available for your order. We have *blank* of your product available.**
1. Then the user will be prompted to enter an additional product_id for continued shopping.

# Bamazon for Managers
1. To use the viewing functionality available to bamazon Managers follow the below directions and use this video as reference: [Bamazon Managers link for Viewing Product and Low Inventory](https://screencast-o-matic.com/watch/cFn33DoS08)
1. To start the bamazon Managers application run node bamazonManager.js.
1. After starting the app select **View Products for Sale** to view all available products.
1. Select **View Low Inventory** to view products that have fewer than five items in stock.

1. To use the updating functionality available to bamazon Managers follow the below directions and use this video as reference: [Bamazon Managers link for Add to Inventory and Add New Product](https://screencast-o-matic.com/watch/cFn33qoSZj)
1. To update inventory select **Add to Inventory**
  1. The user will then be prompted to **Enter the item_id of the product you would like to update:**
  1. The user will then be prompted to **Enter the quantity by which you would like to increase the stock:**
  1. Then a message telling the user the resulting stock quantity will be displayed and the user will be prompted to either **Yes, add to inventory** or **No, cancel inventory addition**
    1. If the user completes the update a message will be displayed **Your order has been placed.  Thank you for working for bamazon.**
    1. If the user cancels the update the user will be brought back to the general menu.
1. To add a new product select **Add a new product**
  1. The user will then be prompted to do the following:
    1. **Enter the name of the product you would like to add:**
    1. **Enter the department that you would like the product to be place within:**
    1. **Enter the price of the new product:**
    1. **Enter the quantity of the new product that you would like to have in stock:**
  1. The product will then be added to the database and will be available when viewing products for sale.
