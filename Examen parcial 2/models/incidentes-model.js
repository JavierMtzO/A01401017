const db = require('../util/database');

module.exports = class Incidente {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(tipo, lugar) {
        this.tipo = tipo;
        this.lugar = lugar;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO incidentes (idTipo, idLugar) VALUES (?, ?)',
            [this.tipo, this.lugar]
        );
    }

    //Este  método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM incidentes i, tipos t, lugares l WHERE i.idTipo = t.idTipo AND i.idLugar = l.idLugar');
    }

}