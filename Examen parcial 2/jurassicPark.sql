-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 05, 2021 at 03:45 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `examen-parcial2`
--

-- --------------------------------------------------------

--
-- Table structure for table `incidentes`
--

CREATE TABLE `incidentes` (
  `idIncidente` int(11) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `lugar` varchar(100) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `incidentes`
--

INSERT INTO `incidentes` (`idIncidente`, `tipo`, `lugar`, `fecha`) VALUES
(1, 'Fuga de herbívoro', 'Centro turístico', '2021-05-05 14:14:29'),
(2, 'Robo de ADN', 'Laboratorios', '2021-05-05 14:14:29'),
(3, 'Falla eléctrica', 'Restaurante', '2021-05-05 14:14:29'),
(4, 'Falla eléctrica', 'Centro operativo', '2021-05-05 14:14:29'),
(6, 'Fuga de Velociraptors', 'Triceratops', '2021-05-05 15:36:43');

-- --------------------------------------------------------

--
-- Table structure for table `lugares`
--

CREATE TABLE `lugares` (
  `idLugar` int(11) NOT NULL,
  `lugarAccidente` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lugares`
--

INSERT INTO `lugares` (`idLugar`, `lugarAccidente`) VALUES
(2000, 'Centro turístico'),
(2001, 'Laboratorios'),
(2002, 'Restaurante'),
(2003, 'Centro operativo'),
(2004, 'Triceratops'),
(2005, 'Dilofosaurios'),
(2006, 'Velociraptors'),
(2007, 'TRex'),
(2008, 'Planicie de los herbívoros');

-- --------------------------------------------------------

--
-- Table structure for table `tipos`
--

CREATE TABLE `tipos` (
  `idTipo` int(11) NOT NULL,
  `tipoAccidente` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tipos`
--

INSERT INTO `tipos` (`idTipo`, `tipoAccidente`) VALUES
(1000, 'Falla eléctrica'),
(1001, 'Fuga de herbívoro'),
(1002, 'Fuga de Velociraptors'),
(1003, 'Fuga de TRex'),
(1004, 'Robo de ADN'),
(1005, 'Auto descompuesto'),
(1006, 'Visitantes en zona no autorizada');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `incidentes`
--
ALTER TABLE `incidentes`
  ADD PRIMARY KEY (`idIncidente`);

--
-- Indexes for table `lugares`
--
ALTER TABLE `lugares`
  ADD PRIMARY KEY (`idLugar`);

--
-- Indexes for table `tipos`
--
ALTER TABLE `tipos`
  ADD PRIMARY KEY (`idTipo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `incidentes`
--
ALTER TABLE `incidentes`
  MODIFY `idIncidente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `lugares`
--
ALTER TABLE `lugares`
  MODIFY `idLugar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2009;

--
-- AUTO_INCREMENT for table `tipos`
--
ALTER TABLE `tipos`
  MODIFY `idTipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1007;