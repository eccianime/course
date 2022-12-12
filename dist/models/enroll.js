"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const Enroll = dbConnection_1.default.define('enroll', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    course_id: sequelize_1.DataTypes.STRING,
    user_id: sequelize_1.DataTypes.STRING,
    created_at: sequelize_1.DataTypes.STRING,
    updated_at: sequelize_1.DataTypes.STRING,
    price: sequelize_1.DataTypes.STRING,
    currency_symbol: sequelize_1.DataTypes.STRING,
    order_id: sequelize_1.DataTypes.STRING,
}, {
    timestamps: false
});
exports.default = Enroll;
