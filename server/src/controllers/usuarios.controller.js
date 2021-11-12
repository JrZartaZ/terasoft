const Usuario = require("../models/Usuario");

/** Crea nuevo recurso */
exports.create = async (request, response) => {
    const newProduct = new Usuario( request .body );
    const userSaved = await newProduct .save();
	
  	response .status( 201 ) .json({ 
        method: 'POST', 
        path: '/api/usuarios', 
        msg: 'Crea un usuario', 
        createdUser: userSaved 
    });
};

/** Obtiene todos los recursos */
exports.getAll = async (request, response) => {
    const users = await Usuario .find();
    
    response .status( 200 ) .json({ 
        method: 'GET', 
        path: '/api/usuarios', 
        msg: 'Obtiene todos los usuarios',
        count: users .length,
        users: users 
    });
};

/** Obtiene un recurso por su ID */
exports.getById = async (request, response) => {
    const
        { id } = request .params,
        user = await Usuario .findById( id );

    response .status( 200 ) .json({ 
        method: 'GET', 
        path: `/api/usuarios/${ id }`, 
        msg: 'Obtiene un usuario', 
        user: user 
    });
};

/** Actualiza un recurso */
exports.update = async (request, response) => {
    const
        { id } = request .params,
        updatedUser = await Usuario .findByIdAndUpdate( id, request .body, { new: true } );

    response .status( 200 ) .json({ 
        method: 'PUT', 
        path: `/api/usuarios/${ id }`, 
        msg: 'Actualiza un usuario', 
        updatedUser: updatedUser 
    });   // status: 204
};

/** Elimina un recurso */
exports.delete = async (request, response) => {
    const
        { id } = request .params,
        deletedUser = await Usuario .findByIdAndDelete( id );

    response .status( 200 ) .json({ 
        method: 'DELETE', 
        path: `/api/usuarios/${ id }`, 
        msg: 'Elimina un usuario', 
        deletedUser: deletedUser 
    });  // status: 204
};
