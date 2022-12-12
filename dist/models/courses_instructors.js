"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const CoursesInstructors = dbConnection_1.default.define('courses_instructors', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    course_id: sequelize_1.DataTypes.INTEGER,
    instructor_id: sequelize_1.DataTypes.INTEGER,
    position: sequelize_1.DataTypes.INTEGER,
}, {
    timestamps: false
});
exports.default = CoursesInstructors;
