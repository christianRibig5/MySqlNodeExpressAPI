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
          created_at:{
            allowNull:false,
            type:Sequelize.DATE,
            defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
          },
          updated_at:{
            allowNull:false,
            type: Sequelize.DATE,
            defaultValue:Sequelize.literal(
              'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
            )
  }
       })
  },

  down: async (queryInterface, Sequelize) => {

     return  queryInterface.dropTable('Roles');

  }
};
