const express = require('express');

const router = express.Router();
path = require('path')

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

router.get('/', (request, response, next) => {
    // response.sendFile(path.join(__dirname, '..', 'views', 'autos.html'));
    response.render('autos', { nuevosCarros: nuevosCarros });
});


router.get('/comprar', (request, response, next) => {
    response.render('nuevoCarro', { nuevosCarros: nuevosCarros });
});
router.post('/comprar', (request, response, next) => {
    console.log(request.body);
    nuevosCarros.push(
        {
            nombre: request.body.nombre,
            desc: 'El nuevo ' + request.body.nombre + ' que se acaba de vender',
            imagen: 'https://c0.klipartz.com/pngpicture/831/609/gratis-png-caricatura-coche.png'
        });
    // response.send('Gracias por comprar el más nuevo ' + request.body.nombre + '!!!');
    response.render('gracias', { nuevosCarros: nuevosCarros });

});


module.exports = router;