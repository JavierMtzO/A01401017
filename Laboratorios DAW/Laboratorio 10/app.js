const carros = [
    { nombre: 'Honda', imagen: 'https://global.honda/content/dam/site/global/top-page/cq_img/top_menu_automobiles.jpg' },
    { nombre: 'Audi', imagen: 'https://st.motortrend.com/uploads/sites/5/2020/04/2021-Audi-A3-Sedan-front-three-quarter-2.gif' },
    { nombre: 'Toyota', imagen: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/camry/1JJ/1.png?bg=fff&fm=webp&w=930' }
];
const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>');
        response.write('Laboratorio 10')
        response.write('<ul>');
        for (let carro of carros) {
            response.write('<li><a href="/' + carro.nombre + '">' + carro.nombre + '</a></li>');
        }
        response.write('</ul>');
        response.write('<ul><li><a href="/carros/comprar">Comprar carro </a></li></ul>');
        response.write('</body></html>');
        response.end();
    } else if (request.url === '/Honda') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + carros[0].nombre + '</title></head><body>');
        response.write('<h1>' + carros[0].nombre + '</h1>');
        response.write('<img alt="Imagen de Honda Civic" src="' + carros[0].imagen + '">');
        response.write('</body></html>');
        response.end();
    } else if (request.url === '/Audi') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + carros[1].nombre + '</title></head><body>');
        response.write('<h1>' + carros[1].nombre + '</h1>');
        response.write('<img alt="Imagen de Audi A3 2021" src="' + carros[1].imagen + '">');
        response.write('</body></html>');
        response.end();
    } else if (request.url === '/Toyota') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + carros[2].nombre + '</title></head><body>');
        response.write('<h1>' + carros[2].nombre + '</h1>');
        response.write('<img alt="Imagen de Toyota Camry" src="' + carros[2].imagen + '">');
        response.write('</body></html>');
        response.end();
    } else if (request.url === '/comprar' && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Adopta un perro</title></head><body>');
        response.write('<h1>Comprar un carro</h1>');
        response.write('<form action="/comprar" method="POST">');
        response.write('Nombre: <input type="text" name="nombre"><br>');
        response.write('Imagen: <input type="text" name="imagen"><br>');
        response.write('<input type="submit" name="enviar" value="Comprar"><br>');
        response.write('</form>');
        response.write('</body></html>');
        response.end();
    } else if (request.url === '/comprar' && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nombre_carro = datos_completos.split('=')[1].split('&')[0];
            const imagen_carro = datos_completos.split('=')[2].split('&')[0];
            carros.push({ nombre: nombre_carro, imagen: imagen_carro });
            console.log(carros);
            response.setHeader('Content-Type', 'text/html');
            response.write('<html>');
            response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title></title></head><body>');
            response.write('<h1> Enviamos la forma </h1>');
            response.write('<p>' + nombre_carro + '</p>');
            response.write('</body></html>');
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title></title></head><body>');
        response.write('<h1> Página no encontrada </h1>');
        response.write('</body></html>');
        response.end();
    }
});
server.listen(3000);

