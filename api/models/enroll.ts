import { DataTypes } from 'sequelize';
import sequelize from "../config/dbConnection";

const Enroll = sequelize.define('enroll', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    course_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
    price: DataTypes.STRING,
    currency_symbol: DataTypes.STRING,
    order_id: DataTypes.STRING,
}, {
    timestamps: false
})

export default Enroll;