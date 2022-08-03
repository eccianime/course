import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection';

const Content = sequelize.define('content', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
    integration_type: DataTypes.STRING,
    attributes_data: DataTypes.STRING,
    section_id: DataTypes.STRING,
    position: DataTypes.STRING,
    upload_file_name: DataTypes.STRING,
    upload_content_type: DataTypes.STRING,
    upload_file_size: DataTypes.STRING,
    upload_updated_at: DataTypes.STRING,
    direct_upload_url: DataTypes.STRING,
    demo_content: DataTypes.STRING,
    allow_download: DataTypes.STRING,
}, {
    timestamps: false
})

export default Content;
