import { FindOptions } from "sequelize";
import { Course, Enroll, Instructor } from "../models";
import Content from "../models/content";
import CoursesInstructors from "../models/courses_instructors";
import Section from "../models/section";
import ErrorResponse from "../utils/errorResponse";

export const getEnrolledCourses = async ( req: any, res: any, next: any ) => {
    const { user_id, limit } = req.query;
    if( !user_id ) return next(new ErrorResponse('Deve especificar do qual usuário deseja ver os Cursos.', 400));

    const options: FindOptions = {
        where: { user_id },
        include: [{ 
            model: Course, required: true,
        }]
    }
    if( limit ){
        options.limit = limit
    }

    const courses = await Enroll.findAndCountAll(options);
    res.status(200).json({
        success: true,
        data: courses.rows,
        total: courses.count
    })
}

export const getCourseInstructors = async ( req: any, res: any, next: any ) => {
    const { course_id } = req.params;
    const instructors = await Instructor.findAll({
        include: [{ model: Course, required: true, where: { id: course_id } }]
    });
    res.status(200).json({
        success: true,
        data: instructors,
    })
}

export const getSections = async ( req: any, res: any, next: any ) => {
    const { course_id } = req.params;
    const sections = await Section.findAll({
        where: { course_id },
        include: [{ model: Content, required: true }]
    });
    res.status(200).json({
        success: true,
        data: sections,
    })
}