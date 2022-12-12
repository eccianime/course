"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const errorResponse_1 = __importDefault(require("../utils/errorResponse"));
const errorHandler = (error, req, res, next) => {
    let errorCopy = Object.assign({}, error);
    errorCopy.message = error.message;
    if (error.name === 'CastError') {
        const message = `Recurso não encontrado.`;
        errorCopy = new errorResponse_1.default(message, 404);
    }
    if (error.code === 11000) {
        const message = `Recurso com o campo [${Object.keys(error.keyValue)[0]}] duplicado.`;
        errorCopy = new errorResponse_1.default(message, 400);
    }
    if (error.name === 'ValidationError') {
        const message = Object.values(errorCopy.errors).map((val) => `[${val.path}] ${val.message}`);
        errorCopy = new errorResponse_1.default(JSON.stringify(message), 400);
    }
    return res.status(errorCopy.statusCode || 500).json({
        success: false,
        message: errorCopy.message || 'Erro de Servidor'
    });
};
exports.default = errorHandler;
