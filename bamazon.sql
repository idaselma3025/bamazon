DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(1000product_name) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("WINE OF SACRED PURITY UNICORN WINE HOLDER KITCHEN DECORATION SCULPTURE STATUE",
"Home & Kitchen",
24.95,
2);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("FURemover Broom with Squeegee made from Natural Rubber, Multi-Surface and Pet Hair Removal, Telescoping Handle that Extends from 3 ft to 6 ft",
"Pet Supplies",
18.50,
120);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("PopSockets: Expanding Stand and Grip for Smartphones and Tablets - Black",
"Cell Phones & Accessories",
8.49,
1);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("Snake Eyes: A Nicolas Cage Activity Book",
"Books",
10.69,
1);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("MS.DEAR Sonic Facial Cleansing Brush, Cleanser & Massager Silicon Vibrating Waterproof Facial Cleansing System-Blue ",
"Beauty & Personal Care",
17.95,
15);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("iRing Universal Masstige Ring Grip/Stand Holder for any Smart Device - Black",
"Cell Phones & Accessories",
19.95,
20);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("zeroUV - Small Thin Metal Heart Shaped Frame Cupid Sunglasses",
"Clothing, Shoes and Jewelry",
9.99,
205);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("Pet bed, KAMIER Shark Round Washable Soft Cotton Dog Cat Pet Bed",
"Pet Supplies",
21.69,
53);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("Anker PowerCore 10000, One of the Smallest and Lightest 10000mAh External Batteries, Ultra-Compact, High-speed Charging Technology Power Bank for iPhone, Samsung Galaxy and More",
"Cell Phones & Accessories",
25.99,
6);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES
("Hyde 44250 Quickly Clean Hand and Tool Cleaning Glove, Black",
"Tools & Home Improvement",
6.71,
19);
