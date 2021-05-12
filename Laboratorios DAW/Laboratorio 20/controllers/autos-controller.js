
const Auto = require('../models/autos-modelo.js');

exports.get = (request, response, next) => {
    response.setHeader('Set-Cookie', 'autos = Ya vi que te gustan los autos; HttpOnly');
    console.log(request.cookies.autos);

    Auto.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('autos', {
                nuevosCarros: rows,
                ultimaCompra: request.session.ultimaCompra === undefined ? 'No ha habido compras recientes' : request.session.ultimaCompra
            });
        })
        .catch(err => console.log(err));
};

exports.getNuevoAuto = (request, response, next) => {
    response.render('nuevoCarro');
};

exports.postNuevoAuto = (request, response, next) => {
    console.log(request.body);
    const auto = new Auto(request.body.nombre, request.body.descripcion, 'https://c0.klipartz.com/pngpicture/831/609/gratis-png-caricatura-coche.png');
    console.log(auto);
    auto.save()
        .then(() => {
            request.session.ultimaCompra = request.body.nombre;
            response.render('gracias');
        })
        .catch(err => console.log(err));
}