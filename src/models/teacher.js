const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../utils/connectDB');

const Teacher = sequelize.define('teacher', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        autoincrement: true,
        allowNull: false,
        defaultValue: "someone"
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: "someone"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "someone@gmail.com"
    },
    phone: DataTypes.STRING
}, {
    timestamps: false
});

module.exports = Teacher;