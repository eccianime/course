import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection";

const Brand = sequelize.define('brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
    state: DataTypes.STRING,
    slug: DataTypes.STRING,
    title: DataTypes.STRING,
    sub_title: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    brand_image: DataTypes.STRING,
    currency: DataTypes.STRING,
    colors: DataTypes.STRING,
    color_template: DataTypes.STRING,
    cover_bank_image: DataTypes.STRING,
    social_media: DataTypes.STRING,
    api_token: DataTypes.STRING,
    updated_cover_image: DataTypes.STRING,
    updated_brand_image: DataTypes.STRING,
    multipart_cover_image_url: DataTypes.STRING,
    multipart_brand_image_url: DataTypes.STRING,
    is_b2b: DataTypes.STRING,
    enterprise_id: DataTypes.STRING,
    primary_color: DataTypes.STRING,
    secondary_color: DataTypes.STRING,
    buttons_color: DataTypes.STRING,
    price_button_color: DataTypes.STRING,
    background: DataTypes.STRING,
    title_color: DataTypes.STRING,
    subtitle_color: DataTypes.STRING,
    social_button: DataTypes.STRING,
    customized_colors: DataTypes.STRING,
    is_active: DataTypes.STRING
},
 {
    timestamps: false
})

export default Brand;
