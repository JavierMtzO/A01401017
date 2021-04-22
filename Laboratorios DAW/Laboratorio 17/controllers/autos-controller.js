
const Auto = require('../models/autos-modelo.js');

exports.get = (request, response, next) => {
    response.setHeader('Set-Cookie', 'autos = Ya vi que te gustan los autos; HttpOnly');
    console.log(request.cookies.autos);

    response.render('autos', {
        nuevosCarros: Auto.fetchAll(),
        ultimaCompra: request.session.ultimaCompra === undefined ? 'No ha habido compras recientes' : request.session.ultimaCompra
    });
};

exports.getNuevoAuto = (request, response, next) => {
    response.render('nuevoCarro');
};

exports.postNuevoAuto = (request, response, next) => {
    console.log(request.body);
    const auto = new Auto(request.body.nombre, request.body.descripcion, 'https://c0.klipartz.com/pngpicture/831/609/gratis-png-caricatura-coche.png');

    request.session.ultimaCompra = request.body.nombre;

    auto.save();
    response.render('gracias');
}