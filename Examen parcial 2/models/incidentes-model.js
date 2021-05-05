const db = require('../util/database');

module.exports = class Incidente {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(tipo, lugar, fecha) {
        this.tipo = tipo;
        this.lugar = lugar;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO incidentes (tipo, lugar) VALUES (?, ?)',
            [this.tipo, this.lugar]
        );
    }

    //Este  método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM incidentes');
    }

}