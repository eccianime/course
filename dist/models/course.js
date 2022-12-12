"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const Course = dbConnection_1.default.define('course', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    name: sequelize_1.DataTypes.STRING,
    created_at: sequelize_1.DataTypes.STRING,
    updated_at: sequelize_1.DataTypes.STRING,
    brand_id: sequelize_1.DataTypes.STRING,
    teaser: sequelize_1.DataTypes.STRING,
    course_image: sequelize_1.DataTypes.STRING,
    slug: sequelize_1.DataTypes.STRING,
    is_active: sequelize_1.DataTypes.STRING,
    price: sequelize_1.DataTypes.STRING,
    currency_symbol: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    price_type: sequelize_1.DataTypes.STRING,
    presentation_video: sequelize_1.DataTypes.STRING,
    number_of_installments: sequelize_1.DataTypes.STRING,
    value_of_installments: sequelize_1.DataTypes.STRING,
    special_price: sequelize_1.DataTypes.STRING,
    special_to_date: sequelize_1.DataTypes.STRING,
    payment_integration_id: sequelize_1.DataTypes.STRING,
    position: sequelize_1.DataTypes.STRING,
    card_course_image: sequelize_1.DataTypes.STRING,
    updated_card_course_image: sequelize_1.DataTypes.STRING,
    updated_course_image: sequelize_1.DataTypes.STRING,
    multipart_course_image_url: sequelize_1.DataTypes.STRING,
    multipart_card_course_image_url: sequelize_1.DataTypes.STRING,
    is_archived: sequelize_1.DataTypes.STRING,
}, {
    timestamps: false
});
exports.default = Course;
