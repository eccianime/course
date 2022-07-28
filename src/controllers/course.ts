import { Course, Enroll } from "../models";
import ErrorResponse from "../utils/errorResponse";

export const getEnrolledCourses = async ( req: any, res: any, next: any ) => {
    const { user_id } = req.body;
    if( !user_id ) return next(new ErrorResponse('Deve especificar do qual usuário deseja ver os Cursos.', 400));
    const courses = await Enroll.findAll({ 
        where: {
            user_id
        },
        include: Course
    });
    res.status(200).json({
        success: true,
        data: courses
    })
}
