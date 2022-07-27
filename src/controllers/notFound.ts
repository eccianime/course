import ErrorResponse from "../utils/errorResponse";
import asyncHandler from '../middleware/async';

export const notFound = asyncHandler( async ( req: any, res: any, next: any ) => {
    return next(new ErrorResponse( "Acesso Restrito.", 404));
})