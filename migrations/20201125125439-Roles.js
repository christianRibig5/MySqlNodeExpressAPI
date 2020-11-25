'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('Roles',
       { id: {
              type:Sequelize.INTEGER,
              autoIncrement:true,
              primaryKey:true,
              allowNull: false
            }, 
          role_name:{
              type:Sequelize.STRING,
              unique:true,
              allowNull: false
          },
          createdAt: {
            allowNull:false,
            type:Sequelize.DATE
          },
          updatedAt: {
            allowNull:false,
            type: Sequelize.DATE
          }
       })
  },

  down: async (queryInterface, Sequelize) => {

     return  queryInterface.dropTable('Roles');

  }
};
