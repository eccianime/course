"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const ContentsUsers = dbConnection_1.default.define('contents_users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content_id: sequelize_1.DataTypes.INTEGER,
    user_id: sequelize_1.DataTypes.INTEGER,
}, {
    timestamps: false
});
exports.default = ContentsUsers;
