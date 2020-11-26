'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('CEOs', 
            { id: {
                  type:Sequelize.INTEGER,
                  autoIncrement:true,
                  primaryKey:true,
                  allowNull:false
              }, 
              ceo_id_ref:Sequelize.STRING,
              user_id:{
                type:Sequelize.INTEGER,
                allowNull:false,
                references:{
                    model:'Users',
                    key:'id'
                }
              },
              company_name:{
                type:Sequelize.STRING,
                allowNull:false,
                unique:true
              },
              year:Sequelize.STRING,
              company_headquarters:Sequelize.STRING,
              what_company_does:Sequelize.STRING,
              created_at: {
                allowNull:false,
                type:Sequelize.DATE,
                defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
              },
              updated_at: {
                allowNull:false,
                type: Sequelize.DATE,
                defaultValue:Sequelize.literal(
                  'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
                  )
              }
          });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('CEOs');
     
  }
};
