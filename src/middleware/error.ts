/* eslint-disable no-unused-vars */
import ErrorResponse from "../utils/errorResponse";

const errorHandler = (error: any, req: any, res: any, next: any) => {
    let errorCopy = { ...error };
    errorCopy.message = error.message;
    
    if( error.name === 'CastError' ){
        const message = `Recurso não encontrado.`
        errorCopy = new ErrorResponse(message, 404)
    }

    if( error.code === 11000 ){
        const message = `Recurso com o campo [${Object.keys(error.keyValue)[0]}] duplicado.`
        errorCopy = new ErrorResponse(message, 400)
    }

    if( error.name === 'ValidationError' ){
        const message = Object.values( errorCopy.errors ).map( (val: any) => `[${val.path}] ${val.message}` )
        errorCopy = new ErrorResponse(JSON.stringify(message), 400)
    }

    return res.status( errorCopy.statusCode || 500 ).json({ 
        success: false, 
        message: errorCopy.message || 'Erro de Servidor'
    });
}

export default errorHandler;