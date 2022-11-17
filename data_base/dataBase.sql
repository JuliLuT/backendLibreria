create database dataBase_merodeador;
use database_merodeador;
CREATE TABLE productdata (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(50) NOT NULL,
  descripcion varchar(255) NOT NULL,
  precio float NOT NULL,
  PRIMARY KEY (id)
);
show create table userdata;
CREATE TABLE userdata (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  contraseña varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
);
