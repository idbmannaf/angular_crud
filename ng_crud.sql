-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2021 at 04:41 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ng_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `phone`
--

CREATE TABLE `phone` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneno` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`id`, `name`, `phoneno`, `email`, `note`, `created`) VALUES
(1, 'Mannaf', '01744508287', 'mannaf444@gmail.com', 'This is test Note', '2021-05-20 04:08:33'),
(2, 'Mannaf', '0145587', 'devid@gmail.com', 'From Dhaka', '2021-05-20 04:08:56'),
(7, 'admin123', '2323423', 'andrea@gmail.com', 'dsafsdafsadsdafsdafasdfssdaf', '2021-05-22 17:57:15'),
(10, 'admin123', '01744508287', 'mannaf444@gmail.com', 'eeee', '2021-05-23 07:26:34'),
(11, 'Robort', '98974587', 'robot@gmail.com', 'robot', '2021-05-23 20:34:24');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(5) NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `username`, `password`, `email`, `first_name`, `last_name`, `created`, `updated`) VALUES
(4, 'admin', 'admin', 'admin@admin.com', 'Galib', 'Dev', '2021-05-20 03:21:31', NULL),
(35, 'adkk', 'admin', 'mannaf444@gmail.com', 'Galib', 'Fardin3', '2021-05-24 15:16:27', NULL),
(36, 'fed444', 'admin', 'admin@gmail.com', 'Galib', 'fed444', '2021-05-24 15:17:51', NULL),
(37, 'admin123esa', 'admin', 'admin@gmail.com', 'Galib', 'Robot', '2021-05-24 15:49:45', NULL),
(38, 'admin123dds', 'admin', 'admins@gmail.com', 'Galib', 'Robot', '2021-05-24 15:50:47', NULL),
(39, 'admin123', 'admin', 'mannaf444@gmail.com', 'fsd', 'Mannfa66', '2021-05-24 16:08:45', NULL),
(41, 'abdullah45', '123456789', 'Abdullah@gmail.com', 'Abdullah', 'Alom', '2021-05-25 03:36:23', NULL),
(42, 'asd3333', 'asd3333', 'asd3333@gmail.com', 'asd3333', 'asd3333', '2021-05-25 05:29:36', NULL),
(43, 'andy333', 'andy333', 'andy333@gmail.com', 'DevidDDDD', 'Andy', '2021-05-25 06:13:22', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `phone`
--
ALTER TABLE `phone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
