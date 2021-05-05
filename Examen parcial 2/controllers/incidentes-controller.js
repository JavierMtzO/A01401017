
const Incidente = require('../models/incidentes-model.js');
const Tipo = require('../models/tipo-model.js');
const Lugar = require('../models/lugar-model.js');

exports.get = (request, response, next) => {
    Incidente.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('index', {
                nuevoIncidente: rows
            });
        })
        .catch(err => console.log(err));
};

exports.getIncidente = (request, response, next) => {
    Tipo.fetchAll()
        .then(([rowsTipo, fieldData]) => {
            console.log(rowsTipo);
            Lugar.fetchAll()
                .then(([rowsLugar, fieldData]) => {
                    console.log(rowsTipo);
                    response.render('incidente', {
                        nuevoTipo: rowsTipo,
                        nuevoLugar: rowsLugar
                    });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

exports.postIncidente = (request, response, next) => {
    console.log(request.body);
    const incidente = new Incidente(request.body.tipo, request.body.lugar);
    console.log(incidente);
    incidente.save()
        .then(() => {
            response.redirect('/');
        })
        .catch(err => console.log(err));

};