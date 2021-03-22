# MySqlNodeExpressAPI
Sample project to implement api with node and express js
https://dev.to/juliest88/how-to-build-rest-api-with-nodejs-express-and-mysql-31jk


Reference for sequelize ORM

https://medium.com/@prajramesh93/getting-started-with-node-express-and-mysql-using-sequelize-ed1225afc3e0

eg to create a migration file we write on the cli :  
sequelize model:create --name EmailVerification --attributes email:string,verification_code:string,verification_status:integer,expiration_time_in_seconds:integer,expired:integer

To run migration Execute on command line $: sequelize db:migrate

Heroku Hosting documentation:
https://devcenter.heroku.com/start

**Database Running Seed for settup data**:
sequelize seed:create --name my-seed-name
npx sequelize-cli db:seed:all

**example after running seed:**
'use strict';
const { v4: uuidv4 } = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('PaymentMethods', [
      {
        id:uuidv4(),
        name: 'cash',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:uuidv4(),
        name: 'card',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]); 
    
    
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('PaymentMethods', null, {});
    
  }
};
