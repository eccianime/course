import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection';

const Section = sequelize.define('section', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    course_id: DataTypes.STRING,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
    position: DataTypes.STRING,
}, {
    timestamps: false
})

export default Section;


