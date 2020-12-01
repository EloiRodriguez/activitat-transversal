-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2020 a las 10:01:51
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_cursa`
--
CREATE DATABASE IF NOT EXISTS `bd_cursa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_cursa`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_categoria`
--

CREATE TABLE `tbl_categoria` (
  `id_cat` int(10) NOT NULL,
  `nom_cat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `tbl_categoria`:
--

--
-- Truncar tablas antes de insertar `tbl_categoria`
--

TRUNCATE TABLE `tbl_categoria`;
--
-- Volcado de datos para la tabla `tbl_categoria`
--

INSERT INTO `tbl_categoria` VALUES(1, 'Juvenil: Masculina');
INSERT INTO `tbl_categoria` VALUES(2, 'Juvenil: Femenina');
INSERT INTO `tbl_categoria` VALUES(3, 'Júnior: Masculina');
INSERT INTO `tbl_categoria` VALUES(4, 'Júnior: Femenina');
INSERT INTO `tbl_categoria` VALUES(5, 'Elite: Masculina');
INSERT INTO `tbl_categoria` VALUES(6, 'Elite: Femenina');
INSERT INTO `tbl_categoria` VALUES(7, 'Veterano: Masculina');
INSERT INTO `tbl_categoria` VALUES(8, 'Veterano: Femenina');
INSERT INTO `tbl_categoria` VALUES(9, 'Senior: Masculina');
INSERT INTO `tbl_categoria` VALUES(10, 'Senior: Femenina');
INSERT INTO `tbl_categoria` VALUES(11, 'Discapacidad: Masculino');
INSERT INTO `tbl_categoria` VALUES(12, 'Discapacidad: Femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cursa`
--

CREATE TABLE `tbl_cursa` (
  `id_cursa` int(10) NOT NULL,
  `data_cursa` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `tbl_cursa`:
--

--
-- Truncar tablas antes de insertar `tbl_cursa`
--

TRUNCATE TABLE `tbl_cursa`;
--
-- Volcado de datos para la tabla `tbl_cursa`
--

INSERT INTO `tbl_cursa` VALUES(1, '2020-11-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_inscripcio`
--

CREATE TABLE `tbl_inscripcio` (
  `id_dorsal` int(10) NOT NULL,
  `id_cursa` int(10) NOT NULL,
  `id_part` int(10) NOT NULL,
  `pagat` enum('Pagado','Pendiente') NOT NULL,
  `id_cat` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `tbl_inscripcio`:
--   `id_cat`
--       `tbl_categoria` -> `id_cat`
--   `id_cursa`
--       `tbl_cursa` -> `id_cursa`
--   `id_part`
--       `tbl_participante` -> `id_part`
--

--
-- Truncar tablas antes de insertar `tbl_inscripcio`
--

TRUNCATE TABLE `tbl_inscripcio`;
--
-- Volcado de datos para la tabla `tbl_inscripcio`
--

INSERT INTO `tbl_inscripcio` VALUES(1, 1, 1, 'Pagado', 5);
INSERT INTO `tbl_inscripcio` VALUES(2, 1, 2, 'Pagado', 4);
INSERT INTO `tbl_inscripcio` VALUES(3, 1, 3, 'Pagado', 5);
INSERT INTO `tbl_inscripcio` VALUES(4, 1, 4, 'Pagado', 3);
INSERT INTO `tbl_inscripcio` VALUES(5, 1, 5, 'Pagado', 7);
INSERT INTO `tbl_inscripcio` VALUES(6, 1, 6, 'Pagado', 7);
INSERT INTO `tbl_inscripcio` VALUES(7, 1, 7, 'Pagado', 7);
INSERT INTO `tbl_inscripcio` VALUES(8, 1, 8, 'Pagado', NULL);
INSERT INTO `tbl_inscripcio` VALUES(9, 1, 9, 'Pagado', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_participante`
--

CREATE TABLE `tbl_participante` (
  `id_part` int(10) NOT NULL,
  `nom_part` varchar(50) NOT NULL,
  `primer_cognom` varchar(50) NOT NULL,
  `segon_cognom` varchar(50) NOT NULL,
  `DNI_part` varchar(9) NOT NULL,
  `data_naix_part` date DEFAULT NULL,
  `sexe` enum('Masculino','Femenino') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `tbl_participante`:
--

--
-- Truncar tablas antes de insertar `tbl_participante`
--

TRUNCATE TABLE `tbl_participante`;
--
-- Volcado de datos para la tabla `tbl_participante`
--

INSERT INTO `tbl_participante` VALUES(1, 'Eloi', 'Rodriguez', 'Ordoñez', '65361734K', '1999-10-27', 'Masculino');
INSERT INTO `tbl_participante` VALUES(2, 'Eloi', 'Rodriguez', 'Ordoñez', '65361734K', '2010-11-17', 'Femenino');
INSERT INTO `tbl_participante` VALUES(3, 'Eloi', 'Rodriguez', 'Ordoñez', '65361734B', '1999-10-27', 'Masculino');
INSERT INTO `tbl_participante` VALUES(4, 'Eloi', 'Rodriguez', 'Ordoñez', '65361734k', '1999-10-27', 'Masculino');
INSERT INTO `tbl_participante` VALUES(5, 'Dani', 'Larrea', 'ASDFGHJ', '65361734B', '1991-06-15', 'Masculino');
INSERT INTO `tbl_participante` VALUES(6, 'Eloi', 'Rodriguez', 'Ordoñez', '65361734N', '1999-10-27', 'Masculino');
INSERT INTO `tbl_participante` VALUES(7, '', 'Rodriguez', 'Ordoñez', '65361734K', '1999-10-27', 'Masculino');
INSERT INTO `tbl_participante` VALUES(8, 'Eloi', 'Rodriguez', 'Ordoñez', '65361734N', '1999-10-27', 'Masculino');
INSERT INTO `tbl_participante` VALUES(9, 'Eloi', 'Rodriguez', 'Ordoñez', '65361734N', '1999-10-30', 'Masculino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuario`
--

CREATE TABLE `tbl_usuario` (
  `id_usu` int(10) NOT NULL,
  `email_usu` varchar(50) NOT NULL,
  `pwd_usu` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `tbl_usuario`:
--

--
-- Truncar tablas antes de insertar `tbl_usuario`
--

TRUNCATE TABLE `tbl_usuario`;
--
-- Volcado de datos para la tabla `tbl_usuario`
--

INSERT INTO `tbl_usuario` VALUES(1, 'administrador@admin.com', ' 827ccb0eea8a706c4c34a16891f84e7b');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  ADD PRIMARY KEY (`id_cat`);

--
-- Indices de la tabla `tbl_cursa`
--
ALTER TABLE `tbl_cursa`
  ADD PRIMARY KEY (`id_cursa`);

--
-- Indices de la tabla `tbl_inscripcio`
--
ALTER TABLE `tbl_inscripcio`
  ADD PRIMARY KEY (`id_dorsal`),
  ADD KEY `FK_inscripcio_cursa` (`id_cursa`),
  ADD KEY `FK_inscripcio_participante` (`id_part`),
  ADD KEY `FK_inscripcio_categoria` (`id_cat`);

--
-- Indices de la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  ADD PRIMARY KEY (`id_part`);

--
-- Indices de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD PRIMARY KEY (`id_usu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  MODIFY `id_cat` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tbl_cursa`
--
ALTER TABLE `tbl_cursa`
  MODIFY `id_cursa` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbl_inscripcio`
--
ALTER TABLE `tbl_inscripcio`
  MODIFY `id_dorsal` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  MODIFY `id_part` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  MODIFY `id_usu` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_inscripcio`
--
ALTER TABLE `tbl_inscripcio`
  ADD CONSTRAINT `FK_inscripcio_categoria` FOREIGN KEY (`id_cat`) REFERENCES `tbl_categoria` (`id_cat`),
  ADD CONSTRAINT `FK_inscripcio_cursa` FOREIGN KEY (`id_cursa`) REFERENCES `tbl_cursa` (`id_cursa`),
  ADD CONSTRAINT `FK_inscripcio_participante` FOREIGN KEY (`id_part`) REFERENCES `tbl_participante` (`id_part`);


--
-- Metadatos
--
USE `phpmyadmin`;

--
-- Metadatos para la tabla tbl_categoria
--

--
-- Truncar tablas antes de insertar `pma__column_info`
--

TRUNCATE TABLE `pma__column_info`;
--
-- Truncar tablas antes de insertar `pma__table_uiprefs`
--

TRUNCATE TABLE `pma__table_uiprefs`;
--
-- Truncar tablas antes de insertar `pma__tracking`
--

TRUNCATE TABLE `pma__tracking`;
--
-- Metadatos para la tabla tbl_cursa
--

--
-- Truncar tablas antes de insertar `pma__column_info`
--

TRUNCATE TABLE `pma__column_info`;
--
-- Truncar tablas antes de insertar `pma__table_uiprefs`
--

TRUNCATE TABLE `pma__table_uiprefs`;
--
-- Truncar tablas antes de insertar `pma__tracking`
--

TRUNCATE TABLE `pma__tracking`;
--
-- Metadatos para la tabla tbl_inscripcio
--

--
-- Truncar tablas antes de insertar `pma__column_info`
--

TRUNCATE TABLE `pma__column_info`;
--
-- Truncar tablas antes de insertar `pma__table_uiprefs`
--

TRUNCATE TABLE `pma__table_uiprefs`;
--
-- Truncar tablas antes de insertar `pma__tracking`
--

TRUNCATE TABLE `pma__tracking`;
--
-- Metadatos para la tabla tbl_participante
--

--
-- Truncar tablas antes de insertar `pma__column_info`
--

TRUNCATE TABLE `pma__column_info`;
--
-- Truncar tablas antes de insertar `pma__table_uiprefs`
--

TRUNCATE TABLE `pma__table_uiprefs`;
--
-- Truncar tablas antes de insertar `pma__tracking`
--

TRUNCATE TABLE `pma__tracking`;
--
-- Metadatos para la tabla tbl_usuario
--

--
-- Truncar tablas antes de insertar `pma__column_info`
--

TRUNCATE TABLE `pma__column_info`;
--
-- Truncar tablas antes de insertar `pma__table_uiprefs`
--

TRUNCATE TABLE `pma__table_uiprefs`;
--
-- Truncar tablas antes de insertar `pma__tracking`
--

TRUNCATE TABLE `pma__tracking`;
--
-- Metadatos para la base de datos bd_cursa
--

--
-- Truncar tablas antes de insertar `pma__bookmark`
--

TRUNCATE TABLE `pma__bookmark`;
--
-- Truncar tablas antes de insertar `pma__relation`
--

TRUNCATE TABLE `pma__relation`;
--
-- Truncar tablas antes de insertar `pma__savedsearches`
--

TRUNCATE TABLE `pma__savedsearches`;
--
-- Truncar tablas antes de insertar `pma__central_columns`
--

TRUNCATE TABLE `pma__central_columns`;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
