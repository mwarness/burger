

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger-names varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);