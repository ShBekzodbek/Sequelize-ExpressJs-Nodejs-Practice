const Sequelize = require('sequelize');

const dbConfig = require('../config/db.config')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: 'postgres'
});




module.exports = sequelize;
