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
