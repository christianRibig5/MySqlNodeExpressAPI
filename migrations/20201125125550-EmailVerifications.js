'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     return queryInterface.createTable('EmailVerifications', 
     { id: {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        },
        email:{
              type:Sequelize.STRING,
              unique:true,
              allowNull: false
        },
        verificationCode:Sequelize.STRING,
        verificationStatus:Sequelize.INTEGER,
        expirationTimeInSeconds:Sequelize.INTEGER,
        expired:Sequelize.INTEGER,
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
    
     return queryInterface.dropTable('EmailVerifications');
     
  }
};
