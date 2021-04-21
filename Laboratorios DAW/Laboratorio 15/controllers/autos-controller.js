
const Mascota = require('../models/autos-modelo.js');
const Auto = require('../models/autos-modelo.js');

exports.get = (request, response, next) => {
    response.render('autos', { nuevosCarros: Auto.fetchAll() });
};

exports.getNuevoAuto = (request, response, next) => {
    response.render('nuevoCarro');
};

exports.postNuevoAuto = (request, response, next) => {
    console.log(request.body);
    const auto = new Auto(request.body.nombre, request.body.descripcion, 'https://c0.klipartz.com/pngpicture/831/609/gratis-png-caricatura-coche.png');
    auto.save();
    response.render('gracias');
}