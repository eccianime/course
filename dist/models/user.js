"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const User = dbConnection_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    email: sequelize_1.DataTypes.STRING,
    encrypted_password: sequelize_1.DataTypes.STRING,
    reset_password_token: sequelize_1.DataTypes.STRING,
    reset_password_sent_at: sequelize_1.DataTypes.STRING,
    remember_created_at: sequelize_1.DataTypes.STRING,
    sign_in_count: sequelize_1.DataTypes.STRING,
    current_sign_in_at: sequelize_1.DataTypes.STRING,
    last_sign_in_at: sequelize_1.DataTypes.STRING,
    current_sign_in_ip: sequelize_1.DataTypes.STRING,
    last_sign_in_ip: sequelize_1.DataTypes.STRING,
    created_at: sequelize_1.DataTypes.STRING,
    updated_at: sequelize_1.DataTypes.STRING,
    type: sequelize_1.DataTypes.STRING,
    profile_image: sequelize_1.DataTypes.STRING,
    locale: sequelize_1.DataTypes.STRING,
    name: sequelize_1.DataTypes.STRING,
    brand_id: sequelize_1.DataTypes.STRING,
    brand_wizard_steps: sequelize_1.DataTypes.STRING,
    stripe_id: sequelize_1.DataTypes.STRING,
    student_created_at: sequelize_1.DataTypes.STRING,
    billing_currency: sequelize_1.DataTypes.STRING,
    is_active: sequelize_1.DataTypes.STRING,
    whatsapp: sequelize_1.DataTypes.STRING,
    payment_method: sequelize_1.DataTypes.STRING,
    multipart_profile_image_url: sequelize_1.DataTypes.STRING,
    updated_profile_image: sequelize_1.DataTypes.STRING,
    inactive_by_payment: sequelize_1.DataTypes.STRING,
    api_token: sequelize_1.DataTypes.STRING,
    enterprise_id: sequelize_1.DataTypes.STRING,
    password_defined: sequelize_1.DataTypes.STRING
}, {
    timestamps: false
});
exports.default = User;
