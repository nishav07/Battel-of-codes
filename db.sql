CREATE DATABASE IF NOT EXISTS Users;
USE Users;

CREATE TABLE detail (
    userid INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age INT CHECK(age > 18),
    city VARCHAR(20) NOT NULL;
);

INSERT INTO detail
(name,age,city,userid)
VALUES
("Rohan",19,"pune",12),
("Rohan",19,"pune",12),
("Rohan",19,"pune",12),
("Rohan",19,"pune",12),