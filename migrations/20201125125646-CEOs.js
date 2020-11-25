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
              ceoIdRef:Sequelize.STRING,
              userId:{
                type:Sequelize.INTEGER,
                allowNull:false,
                references:{
                    model:'Users',
                    key:'id'
                }
              },
              companyName:{
                type:Sequelize.STRING,
                allowNull:false,
                unique:true
              },
              year:Sequelize.STRING,
              companyHeadquarters:Sequelize.STRING,
              whatCompanyDoes:Sequelize.STRING,
              createdAt: {
                allowNull:false,
                type:Sequelize.DATE
              },
              updatedAt: {
                allowNull:false,
                type: Sequelize.DATE
              }
          });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('CEOs');
     
  }
};
