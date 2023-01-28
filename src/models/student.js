const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../utils/connectDB');

const Student = sequelize.define('student', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
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
    phone: DataTypes.BIGINT
}, {
    timestamps: false
});

module.exports = Student;