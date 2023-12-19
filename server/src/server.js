//LA FUNCIÓN DE ESTE MÓDULO ES CREAR EL SERVIDOR Y DEFINIR ALGUNOS MIDDLEWARES A UTILIZAR
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());                 //Con esto le digo a mi server que puede comunicarse con cualquier tipo de cliente (Hay formas de seleccionar que tipo de cliente se comunican con mi server)

server.use(router);

module.exports = server;
