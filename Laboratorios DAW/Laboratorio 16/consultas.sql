-- Consultas básicas en SQL

-- Consulta de un tabla completa
select * from materiales

-- Selección
select * from materiales
where clave=1000

-- Proyección
select clave,rfc,fecha from entregan

-- Reunión Natural
select * from materiales,entregan
where materiales.clave = entregan.clave
-- Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta? No

-- Reunión con criterio específico
select * from entregan,proyectos
where entregan.numero <= proyectos.numero

-- Unión (se ilustra junto con selección)
(select * from entregan where clave=1450)
union
(select * from entregan where clave=1300)
-- ¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo.
select * from entregan
where clave=1450 or clave=1300

-- Intersección (se ilustra junto con selección y proyección)
-- Nota: Debido a que en SQL server no tiene definida alguna palabra reservada que nos permita hacer esto de una manera entendible, veremos esta sección en el siguiente laboratorio con el uso de Subconsultas. Un ejemplo de un DBMS que si tiene la implementación de una palabra reservada para esta función es Oracle, en él si se podría generar la consulta con una sintaxis como la siguiente:
(select clave from entregan where numero=5001)
intersect
(select clave from entregan where numero=5018)

-- Diferencia (se ilustra con selección )
(select * from entregan)
minus
(select * from entregan where clave=1000)
-- Nuevamente, "minus" es una palabra reservada que no está definida en SQL Server, define una consulta que regrese el mismo resultado.

-- Producto cartesiano
SQL
select * from entregan,materiales
-- ¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales?
-- Se muestra cada entrega con cada material que su id coincida.


--Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000.
SQL
select descripcion from materiales,entregan
where materiales.clave = entregan.clave and entregan.fecha between '01-01-2000' and '31-12-2000'

