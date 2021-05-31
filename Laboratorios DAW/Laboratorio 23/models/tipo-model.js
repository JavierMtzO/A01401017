
const db = require('../util/database');

module.exports = class Tipo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(tipoAccidente) {
        this.tipoAccidente = tipoAccidente;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO tipos (tipoAccidente) VALUES (?)',
            [this.tipoAccidente]
        );
    }

    //Este  método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM tipos');
    }

}