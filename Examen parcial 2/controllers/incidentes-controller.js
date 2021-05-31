
const Incidente = require('../models/incidentes-model.js');
const Tipo = require('../models/tipo-model.js');
const Lugar = require('../models/lugar-model.js');

exports.get = (request, response, next) => {
    Incidente.fetchAll()
        .then(([rows, fieldData]) => {
            console
            response.render('index', {
                nuevoIncidente: rows
            });
        })
        .catch(err => console.log(err));
};

exports.getIncidente = (request, response, next) => {
    Tipo.fetchAll()
        .then(([rowsTipo, fieldData]) => {
            Lugar.fetchAll()
                .then(([rowsLugar, fieldData]) => {
                    response.render('incidente', {
                        nuevoTipo: rowsTipo,
                        nuevoLugar: rowsLugar
                    });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    console.log(request.body);
};

exports.postIncidente = (request, response, next) => {
    const incidente = new Incidente(request.body.tipo, request.body.lugar);
    incidente.save()
        .then(() => {
            response.redirect('/');
        })
        .catch(err => console.log(err));

};