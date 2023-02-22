CREATE DATABASE IF NOT EXISTS misionfinal;

USE misionfinal;

create table usuarios(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name varchar(45) not NULL,
    email varchar(30) not NULL,
    age int(3) not null,
    PRIMARY KEY(id)

)