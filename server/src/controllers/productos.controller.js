const Producto = require("../models/Producto");

/** Crea nuevo recurso */
exports.create = async (request, response) => {
    const newProduct = new Producto( request .body );
    const productSaved = await newProduct .save();
	
  	response .status( 201 ) .json({ 
        method: 'POST', 
        path: '/api/productos', 
        msg: 'Crea un producto', 
        createdProduct: productSaved 
    });
};

/** Obtiene todos los recursos */
exports.getAll = async (request, response) => {
    const products = await Producto .find();
    
    response .status( 200 ) .json({ 
        method: 'GET', 
        path: '/api/productos', 
        msg: 'Obtiene todos los productos',
        count: products .length,
        products: products 
    });
};

exports.getAllAvailableProducts = async (request, response) => {
    const products = await Producto .find({ estado: 'disponible' });
    
    response .status( 200 ) .json({ 
        method: 'GET', 
        path: '/api/productos-disponibles', 
        msg: 'Obtiene todos los productos disponibles',
        count: products .length,
        products: products 
    });
};

/** Obtiene un recurso por su ID */
exports.getById = async (request, response) => {
    const
        { id } = request .params,
        product = await Producto .findById( id );

    response .status( 200 ) .json({ 
        method: 'GET', 
        path: `/api/productos/${ id }`, 
        msg: 'Obtiene un producto', 
        product: product 
    });
};

/** Actualiza un recurso */
exports.update = async (request, response) => {
    const
        { id } = request .params,
        updatedProduct = await Producto .findByIdAndUpdate( id, request .body, { new: true } );

    response .status( 200 ) .json({ 
        method: 'PUT', 
        path: `/productos/${ id }`, 
        msg: 'Actualiza un producto', 
        updatedProduct: updatedProduct 
    });   // status: 204
};

/** Elimina un recurso */
exports.delete = async (request, response) => {
    const
        { id } = request .params,
        deletedProduct = await Producto .findByIdAndDelete( id );

    response .status( 200 ) .json({ 
        method: 'DELETE', 
        path: `/productos/${ id }`, 
        msg: 'Elimina un producto', 
        deletedProduct: deletedProduct 
    });  // status: 204
};
