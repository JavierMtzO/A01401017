console.log("Hola mundo");

const express = require('express');
const app = express();

const rutasCarros = require('./routes/carros');


const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/carros', rutasCarros);
app.use('/', rutasCarros);

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('Lo sentimos, página no encontrada');
});


app.listen(3000);