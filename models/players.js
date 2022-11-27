'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class players extends Model{
        static associate(models) {
            // define association here
        }
    }
    players.init({
        // player_Id: DataTypes.BIGINT,
        firstname: DataTypes.TEXT,
        lastname: DataTypes.TEXT,
        club: DataTypes.TEXT
    },
    {
        sequelize,
        modelName: 'players',
        timestamps: false,
    });
    players.removeAttribute('id');
    return players;
};