CREATE DATABASE IF NOT EXISTS Users;
USE Users;

CREATE TABLE detail (
    userid INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age INT CHECK(age > 18),
    city VARCHAR(20) NOT NULL
);

INSERT INTO detail
(name,age,city,userid)
VALUES
("Rohan",19,"pune",12),
("mohan",23,"ranchi",13),
("alex",49,"patna",14),
("jhon",22,"pune",11);

SELECT city,COUNT(name) FROM detail
GROUP BY city;
