-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2020 at 03:58 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cheradfinance`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `date_payment` date NOT NULL,
  `numero_recu` int(11) NOT NULL,
  `id_eleve` varchar(10) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `post_nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `montant` int(11) NOT NULL,
  `devise` varchar(5) NOT NULL,
  `taux` int(11) NOT NULL,
  `motif` varchar(15) NOT NULL,
  `motif_name` varchar(15) NOT NULL,
  `signature` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `date_payment`, `numero_recu`, `id_eleve`, `nom`, `post_nom`, `prenom`, `montant`, `devise`, `taux`, `motif`, `motif_name`, `signature`) VALUES
(11, '2020-06-12', 1, 'id000001', 'kasongo', 'ilunga', 'alice', 20000, 'CDF', 1, 'inscription', '', 'idS001'),
(12, '2020-06-12', 2, 'id000002', 'umba', 'muyombi', 'alice', 50, 'USD', 1900, 'inscription', '', 'idS001'),
(13, '2020-06-12', 3, 'id000002', 'Umba', 'Muyombi', 'Andrick', 10000, 'CDF', 1, 'minerval', '', 'idS001');

-- --------------------------------------------------------

--
-- Table structure for table `carnet_de_bon`
--

CREATE TABLE `carnet_de_bon` (
  `id_bon` int(11) NOT NULL,
  `libelle` text DEFAULT NULL,
  `id_ben` char(50) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `postnom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `montant` int(11) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `date_heure` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sign_ac` varchar(50) DEFAULT NULL,
  `sign_ca` varchar(50) DEFAULT NULL,
  `sign_au` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carnet_de_bon`
--

INSERT INTO `carnet_de_bon` (`id_bon`, `libelle`, `id_ben`, `nom`, `postnom`, `prenom`, `montant`, `type`, `date_heure`, `sign_ac`, `sign_ca`, `sign_au`) VALUES
(1, 'achat papier', 'zxp12', 'kalala', 'ilunga', 'joshua', 12000, 'sortie', '2020-06-12 01:41:01', 'CDF', NULL, 'dg'),
(2, 'payment atelier', 'zxp12', 'mwamba', 'ntinta', 'albert', 500000, 'entree', '2020-06-12 22:50:02', 'CDF', NULL, 'cs amini');

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `classe` varchar(15) NOT NULL,
  `section` varchar(10) NOT NULL,
  `sous_classe` varchar(2) NOT NULL,
  `reference` varchar(15) NOT NULL,
  `inscription` int(11) NOT NULL DEFAULT 0,
  `m1` int(11) NOT NULL DEFAULT 0,
  `m2` int(11) NOT NULL,
  `m3` int(11) NOT NULL,
  `m4` int(11) NOT NULL,
  `m5` int(11) NOT NULL,
  `m6` int(11) NOT NULL,
  `m7` int(11) NOT NULL,
  `m8` int(11) NOT NULL,
  `m9` int(11) NOT NULL,
  `m10` int(11) NOT NULL,
  `f01` int(11) DEFAULT 0,
  `f02` int(11) DEFAULT 0,
  `f03` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id`, `classe`, `section`, `sous_classe`, `reference`, `inscription`, `m1`, `m2`, `m3`, `m4`, `m5`, `m6`, `m7`, `m8`, `m9`, `m10`, `f01`, `f02`, `f03`) VALUES
(1, '3', 'MG', '-', '3 MG -', 20000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `fees`
--

CREATE TABLE `fees` (
  `id` int(11) NOT NULL,
  `title` varchar(15) NOT NULL,
  `reference` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fees`
--

INSERT INTO `fees` (`id`, `title`, `reference`) VALUES
(1, 'frais de l\'etat', 'f01'),
(2, 'exetat', 'f02'),
(3, 'sortie', 'f03');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `id_eleve` varchar(10) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `post_nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `classe` varchar(10) NOT NULL,
  `minerval` int(11) DEFAULT NULL,
  `f01` int(11) DEFAULT 0,
  `f02` int(11) DEFAULT 0,
  `f03` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `id_eleve`, `nom`, `post_nom`, `prenom`, `classe`, `minerval`, `f01`, `f02`, `f03`) VALUES
(8, 'id000001', 'kasongo', 'ilunga', 'alice', '3 MG -', 20000, 0, 0, 0),
(9, 'id000002', 'Umba', 'Muyombi', 'Andrick', '3 MG -', 105000, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `nom_section` varchar(15) NOT NULL,
  `reference` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`id`, `nom_section`, `reference`) VALUES
(1, 'electricite', 'ELEC'),
(2, 'electronique', 'EQ'),
(3, 'mecanique gener', 'MG');

-- --------------------------------------------------------

--
-- Table structure for table `taux`
--

CREATE TABLE `taux` (
  `id` int(11) NOT NULL,
  `date_` date NOT NULL,
  `taux` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `taux`
--

INSERT INTO `taux` (`id`, `date_`, `taux`) VALUES
(1, '2020-06-10', 1900);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_us` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `identifiant` varchar(50) DEFAULT NULL,
  `mot_de_passe` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_us`, `nom`, `prenom`, `identifiant`, `mot_de_passe`) VALUES
(1, 'ilunga', 'ariel', 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero_recu` (`numero_recu`);

--
-- Indexes for table `carnet_de_bon`
--
ALTER TABLE `carnet_de_bon`
  ADD PRIMARY KEY (`id_bon`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reference` (`reference`);

--
-- Indexes for table `fees`
--
ALTER TABLE `fees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_eleve` (`id_eleve`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `taux`
--
ALTER TABLE `taux`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_us`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `carnet_de_bon`
--
ALTER TABLE `carnet_de_bon`
  MODIFY `id_bon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fees`
--
ALTER TABLE `fees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `taux`
--
ALTER TABLE `taux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_us` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
