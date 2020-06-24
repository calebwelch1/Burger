DROP DATABASE if exists burgers;
CREATE DATABASE burgers;

use burgers;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id));