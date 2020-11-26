'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return  queryInterface.createTable('Users',
     { id: {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        },
        user_id_ref:Sequelize.STRING,
        firstname:{
              type:Sequelize.STRING,
              allowNull:false
            },
        lastname:{
              type:Sequelize.STRING,
              allowNull:false
            },
        email:{
              type:Sequelize.STRING,
              unique:true,
              allowNull: false
        },
        password:{
          type:Sequelize.STRING,
          allowNull:false
        },
        role_id:{
          type:Sequelize.INTEGER,
          allowNull:false,

          references:{
              model:'Roles',
              key:'id'
          }
        },
        gender:Sequelize.STRING,
        avatar_path:Sequelize.STRING,
        phone:{
               type:Sequelize.STRING,
               unique:true
        },
        country:Sequelize.STRING,
        state:Sequelize.STRING,
        city:Sequelize.STRING,
        address:Sequelize.TEXT,
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

    return queryInterface.dropTable('Users');
     
  }
};
