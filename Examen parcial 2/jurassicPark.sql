CREATE TABLE `tipos` (
    `idTipo` int(11) primary key NOT NULL AUTO_INCREMENT,
    `tipoAccidente` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `tipos`
  ADD PRIMARY KEY (`idTipo`);

CREATE TABLE `lugares` (
    `idLugar` int(11) primary key NOT NULL AUTO_INCREMENT,
    `lugarAccidente` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idLugar`);

ALTER TABLE `tipos` AUTO_INCREMENT=1000;
ALTER TABLE `lugar` AUTO_INCREMENT=2000;


CREATE TABLE `incidentes` (
    `idIncidente` int(11) primary key NOT NULL AUTO_INCREMENT ,
    `tipo` varchar(100) DEFAULT NULL,
    `lugar` varchar(100) DEFAULT NULL,
    `fecha` timestamp DEFAULT CURRENT_TIME,
    FOREIGN KEY (idTipo) REFERENCES tipos(idTipo),
    FOREIGN KEY (idLugar) REFERENCES lugares(idLugar)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `incidentes` ( 
    `idIncidente` INT(11) primary key NOT NULL AUTO_INCREMENT , 
    `tipo` VARCHAR(100) NOT NULL , 
    `lugar` VARCHAR(100) NOT NULL , 
    `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `incidentes` (`tipo`, `lugar`) VALUES
('Fuga de herbívoro','Centro turístico'),
('Robo de ADN','Laboratorios'),
('Falla eléctrica','Restaurante'),
('Falla eléctrica','Centro operativo');