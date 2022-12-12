"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const Instructor = dbConnection_1.default.define('instructor', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    brand_id: sequelize_1.DataTypes.INTEGER,
    name: sequelize_1.DataTypes.STRING,
    teaser: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    created_at: sequelize_1.DataTypes.STRING,
    updated_at: sequelize_1.DataTypes.STRING,
    profile_image: sequelize_1.DataTypes.STRING,
    updated_profile_image: sequelize_1.DataTypes.STRING,
    multipart_profile_image_url: sequelize_1.DataTypes.STRING,
}, {
    timestamps: false
});
exports.default = Instructor;
