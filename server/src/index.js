require("dotenv").config({ path: ".env" });

const express = require("express"), // Importa Express
  app = express(), // Asigna Express al inicio de la app
  PORT = process.env.PORT || 4000, // Define variable de entorno
  ConnectDatabase = require("./config/db"), // Configuración Conexión Base de Datos Mongo Atlas
  cors = require("cors"); // Permite Cross-Origin Resource Sharing

/ Middlewares */;
app.use(cors()); // Habilita transferencias de datos entre navegadores y servidores.
app.use(express.json({ extended: true })); // Habilita uso de JSON (Obliga enviar 'Content-Type':'application/json' el header de la petición)

// Define Rutas para API
app.use('/api/auth', require( './routes/auth.routes' ) );
app.use("/api/productos", require("./routes/productos.routes")); 
app.use("/api/usuarios", require("./routes/usuarios.routes"));
app.use("/api/ventas", require("./routes/ventas.routes"));
app.use("/api/vendedores", require("./routes/vendedores.routes"));

/** Conexión a BD Mongo Atlas */
ConnectDatabase();

/** Lanza el Servidor */ 
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server run on http://localhost:${PORT}`);
});
