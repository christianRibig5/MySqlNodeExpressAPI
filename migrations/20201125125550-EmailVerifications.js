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
        verification_code:Sequelize.STRING,
        verification_status:Sequelize.INTEGER,
        expiration_time_in_seconds:Sequelize.INTEGER,
        expired:Sequelize.INTEGER,
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

    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     return queryInterface.dropTable('EmailVerifications');
     
  }
};
