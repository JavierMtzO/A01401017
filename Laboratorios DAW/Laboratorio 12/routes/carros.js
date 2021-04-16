const express = require('express');

const router = express.Router();

const nuevosCarros = [
    { nombre: 'Honda', imagen: 'https://global.honda/content/dam/site/global/top-page/cq_img/top_menu_automobiles.jpg' },
    { nombre: 'Audi', imagen: 'https://st.motortrend.com/uploads/sites/5/2020/04/2021-Audi-A3-Sedan-front-three-quarter-2.gif' },
    { nombre: 'Toyota', imagen: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/camry/1JJ/1.png?bg=fff&fm=webp&w=930' },
    { nombre: 'Mazda', imagen: 'https://www.autosymoda.mx/wp-content/uploads/2020/07/Mazda-3.jpg' },
    { nombre: 'Kia', imagen: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-sorento-mq4-hev-my21-520x260.png' }
];

router.get('/comprar', (request, response, next) => {
    response.send('<form action="comprar" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="comprar"></form>');
});
router.post('/comprar', (request, response, next) => {
    console.log(request.body);
    response.send('Gracias por comprar el más nuevo ' + request.body.nombre + '!!!');
});
router.get('/Honda', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + nuevosCarros[0].nombre + '</title></head><body>');
    response.write('<h1>' + nuevosCarros[0].nombre + '</h1>');
    response.write('<img alt="Imagen de Honda Civic" src="' + nuevosCarros[0].imagen + '">');
    response.write('</body></html>');
    response.end();
});
router.get('/Audi', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + nuevosCarros[1].nombre + '</title></head><body>');
    response.write('<h1>' + nuevosCarros[1].nombre + '</h1>');
    response.write('<img alt="Imagen de Audi A3 2021" src="' + nuevosCarros[1].imagen + '">');
    response.write('</body></html>');
    response.end();
});
router.get('/Toyota', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + nuevosCarros[2].nombre + '</title></head><body>');
    response.write('<h1>' + nuevosCarros[2].nombre + '</h1>');
    response.write('<img alt="Imagen de Toyota Camry" src="' + nuevosCarros[2].imagen + '">');
    response.write('</body></html>');
    response.end();
});
router.get('/Mazda', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + nuevosCarros[3].nombre + '</title></head><body>');
    response.write('<h1>' + nuevosCarros[3].nombre + '</h1>');
    response.write('<img alt="Imagen de Toyota Camry" src="' + nuevosCarros[3].imagen + '">');
    response.write('</body></html>');
    response.end();
});
router.get('/Kia', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + nuevosCarros[4].nombre + '</title></head><body>');
    response.write('<h1>' + nuevosCarros[4].nombre + '</h1>');
    response.write('<img alt="Imagen de Toyota Camry" src="' + nuevosCarros[4].imagen + '">');
    response.write('</body></html>');
    response.end();
});

module.exports = router;