import { FindOptions } from "sequelize";
import { Course, Enroll } from "../models";
import ErrorResponse from "../utils/errorResponse";

export const getEnrolledCourses = async ( req: any, res: any, next: any ) => {
    const { user_id, limit } = req.query;
    if( !user_id ) return next(new ErrorResponse('Deve especificar do qual usuário deseja ver os Cursos.', 400));

    const options: FindOptions = {
        where: { user_id },
        include: [{ model: Course, required: true }]
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
