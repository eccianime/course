"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const Brand = dbConnection_1.default.define('brand', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    name: sequelize_1.DataTypes.STRING,
    created_at: sequelize_1.DataTypes.STRING,
    updated_at: sequelize_1.DataTypes.STRING,
    state: sequelize_1.DataTypes.STRING,
    slug: sequelize_1.DataTypes.STRING,
    title: sequelize_1.DataTypes.STRING,
    sub_title: sequelize_1.DataTypes.STRING,
    cover_image: sequelize_1.DataTypes.STRING,
    brand_image: sequelize_1.DataTypes.STRING,
    currency: sequelize_1.DataTypes.STRING,
    colors: sequelize_1.DataTypes.STRING,
    color_template: sequelize_1.DataTypes.STRING,
    cover_bank_image: sequelize_1.DataTypes.STRING,
    social_media: sequelize_1.DataTypes.STRING,
    api_token: sequelize_1.DataTypes.STRING,
    updated_cover_image: sequelize_1.DataTypes.STRING,
    updated_brand_image: sequelize_1.DataTypes.STRING,
    multipart_cover_image_url: sequelize_1.DataTypes.STRING,
    multipart_brand_image_url: sequelize_1.DataTypes.STRING,
    is_b2b: sequelize_1.DataTypes.STRING,
    enterprise_id: sequelize_1.DataTypes.STRING,
    primary_color: sequelize_1.DataTypes.STRING,
    secondary_color: sequelize_1.DataTypes.STRING,
    buttons_color: sequelize_1.DataTypes.STRING,
    price_button_color: sequelize_1.DataTypes.STRING,
    background: sequelize_1.DataTypes.STRING,
    title_color: sequelize_1.DataTypes.STRING,
    subtitle_color: sequelize_1.DataTypes.STRING,
    social_button: sequelize_1.DataTypes.STRING,
    customized_colors: sequelize_1.DataTypes.STRING,
    is_active: sequelize_1.DataTypes.STRING
}, {
    timestamps: false
});
exports.default = Brand;
