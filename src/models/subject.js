const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../utils/connectDB');

const Subject = sequelize.define('subject', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = Subject;