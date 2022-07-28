import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection";

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    email: DataTypes.STRING,
    encrypted_password: DataTypes.STRING,
    reset_password_token: DataTypes.STRING,
    reset_password_sent_at: DataTypes.STRING,
    remember_created_at: DataTypes.STRING,
    sign_in_count: DataTypes.STRING,
    current_sign_in_at: DataTypes.STRING,
    last_sign_in_at: DataTypes.STRING,
    current_sign_in_ip: DataTypes.STRING,
    last_sign_in_ip: DataTypes.STRING,
    // created_at: DataTypes.STRING,
    // updated_at: DataTypes.STRING,
    // type: DataTypes.STRING,
    // profile_image: DataTypes.STRING,
    // locale: DataTypes.STRING,
    // name: DataTypes.STRING,
    // brand_id: DataTypes.STRING,
    // brand_wizard_steps: DataTypes.STRING,
    // stripe_id: DataTypes.STRING,
    // student_created_at: DataTypes.STRING,
    // billing_currency: DataTypes.STRING,
    // is_active: DataTypes.STRING,
    // whatsapp: DataTypes.STRING,
    // payment_method: DataTypes.STRING,
    // multipart_profile_image_url: DataTypes.STRING,
    // updated_profile_image: DataTypes.STRING,
    // inactive_by_payment: DataTypes.STRING,
    // api_token: DataTypes.STRING,
    // enterprise_id: DataTypes.STRING,
    // password_defined: DataTypes.STRING
}, {
    timestamps: false
})

export default User;