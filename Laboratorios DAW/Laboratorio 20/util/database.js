const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Laboratorio-18'
});

module.exports = pool.promise();

/*
Codigo base de datos Laboratorio 18

CREATE TABLE `autos` (
  `nombre` varchar(30) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `autos` (`nombre`,`descripcion`,`imagen`) VALUES
('Honda', 'El Civic 2021 ya está aquí', 'https://global.honda/content/dam/site/global/top-page/cq_img/top_menu_automobiles.jpg'),
('Audi', 'El Audi A3 2021 ya está aquí', 'https://st.motortrend.com/uploads/sites/5/2020/04/2021-Audi-A3-Sedan-front-three-quarter-2.gif'),
( 'Toyota', 'El Camry 2021 ya está aquí', 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/camry/1JJ/1.png?bg=fff&fm=webp&w=930'),
('Mazda', 'El Mazda 2021 ya está aquí', 'https://www.autosymoda.mx/wp-content/uploads/2020/07/Mazda-3.jpg'),
('Kia', 'La nueva camioneta Kia 2021 ya está aquí', 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-sorento-mq4-hev-my21-520x260.png');
*/