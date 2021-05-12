-- ------------------------------------------------Materiales------------------------------------------------


-- Crear Stored Procedure para Registrar un nuevo material
CREATE PROCEDURE `registrarMaterial`
(IN `clave` INT(11), 
IN `descripcion` VARCHAR(48) CHARSET utf8, 
IN `precio` FLOAT, 
IN `impuesto` FLOAT) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER INSERT INTO materiales VALUES 
( clave, 
descripcion, 
precio, 
impuesto )

    -- Ejecución de registrarMaterial
    SET @p0='6060';
    SET @p1='Nuevo Material Prueba';
    SET @p2='500';
    SET @p3='17.3';
    CALL `registrarMaterial`(@p0, @p1, @p2, @p3);


-- Crear Stored Procedure para Modificar un material ya existente

CREATE PROCEDURE `modificarMaterial`
(
    IN `pclave` INT(11), 
    IN `pdescripcion` VARCHAR(48) CHARSET utf8, 
    IN `pprecio` FLOAT, 
    IN `pimpuesto` FLOAT
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
UPDATE materiales 
SET 
descripcion = pdescripcion, 
precio = pprecio, 
impuesto = pimpuesto 
WHERE 
clave = pclave;

    --Ejecución de modificarMaterial
    SET @p0='6060';
    SET @p1='Plástico PET';
    SET @p2='60';
    SET @p3='6.5';
    CALL `modificarMaterial`(@p0, @p1, @p2, @p3);

-- Crear Stored Procedure para Eliminar un material ya existente

CREATE PROCEDURE `eliminarMaterial`
(
    IN `pclave` INT(11)
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
DELETE FROM `materiales`
WHERE 
clave = pclave;

    --Ejecución de eliminarMaterial
    SET @p0='6060';
    CALL `eliminarMaterial`(@p0);


-- ------------------------------------------------Proyectos------------------------------------------------

-- Crear Stored Procedure para Registrar un nuevo proyecto

CREATE PROCEDURE `registrarProyecto`
(IN `numero` INT(11), 
IN `denominacion` VARCHAR(48) CHARSET utf8)
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
INSERT INTO proyectos VALUES 
( numero, 
denominacion )

    -- Ejecución de registrarProyecto
    SET @p0='1010';
    SET @p1='Nuevo Proyecto Prueba';
    CALL `registrarProyecto`(@p0, @p1);

-- Crear Stored Procedure para Modificar un Proyecto ya existente

CREATE PROCEDURE `modificarProyecto`
(
    IN `pnumero` INT(11), 
    IN `pdenominacion` VARCHAR(48) CHARSET utf8
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
UPDATE proyectos 
SET 
denominacion = pdenominacion
WHERE 
numero = pnumero;

    --Ejecución de modificarProyecto
    SET @p0='1010';
    SET @p1='El proyecto de entregas mas grande';
    CALL `modificarMaterial`(@p0, @p1);

-- Crear Stored Procedure para Eliminar un Proyecto ya existente

CREATE PROCEDURE `eliminarProyecto`
(
    IN `pnumero` INT(11)
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
DELETE FROM `proyectos`
WHERE 
numero = pnumero;

    --Ejecución de eliminarMaterial
    SET @p0='1010';
    CALL `eliminarProyecto`(@p0);


-- ------------------------------------------------Entregan------------------------------------------------

-- Crear Stored Procedure para Registrar una Entrega

CREATE PROCEDURE `registrarEntrega`
(
    IN `clave` INT(11), 
    IN `rfc` VARCHAR(15) CHARSET utf8, 
    IN `numero` INT(11), 
    IN `fecha` DATE, 
    IN `cantidad` INT(11)
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
INSERT INTO entregan VALUES 
( 
    clave, 
    rfc, 
    numero, 
    fecha, 
    cantidad 
)


-- Crear Stored Procedure para Modificar una Entrega ya existente

CREATE PROCEDURE `modificarEntrega`
(
    IN `pclave` INT(11), 
    IN `prfc` VARCHAR(15) CHARSET utf8, 
    IN `pnumero` INT(11), 
    IN `pfecha` DATE, 
    IN `pcantidad` INT(11)
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
UPDATE entregan 
SET 
cantidad = pcantidad
WHERE 
clave = pclave AND rfc = prfc AND numero = pnumero AND fecha = pfecha;

-- Crear Stored Procedure para Eliminar una Entrega ya existente

CREATE PROCEDURE `eliminarEntrega`
(
    IN `pclave` INT(11), 
    IN `prfc` VARCHAR(15) CHARSET utf8, 
    IN `pnumero` INT(11), 
    IN `pfecha` DATE
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
DELETE FROM `entregan`
WHERE 
clave = pclave AND rfc = prfc AND numero = pnumero AND fecha = pfecha;


-- ------------------------------------------------Proveedores------------------------------------------------


-- Crear Stored Procedure para Registrar un nuevo proveedor

CREATE PROCEDURE `registrarProveedor`
(
    IN `rfc` VARCHAR(15) CHARSET utf8, 
    IN `razonsocial` VARCHAR(40) CHARSET utf8
)
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
INSERT INTO proveedores VALUES 
( 
    rfc, 
    razonsocial 
)


-- Crear Stored Procedure para Modificar un Proveedor ya existente

CREATE PROCEDURE `modificarProveedor`
(
    IN `prfc` VARCHAR(15) CHARSET utf8, 
    IN `prazonsocial` VARCHAR(40) CHARSET utf8
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
UPDATE proveedores 
SET 
razonsocial = prazonsocial
WHERE 
rfc = prfc;

-- Crear Stored Procedure para Eliminar un Proveedor ya existente

CREATE PROCEDURE `eliminarProveedor`
(
    IN `prfc` VARCHAR(15) CHARSET utf8
) 
NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER 
DELETE FROM `proveedores`
WHERE 
rfc = prfc;