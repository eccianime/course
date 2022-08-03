import Course from './course'
import CoursesInstructors from './courses_instructors'
import Brand from './brand'
import Enroll from './enroll'
import User from './user'
import Instructor from './instructor'
import Section from './section'
import Content from './content'

User.hasMany(Enroll, { foreignKey: 'user_id' });
Enroll.belongsTo(User, { foreignKey: 'user_id' });

Course.hasMany(Enroll, { foreignKey: 'course_id' });
Enroll.belongsTo(Course, { foreignKey: 'course_id' });

Brand.hasMany(User, { foreignKey: 'brand_id' });
User.belongsTo(Brand, { foreignKey: 'brand_id' });

Course.belongsToMany(Instructor, { through: CoursesInstructors, foreignKey: 'course_id' });
Instructor.belongsToMany(Course, { through: CoursesInstructors, foreignKey: 'instructor_id' })

Course.hasMany(Section, { foreignKey: 'course_id' });
Section.belongsTo(Course, { foreignKey: 'course_id' });

Section.hasMany(Content, { foreignKey: 'section_id' });
Content.belongsTo(Section, { foreignKey: 'section_id' });

export { Course, Enroll, User, Brand, Instructor }