import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection";

const Course = sequelize.define('course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
    brand_id: DataTypes.STRING,
    teaser: DataTypes.STRING,
    course_image: DataTypes.STRING,
    slug: DataTypes.STRING,
    is_active: DataTypes.STRING,
    price: DataTypes.STRING,
    currency_symbol: DataTypes.STRING,
    description: DataTypes.STRING,
    price_type: DataTypes.STRING,
    presentation_video: DataTypes.STRING,
    number_of_installments: DataTypes.STRING,
    value_of_installments: DataTypes.STRING,
    special_price: DataTypes.STRING,
    special_to_date: DataTypes.STRING,
    payment_integration_id: DataTypes.STRING,
    position: DataTypes.STRING,
    card_course_image: DataTypes.STRING,
    updated_card_course_image: DataTypes.STRING,
    updated_course_image: DataTypes.STRING,
    multipart_course_image_url: DataTypes.STRING,
    multipart_card_course_image_url: DataTypes.STRING,
    is_archived: DataTypes.STRING,
}, {
    timestamps: false
})

export default Course;
