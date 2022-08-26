import sequelize from "../config/dbConnection";
import asyncHandler from "../middleware/async";
import { Content, ContentsUsers, Section } from "../models";
import ErrorResponse from "../utils/errorResponse";

export const addCompletedContent = asyncHandler( async ( req: any, res: any, next: any ) => {
    const { user_id, content_id } = req.body;

    if( !user_id || !content_id ) return next(new ErrorResponse('Deve especificar do qual usuário e qual conteúdo deseja incluir.', 400));
    const duplicate = await ContentsUsers.findAll({
        where: { user_id, content_id }
    });
    if( duplicate.length ){
        return next(new ErrorResponse('Este usuário ja assistiu este conteúdo', 400));
    }else{
        const targetCourse = await Section.findOne({
            include: [
                { model: Content, required: true, where: { id: content_id } }
            ]
        })
        try {
            await ContentsUsers.create({
                user_id, content_id
            })


            // Preciso uma mudança para um novo deploy
            res.status(200).json({
                success: true,
                course_id: targetCourse?.get('course_id')
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                course_id: targetCourse?.get('course_id')
            })
        }
    }
})