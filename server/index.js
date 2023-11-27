//ESTE MÓDULO TIENE LA RESPONSABILIDAD DE INICIAR LA APLICACIÓN
//const axios = require("axios");
const server = require('./src/server');
const { conn } = require('./src/db.js');
const PORT = 3001;
const { getCountriesApi } = require('./src/utils.js');

conn.sync({ alter: true }).then(() => {
server.listen(PORT, async() => {
  await getCountriesApi();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
