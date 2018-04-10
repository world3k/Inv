CREATE TABLE products
(
  product_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  description VARCHAR(200) NOT NULL,
  color VARCHAR(20),
  weight NUMERIC(10,2),
  PRIMARY KEY (product_id)
);

CREATE TABLE system_users
(
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  role CHAR(1) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE Product_Images
(
  Image_id INT NOT NULL AUTO_INCREMENT,
  link VARCHAR(200) NOT NULL,
  description VARCHAR(200) NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY (Image_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE employees
(
  employee_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (employee_id),
  FOREIGN KEY (user_id) REFERENCES system_users(user_id)
);

CREATE TABLE regions
(
  region_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  description VARCHAR(100) NOT NULL,
  employee_id INT NOT NULL,
  PRIMARY KEY (region_id),
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
  UNIQUE (name)
);

CREATE TABLE warehouses
(
  warehouse_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  description VARCHAR(200) NOT NULL,
  address VARCHAR(100) NOT NULL,
  employee_id INT NOT NULL,
  region_id INT NOT NULL,
  PRIMARY KEY (warehouse_id),
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
  FOREIGN KEY (region_id) REFERENCES regions(region_id)
);

CREATE TABLE customers
(
  customer_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  email_address VARCHAR(40) NOT NULL,
  gender CHAR(1) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  dob DATE NOT NULL,
  region_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (customer_id),
  FOREIGN KEY (region_id) REFERENCES regions(region_id),
  FOREIGN KEY (user_id) REFERENCES system_users(user_id)
);

CREATE TABLE categories
(
  category_id INT NOT NULL  AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  description VARCHAR(200) NOT NULL,
  customer_id INT NOT NULL,
  employee_id INT NOT NULL,
  PRIMARY KEY (category_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE Inventories
(
  Maximum_quantity INT NOT NULL,
  amount_in_stock INT NOT NULL,
  Refill_date DATE NOT NULL,
  Refill_point INT NOT NULL,
  product_status INT NOT NULL,
  Inventory_id INT NOT NULL   AUTO_INCREMENT,
  price NUMERIC(10,2) NOT NULL,
  warehouse_id INT NOT NULL,
  customer_id INT NOT NULL,
  PRIMARY KEY (Inventory_id),
  FOREIGN KEY (warehouse_id) REFERENCES warehouses(warehouse_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE Categories_To_Products
(
  category_id INT NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY (category_id, product_id),
  FOREIGN KEY (category_id) REFERENCES categories(category_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE Products_to_inventories
(
  product_id INT NOT NULL,
  Inventory_id INT NOT NULL,
  PRIMARY KEY (product_id, Inventory_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (Inventory_id) REFERENCES Inventories(Inventory_id)
);

CREATE TABLE customers_Address
(
  Address VARCHAR(100) NOT NULL,
  customer_id INT NOT NULL,
  PRIMARY KEY (Address, customer_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
