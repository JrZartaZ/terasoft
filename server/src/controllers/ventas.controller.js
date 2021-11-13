const Venta = require("../models/Venta");

/** Crea nuevo recurso */
exports.create = async (request, response) => {
    const newSale = new Venta( request .body );
    const saleSaved = await newSale .save();
	
  	response .status( 201 ) .json({ 
        method: 'POST', 
        path: '/api/ventas', 
        msg: 'Crea un venta', 
        createdSale: saleSaved 
    });
};

/** Obtiene todos los recursos */
exports.getAll = async (request, response) => {
    const sales = await Venta .find();
    
    response .status( 200 ) .json({ 
        method: 'GET', 
        path: '/api/ventas', 
        msg: 'Obtiene todos los ventas',
        count: sales .length,
        sales: sales 
    });
};

/** Obtiene un recurso por su ID */
exports.getById = async (request, response) => {
    const
        { id } = request .params,
        sale = await Venta .findById( id );

    response .status( 200 ) .json({ 
        method: 'GET', 
        path: `/api/ventas/${ id }`, 
        msg: 'Obtiene un venta', 
        sale: sale 
    });
};

/** Actualiza un recurso */
exports.update = async (request, response) => {
    const
        { id } = request .params,
        updatedSale = await Venta .findByIdAndUpdate( id, request .body, { new: true } );

    response .status( 200 ) .json({ 
        method: 'PUT', 
        path: `/ventas/${ id }`, 
        msg: 'Actualiza un venta', 
        updatedSale: updatedSale 
    });   // status: 204
};

/** Elimina un recurso */
exports.delete = async (request, response) => {
    const
        { id } = request .params,
        deletedSale = await Venta .findByIdAndDelete( id );

    response .status( 200 ) .json({ 
        method: 'DELETE', 
        path: `/ventas/${ id }`, 
        msg: 'Elimina un venta', 
        deletedSale: deletedSale 
    });  // status: 204
};
