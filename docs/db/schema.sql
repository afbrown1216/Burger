CREATE DATABASE burger_db; 
USE burger_db; 

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(60),
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
);