import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection";

const ContentsUsers = sequelize.define('contents_users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
}, {
    timestamps: false
})

export default ContentsUsers;
