import { Model, DataTypes } from "sequelize";
import connection from "./connection.mjs";

class Logs extends Model { }

Logs.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    temperature: {
        type: DataTypes.STRING,
        allowNull: false
    },
    humidity: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName:"logs",
    sequelize:connection
})

Logs.sync();

export default Logs