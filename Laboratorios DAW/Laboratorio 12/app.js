console.log("Hola mundo");

const express = require('express');
const app = express();

const rutasCarros = require('./routes/carros');


const bodyParser = require('body-parser');
const router = express.Router();

const nuevosCarros = [
    { nombre: 'Honda', imagen: 'https://global.honda/content/dam/site/global/top-page/cq_img/top_menu_automobiles.jpg' },
    { nombre: 'Audi', imagen: 'https://st.motortrend.com/uploads/sites/5/2020/04/2021-Audi-A3-Sedan-front-three-quarter-2.gif' },
    { nombre: 'Toyota', imagen: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/camry/1JJ/1.png?bg=fff&fm=webp&w=930' },
    { nombre: 'Mazda', imagen: 'https://www.autosymoda.mx/wp-content/uploads/2020/07/Mazda-3.jpg' },
    { nombre: 'Kia', imagen: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-sorento-mq4-hev-my21-520x260.png' }
];

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/carros', rutasCarros);

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>');
    response.write('Laboratorio 12')
    response.write('<ul>');
    for (let carro of nuevosCarros) {
        response.write('<li><a href="/carros/' + carro.nombre + '">' + carro.nombre + '</a></li>');
    }
    response.write('</ul>');
    response.write('<ul><li><a href="/carros/comprar">Comprar carro </a></li></ul>');
    response.write('</body></html>');
    response.end();
});

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('Lo sentimos, página no encontrada');
});


app.listen(3000);