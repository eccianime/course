"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const Content = dbConnection_1.default.define('content', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    title: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    created_at: sequelize_1.DataTypes.STRING,
    updated_at: sequelize_1.DataTypes.STRING,
    integration_type: sequelize_1.DataTypes.STRING,
    attributes_data: sequelize_1.DataTypes.STRING,
    section_id: sequelize_1.DataTypes.STRING,
    position: sequelize_1.DataTypes.STRING,
    upload_file_name: sequelize_1.DataTypes.STRING,
    upload_content_type: sequelize_1.DataTypes.STRING,
    upload_file_size: sequelize_1.DataTypes.STRING,
    upload_updated_at: sequelize_1.DataTypes.STRING,
    direct_upload_url: sequelize_1.DataTypes.STRING,
    demo_content: sequelize_1.DataTypes.STRING,
    allow_download: sequelize_1.DataTypes.STRING,
}, {
    timestamps: false
});
exports.default = Content;
