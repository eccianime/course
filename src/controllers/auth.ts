import asyncHandler from "../middleware/async";
import User from "../models/user";

export const login = ( req: any, res: any, next: any ) => {
    User.findAll({
        attributes: ['id', 'email'],
        limit: 50
    }).then( resp => {
        console.log({ resp })
        res.status(200).json({
            success: true,
            data: resp.map( item => item.get() )
        })
    } )
}