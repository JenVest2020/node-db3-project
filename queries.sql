-- Multi-Table Query Practice
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName,
    c.CategoryName
from product as p
    join category as c on p.CategoryId = c.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id,
    s.CompanyName
from Order as o
    join Shipper as s
where o.OrderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select p.ProductName, od.Quantity
from [OrderDetail] as od
join [Product] as p
where od.OrderId = '10251';

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT od.OrderId,
       c.CompanyName,
       e.LastName as EmployeeLastName
  FROM [Order]
       JOIN
       Customer AS c
       JOIN
       Employee AS e
       JOIN
       OrderDetail AS od;