const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//Crear la conexión a la BD
const db = require('./config/db')

//Importar el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectando al servidor'))
    .catch(error => console.log(error));

//crear una aplicacion de express
const app = express();

//Donde cargar los archivos estáticos
app.use(express.static('public'));

//Habilitar pug
app.set('view engine', 'pug');

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extends: true }));

app.use('/', routes());

app.listen(3000);