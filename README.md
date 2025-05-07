# SeekNShop - Full Stack E-commerce Search Application

## Overview

SeekNShop is a full-stack web application built with **Spring Boot (Java)** and **React.js** to provide a seamless product search and detail view experience for e-commerce use cases. It supports search functionality, product detail routing, clean UI, and database migration with Flyway.

---

## Features

### Backend (Spring Boot)

-  REST APIs to list and search products
-  Fetch product details by ID
-  Flyway for database version control (`V1__Create_products.sql`, `V2__Insert_Products.sql`)
-  PostgreSQL support
-  Swagger UI for API documentation

### Frontend (React)

-  Responsive landing page with search bar
-  Product cards with image, price, brand, category
-  Product detail page with full description
-  "Back to Search" navigation
-  Toasts for errors and loading spinners

---

## Cloning Git Repository

```bash
git clone https://github.com/Tanmay2001Choudhary/seeknshop.git 
```

##  frontend Setup

Start your backend server
```bash
cd frontend
npm i
```

##  Backend Setup

### Database Setup

Create a PostgreSQL database named `seeknshop` in your local database:
```sql
CREATE DATABASE seeknshop;
```

### SpringBoot Setup

#### application.properties Setup

Edit your db username and password in application.properties file
```spring.application.name=seeknshop
server.port=8080

spring.datasource.url=jdbc:postgresql://localhost:5432/seeknshop
spring.datasource.username=your_username_here
spring.datasource.password=your_password_here

spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

spring.flyway.enabled=true
spring.flyway.baseline-on-migrate=true
spring.flyway.locations=classpath:db/migration

logging.level.org.springframework=INFO
logging.level.com.seeknshop=DEBUG
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
```

Start your backend server
```bash
cd backend/seeknshop
mvn spring-boot:run
```

---

## WebPage

To check ui open this in your browser
```
http://localhost:5173/
```

## Swagger

To check all the api's of the backend open this in your browser
```
http://localhost:8080/swagger-ui.html
```
