const { Model, DataTypes } = require('sequelize');

const PERSON_TABLE = 'persons';

class Person extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true,
        }
    }
}

const PersonSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name',
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name',
    },
    phone: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'phone',
    }
}

module.exports = { Person, PersonSchema };