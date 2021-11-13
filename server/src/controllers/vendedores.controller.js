const Usuario = require("../models/Usuario");


/** Obtiene todos los recursos */
exports.getAll = async (request, response) => {
    const users = await Usuario .find({ rol: 'vendedor', estado: 'autorizado' });
    
    response .status( 200 ) .json({ 
        method: 'GET', 
        path: '/api/vendedores', 
        msg: 'Obtiene todos los vendedores autorizados',
        count: users .length,
        sellers: users 
    });
};

