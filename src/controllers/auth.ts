import { NextFunction } from "express";
import asyncHandler from "../middleware/async";

export const login = ( req: any, res: any, next: any ) => {
    res.status(200).json({
        success: true,
        data: 'User Login'
    })
}