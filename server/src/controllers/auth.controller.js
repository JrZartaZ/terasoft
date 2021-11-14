const jwt = require( 'jsonwebtoken' );
require( 'dotenv' ) .config({ path: '.env' });

const Usuario = require("../models/Usuario");

const
    CLIENT_ID = '530298702735-2f3kmn9k2dg8puodl8td5ka8480ipgi6.apps.googleusercontent.com',
    { OAuth2Client } = require( 'google-auth-library' ),
    client = new OAuth2Client( CLIENT_ID );

/** Crea nuevo recurso */
exports.googleLogin = async (request, response) => {
    console.log( 'Entra' );
    const { tokenId } = request .body;

    console.log( 'tokenId: ', tokenId );

    // ! Verify Google TokenID
    const
        ticket = await client .verifyIdToken({
            idToken: tokenId,
            audience: CLIENT_ID
        }),
        payload = ticket .getPayload(),
        { name, given_name, family_name, picture, email, email_verified } = payload;

        let token = null;

    // ! Verificacion de correo
    if( email_verified ) {
        const userFound = await Usuario .findOne({ correo: email }) .select( '-contrasena' );

        // ! Verifica si el usuario encontrado esta registrado y lo registra
        if( ! userFound ) {
            const
                contrasena = `${ email }${ process .env .SECRET }`,
                newUser = new Usuario({ nombre: name, correo: email, rol: 'vendedor', estado: 'pendiente', contrasena });

            await newUser .save();

            // ! Crea el Token el nuevo usuario registrado, usando JWT
            token = jwt .sign(
                { id: newUser._id },
                process .env .SECRET,
                { expiresIn: '1d' /** 24h */ }
            );

            return response .json({
                mensaje: `El nuevo usuario ha sido registrado y autenticado`,
                usuario: newUser,
                token
            })
        }

        console.log( 'userFound: ', userFound );

        // ! Crea el Token para un usuario que esta registrado, usando JWT
        token = jwt .sign(
            { id: userFound._id },
            process .env .SECRET,
            { expiresIn: '1d' /** 24h */ }
        );

        return response .json({
            mensaje: `El usuario ha sido autenticado`,
            usuario: userFound,
            token
        });
    }

};