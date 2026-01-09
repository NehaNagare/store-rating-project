
CREATE DATABASE store_rating;
USE store_rating;

CREATE TABLE users(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(60),
 email VARCHAR(100) UNIQUE,
 password VARCHAR(255),
 address VARCHAR(400),
 role ENUM('ADMIN','USER','STORE_OWNER')
);

CREATE TABLE stores(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 email VARCHAR(100),
 address VARCHAR(400),
 owner_id INT
);

CREATE TABLE ratings(
 id INT AUTO_INCREMENT PRIMARY KEY,
 user_id INT,
 store_id INT,
 rating INT CHECK (rating BETWEEN 1 AND 5),
 UNIQUE(user_id,store_id)
);
