CREATE TABLE products (
    id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    name NVARCHAR(50) NOT NULL,
    description NVARCHAR(250),
    price DECIMAL(18,2) DEFAULT 0 NOT NULL,
    in_stock BIT NOT NULL
);

CREATE TABLE users (
    id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    name NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    password nvarchar(100) NOT NULL,
    age TINYINT,
    is_active BIT NOT NULL
);