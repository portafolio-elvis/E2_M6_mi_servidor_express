//Importar librería Express
const express = require("express");

//Instancia de aplicación Express
const app = express();

//Express con archivo estático
app.use(express.static("public"));

//Iniciar el servidor
app.listen(3000, () => {
  console.log(`Servidor funcionando en http://localhost:3000`);
});
