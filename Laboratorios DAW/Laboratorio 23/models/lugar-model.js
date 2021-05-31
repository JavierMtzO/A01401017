const db = require('../util/database');

module.exports = class Lugar {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(lugarAccidente) {
        this.lugarAccidente = lugarAccidente;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO lugares (lugarAccidente) VALUES (?)',
            [this.lugarAccidente]
        );
    }

    //Este  método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM lugares');
    }

}