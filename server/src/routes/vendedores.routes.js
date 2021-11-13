const express = require("express"),
  router = express.Router(),
  vendedoresController = require("../controllers/vendedores.controller"); // Controller

/** Obtiene todos los recursos */
router.get(
  "/", // Path
  vendedoresController.getAll // Run controller functionality
);

module.exports = router;
