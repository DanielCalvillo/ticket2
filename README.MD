To initialize the proyect first you have to install dependencies and run migrations with the proper conection to your database.

Run the following commands

- npm install

- npx sequelize-cli db:migrate


After that you can start the proyect with "npm run start"

The postman collection for the proyect is in: https://www.getpostman.com/collections/d03f879ed87fa708f5f2

To be able to get any response from a request you have to pass a JWT to the request in authorization.

You get the JWT with the login route