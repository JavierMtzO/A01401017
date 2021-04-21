const nuevosCarros = [
    {
        nombre: 'Honda',
        desc: 'El Civic 2021 ya está aquí',
        imagen: 'https://global.honda/content/dam/site/global/top-page/cq_img/top_menu_automobiles.jpg'
    },
    {
        nombre: 'Audi',
        desc: 'El Audi A3 2021 ya está aquí',
        imagen: 'https://st.motortrend.com/uploads/sites/5/2020/04/2021-Audi-A3-Sedan-front-three-quarter-2.gif'
    },
    {
        nombre: 'Toyota',
        desc: 'El Camry 2021 ya está aquí',
        imagen: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/camry/1JJ/1.png?bg=fff&fm=webp&w=930'
    },
    {
        nombre: 'Mazda',
        desc: 'El Mazda 2021 ya está aquí',
        imagen: 'https://www.autosymoda.mx/wp-content/uploads/2020/07/Mazda-3.jpg'
    },
    {
        nombre: 'Kia',
        desc: 'La nueva camioneta Kia 2021 ya está aquí',
        imagen: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-sorento-mq4-hev-my21-520x260.png'
    }
];

module.exports = class Auto {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, desc, imagen) {
        this.nombre = nombre;
        this.desc = desc;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        nuevosCarros.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return nuevosCarros;
    }

}