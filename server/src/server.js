//LA FUNCIÓN DE ESTE MÓDULO ES CREAR EL SERVIDOR Y DEFINIR ALGUNOS MIDDLEWARES A UTILIZAR
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
