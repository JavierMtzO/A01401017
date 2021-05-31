

-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.

SELECT SUM(cantidad) as 'Suma de cantidades', ((SUM(cantidad)*SUM(precio))-((SUM(cantidad)*SUM(precio))*(AVG(impuesto)*0.01))) as 'Importe total'
FROM entregan e, materiales m
WHERE e.clave = m.clave
AND fecha BETWEEN '1997-01-01' AND '1997-12-31'

-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

SELECT razonsocial, COUNT(razonsocial) as 'Número de entregas', ((SUM(cantidad)*SUM(precio))-((SUM(cantidad)*SUM(precio))*(AVG(impuesto)*0.01))) as 'Importe total'
FROM entregan e, proveedores p, materiales m
WHERE e.rfc = p.rfc
AND e.clave = m.clave
GROUP BY razonsocial

-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.

SELECT M.Clave, Descripcion, COUNT(M.Clave) as 'Cantidad total entregada', SUM(Cantidad) as 'Cantidad Total entregada', MIN(Cantidad) 'Cantidad Mínima entregada', MAX(Cantidad) 'Cantidad Máxima entregada', SUM(Cantidad) as 'Arriba de 400'
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave
GROUP BY M.Clave

-- ***
-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

SELECT Razonsocial, M.clave, Descripcion, AVG(Cantidad)
FROM Entregan E, Proveedores P, Materiales M
WHERE E.Rfc = P.Rfc 
AND E.Clave = M.clave
GROUP BY Razonsocial, M.clave, Descripcion
HAVING AVG(Cantidad) < 500
ORDER BY Razonsocial


-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.



-- Clave y descripción de los materiales que nunca han sido entregados.

SELECT Clave, Descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT DISTINCT Clave FROM Entregan E)

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

SELECT Razonsocial 
FROM Proveedores
WHERE Rfc IN (
    SELECT DISTINCT P.Rfc
    FROM Entregan E, Proveedores P, Proyectos Po 
    WHERE P.rfc = E.rfc
    AND E.numero = Po.numero
    AND Denominacion = 'Vamos Mexico' 
)
AND Rfc IN (
    SELECT DISTINCT P.Rfc
    FROM Entregan E, Proveedores P, Proyectos Po 
    WHERE P.rfc = E.rfc
    AND E.numero = Po.numero
    AND Denominacion = 'Queretaro Limpio' 
)

-- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

SELECT Descripcion
FROM Materiales
WHERE Descripcion NOT IN 
(
    SELECT Descripcion
    FROM Materiales M, Proyectos P, Entregan E
    WHERE E.numero = P.numero
    AND M.clave = E.clave
    AND Denominacion = 'CIT Yucatan'
)

-- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'DDDD800101'.

SELECT Razonsocial, (SUM(Cantidad) / COUNT(Razonsocial)) AS 'Promedio de cantidad entregada'
FROM Proveedores P, Entregan E 
WHERE P.rfc = E. rfc
GROUP BY Razonsocial
HAVING (SUM(Cantidad) / COUNT(Razonsocial)) > (
    SELECT (SUM(Cantidad) / COUNT(Razonsocial)) AS 'Promedio de cantidad entregada'
    FROM Proveedores P, Entregan E 
    WHERE P.rfc = E. rfc
    AND P.Rfc = 'DDDD800101'
    GROUP BY Razonsocial
    ORDER BY Razonsocial
)
ORDER BY Razonsocial

-- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.

SELECT Razonsocial, Denominacion
FROM Entregan E, Proveedores P, Proyectos Po
WHERE E.rfc = P.rfc 
AND E.numero = Po.numero
AND Denominacion = 'Infonavit Durango'
GROUP BY Razonsocial
ORDER BY Razonsocial



SELECT SUM(Cantidad)
FROM Entregan E, Proveedores P
WHERE E.Rfc = P.Rfc
AND fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY Razonsocial
ORDER BY Razonsocial

SELECT SUM(Cantidad)
FROM Entregan E, Proveedores P
WHERE E.Rfc = P.Rfc
AND fecha BETWEEN '2001-01-01' AND '2001-12-31'
GROUP BY Razonsocial
ORDER BY Razonsocial