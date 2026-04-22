show databases;

-- create a database 
create database sampleproducts;

-- choosing the database
use sampleproducts;

-- to execute query -> ctrl + enter 
show tables;

-- create table 
create table products (
ID int,
name varchar(50),
price tinyint,
)

-- insert into table 
insert into products values(1, "Iphone 15 Pro", 100);
insert into products values(2, "Iphone 14 Pro", 100);

-- retrieve the data from table 
select * from products;

select name, price from products;

-- insert multiple data togather 
insert into products values(3, "Micromax", 50), (12, "samsung", 20), (20, "micromax", 100);

-- insert specific value 
insert into products(ID, name) values(21, "samsung");

-- update 
update products 
set price = 50 
where ID = 2;

update products
set name = "Samsung"
where ID = 3 and price = 50;

-- select data based on condition 
select * from products where name = "Iphone 15 Pro";

-- delete 
delete from products 
where ID = 20;


-- delete all table data
truncate table products;

show tables;

-- to delete to table 
drop table products;


-- contraints 
show tables;

create table users (
ID int primary key,
name varchar(40),
age tinyint,
email varchar(50) not null, 
createdOn date default CurDate(),
check (age >= 18)
)

select * from users;

-- try it an see check contraint 
-- insert into users values(1, "Alina", 15, "admin@gmail.com", "10-10-26");

insert into users values(1, "Alina", 20, "admin@gmail.com", "10-10-26");

-- try it an see not null contraint 
-- insert into users values(2, "Alex", 20, null, "11-11-26");

insert into users values(2, "Alex", 20, "alex@gmail.com", "11-11-26");






