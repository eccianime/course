import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection';

const Instructor = sequelize.define('instructor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    brand_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    teaser: DataTypes.STRING,
    description: DataTypes.STRING,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
    profile_image: DataTypes.STRING,
    updated_profile_image: DataTypes.STRING,
    multipart_profile_image_url: DataTypes.STRING,
}, {
    timestamps: false
})

export default Instructor;