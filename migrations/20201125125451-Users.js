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
        userIdRef:Sequelize.STRING,
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
        password:Sequelize.STRING,
        roleId:{
          type:Sequelize.INTEGER,
          allowNull:false,

          references:{
              model:'Roles',
              key:'id'
          }
        },
        gender:Sequelize.STRING,
        avatarPath:Sequelize.STRING,
        phone:{
               type:Sequelize.STRING,
               unique:true
        },
        country:Sequelize.STRING,
        state:Sequelize.STRING,
        city:Sequelize.STRING,
        address:Sequelize.TEXT,
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

    return queryInterface.dropTable('Users');
     
  }
};
