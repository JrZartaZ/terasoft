const express = require("express"),
  router = express.Router(),
  ventasController = require("../controllers/ventas.controller"); // Controller

/** Crea nuevo recurso */
router.post(
  "/", // Path
  ventasController.create // Run controller functionality
);

/** Obtiene todos los recursos */
router.get(
  "/", // Path
  ventasController.getAll // Run controller functionality
);

/** Obtiene un recurso por su ID */
router.get(
  "/:id", // Path
  ventasController.getById // Run controller functionality
);

/** Actualiza un recurso */
router.put(
  "/:id", // Path: ID del recurso
  ventasController.update // Run controller functionality
);

/** Elimina un recurso */
router.delete(
  "/:id", // Path: ID del recurso
  ventasController.delete // Run controller functionality
);

module.exports = router;
