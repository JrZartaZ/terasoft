const Producto = require("../models/Producto");

/** Crea nuevo recurso */
exports.create = async (request, response) => {
  console.log( 'Crea producto' );
  response.json( 'Crea producto' );
};

/** Obtiene todos los recursos */
exports.getAll = async (request, response) => {
  console.log( 'Crea producto' );
  response.json( 'Crea producto' )
};

/** Obtiene un recurso por su ID */
exports.getById = async (request, response) => {
  console.log( 'Obtiene producto por ID' )
  response.json( 'Obtiene producto por ID' )
};

/** Actualiza un recurso */
exports.update = async (request, response) => {
  console.log( 'Actualiza un producto' )
  response.json( 'Actualiza un producto' )
};

/** Elimina un recurso */
exports.delete = async (request, response) => {
  console.log( 'Elimina un producto' )
  response.json( 'Elimina un producto' )
};
