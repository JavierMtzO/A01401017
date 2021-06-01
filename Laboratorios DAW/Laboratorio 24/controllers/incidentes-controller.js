
const Incidente = require('../models/incidentes-model.js');
const Tipo = require('../models/tipo-model.js');
const Lugar = require('../models/lugar-model.js');

exports.get = (request, response, next) => {
    Incidente.fetchAll()
        .then(([rows, fieldData]) => {
            Tipo.fetchAll()
                .then(([rowsTipo, fieldData]) => {
                    Lugar.fetchAll()
                        .then(([rowsLugar, fieldData]) => {
                            response.render('index', {
                                nuevoTipo: rowsTipo,
                                nuevoLugar: rowsLugar,
                                nuevoIncidente: rows,
                            });
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

// exports.getIncidente = (request, response, next) => {
//     Tipo.fetchAll()
//         .then(([rowsTipo, fieldData]) => {
//             Lugar.fetchAll()
//                 .then(([rowsLugar, fieldData]) => {
//                     response.render('incidente', {
//                         nuevoTipo: rowsTipo,
//                         nuevoLugar: rowsLugar,
//                     });
//                 })
//                 .catch(err => console.log(err));
//         })
//         .catch(err => console.log(err));
// };

exports.postIncidente = (request, response, next) => {
    const incidente = new Incidente(request.body.tipo, request.body.lugar);
    incidente.save()
        .then(() => {
            response.redirect('/');
        })
        .catch(err => console.log(err));

};

exports.postBorrar = (request, response, next) => {
    Incidente.delete(request.body.idIncidente)
        .then(() => {
            Incidente.fetchAll()
                .then(([rows, fieldData]) => {
                    response.status(200).json({ incidentes: rows });
                })
                .catch(err => console.log(err));
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Internal Server Error" })
        });

};