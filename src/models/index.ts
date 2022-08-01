import Course from './course'
import Brand from './brand'
import Enroll from './enroll'
import User from './user'

User.hasMany(Enroll, { foreignKey: 'user_id' });
Enroll.belongsTo(User, { foreignKey: 'user_id' });

Course.hasMany(Enroll, { foreignKey: 'course_id' });
Enroll.belongsTo(Course, { foreignKey: 'course_id' });

Brand.hasMany(User, { foreignKey: 'brand_id' })
User.belongsTo(Brand, { foreignKey: 'brand_id' })

export { Course, Enroll, User, Brand }