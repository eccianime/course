import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection";

const CoursesInstructors = sequelize.define('courses_instructors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    course_id: DataTypes.INTEGER,
    instructor_id: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
}, {
    timestamps: false
})

export default CoursesInstructors;
