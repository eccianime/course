import sequelize from "../config/dbConnection";
import asyncHandler from "../middleware/async";
import { ContentsUsers, Course, Instructor, Content, Section } from "../models";
import ErrorResponse from "../utils/errorResponse";

export const getEnrolledCourses = asyncHandler(async ( req: any, res: any, next: any ) => {
    const { user_id, limit, course_id } = req.query;
    if( !user_id ) return next(new ErrorResponse('Deve especificar do qual usuário deseja ver os Cursos.', 400));

    const [results] = await sequelize.query(`
        select c.*, a.watched, count(co.*) total
        from courses c
        join enrolls e on e.course_id = c.id
        join sections s on s.course_id = c.id
        join contents co on co.section_id = s.id
        join (
            select c.id as anotherId, count(cu.*) as watched from courses c
            join enrolls e on e.course_id = c.id
            join sections s on s.course_id = c.id
            join contents co on co.section_id = s.id
            join contents_users cu on cu.content_id = co.id
            where e.user_id = ${user_id} and cu.user_id = ${user_id}
            group by c.id
        ) as a on a.anotherId = c.id
        where e.user_id = ${user_id} ${course_id ? `and c.id = ${course_id}` : ''}
        group by c.id, a.watched
        ${ limit ? `LIMIT ${limit}` : ''}
        `
    )

    res.status(200).json({
        success: true,
        data: results
    })
})

export const getCourseInstructors = asyncHandler(async ( req: any, res: any, next: any ) => {
    const { course_id } = req.params;
    const instructors = await Instructor.findAll({
        include: [{ model: Course, required: true, where: { id: course_id } }]
    });
    res.status(200).json({
        success: true,
        data: instructors,
    })
})

export const getSections = asyncHandler(async ( req: any, res: any, next: any ) => {
    const { course_id } = req.params;
    const { user_id } = req.query;
    const sections = await Section.findAll({
        where: { course_id },
        include: [{ model: Content, required: true }]
    });

    if( user_id ){
        const watchedContents = await Content.findAll({
            include: [
                { model: Section, required: true, where: { course_id } },
                { model: ContentsUsers, required: true, where: { user_id } }
            ]
        })
        sections.forEach( section => {
            ((section as any).contents as any[]).forEach( content => {
                const isCompleted = watchedContents.some( wc => (wc.get('contents_users') as any).some( (cu: any) => cu.content_id === content.id ) )
                content.dataValues.isCompleted = isCompleted;
            } )
        } )  
    }
    
    res.status(200).json({
        success: true,
        data: sections,
    })
})