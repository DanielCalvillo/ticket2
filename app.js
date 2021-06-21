require('dotenv').config()
const express = require('express');
const app = express()
const sequelize = require('./db/conexion')
const router = require('./routes/routes');


//Middleware globales
app.use(express.json())

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', async (req, res) => {
  await sequelize.sync({ force: false})
  res.send('✅ - Server is up and running !!');
});
app.use('/', router);

//Iniciamos nuestro servidor
async function initServer() {
  try{
      await sequelize.authenticate();
      console.log('Conexiòn con la DB correcta!')
      app.listen(process.env.PORT, function (){
          console.log(`Sistema iniciado en  http://${process.env.HOST}:${process.env.PORT}`)
      })
  } catch (err) {
      console.log(err)
      console.log('No se pudo conectar con la DB')
  }
}

initServer()