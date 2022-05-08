# LegoGym-Website

## What is LegoGym?
Lego Gym is a web application that allows users to create and share their own gym experiences using legos.
They can view and like other users' posts and also create their own posts.
Users can create their own profiles.

# How to start using LegoGym
## 1. Clone the repo to your local machine
## 2. Create an .env file in the root directory and add the following lines to the file:

```
DB_HOST='host_name'
DB_NAME='name_of_database'
DB_USER='database_username'
DB_PASS='database_password'
PROXY_PASS=/legoapp
NODE_ENV=localhost/or production
```

## 3. Create a database in MySQL
Use the legogymdb.sql file to create a database.

## 4. Create ssl.crt and ssl.key files in the root directory
```
$ openssl genrsa -out ssl-key.pem 2048
$ openssl req -new -key ssl-key.pem -out certrequest.csr
$ openssl x509 -req -in certrequest.csr -signkey ssl-key.pem -out ssl-cert.pem
```

## 5. npm install to install all dependencies
```
$ npm i
```

## To test admin functionality use the following credentials:
Email: legolover123@asd.fi
Password: 1234

## List of all dependencies:
https://www.npmjs.com/package/nodemon
https://www.npmjs.com/package/mysql2
https://www.npmjs.com/package/express
https://www.npmjs.com/package/dotenv
https://www.npmjs.com/package/express
https://www.npmjs.com/package/express-validator
https://www.npmjs.com/package/concat-map
https://www.npmjs.com/package/cors
https://www.npmjs.com/package//passport-local
http://www.passportjs.org/packages/passport-jwt/
https://www.npmjs.com/package/express-session
https://www.npmjs.com/package/multer
https://www.npmjs.com/package/bcryptjs
https://www.npmjs.com/package/http
https://www.npmjs.com/package/https
https://nodejs.dev/learn/the-nodejs-fs-module

## References:
https://github.com/IlmHe/WebCourseWeek2
https://gitlab.metropolia.fi/wtp-3011/server-two/-/tree/main
https://github.com/patrick-ausderau/wop-ui

## Contributors:
https://github.com/IlmHe
https://github.com/jannhakk
