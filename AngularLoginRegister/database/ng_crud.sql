-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2021 at 12:03 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

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
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`id`, `name`, `phoneno`, `created`) VALUES
(1, 'A', '123', '2021-05-19 06:18:52'),
(2, 'B', '222', '2021-05-19 06:19:06'),
(5, 'ppt', '123', '2021-05-20 04:16:41'),
(7, '345', '456546', '2021-05-20 05:06:09');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(5) NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int(3) NOT NULL,
  `salary` float(10,2) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `username`, `password`, `first_name`, `last_name`, `age`, `salary`, `created`, `updated`) VALUES
(1, 'admin123', 'admin', 'admin456', 'admin', 12, 333.00, '2020-01-23 03:31:22', NULL),
(3, 'admin@idbbisew.com', 'asd', 'asd', 'asd', 12, 345.00, '2020-02-04 04:07:30', NULL),
(5, 'test', 'test', 'IDB1', 'BISEW1', 123, 123123.00, '2021-05-19 03:31:12', NULL),
(6, 'admin', '123', 'IDB', 'Bisew', 123, 123.00, '2021-05-20 05:05:27', NULL),
(7, 'asamamun.web@gmail.c', '123', 'A', 'B', 123, 123.00, '2021-05-20 05:05:56', NULL),
(8, 'm', '123', 'mm', 'nn', 123, 65.00, '2021-05-20 05:56:09', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
