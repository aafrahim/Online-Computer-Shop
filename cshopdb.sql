-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2019 at 06:37 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cshopdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `companyinfo`
--

CREATE TABLE `companyinfo` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companyinfo`
--

INSERT INTO `companyinfo` (`id`, `name`) VALUES
(1, 'Acer'),
(2, 'Asus'),
(4, 'Gigabyte'),
(3, 'Logitech'),
(6, 'MaxGreen'),
(5, 'Transcend');

-- --------------------------------------------------------

--
-- Table structure for table `productinfo`
--

CREATE TABLE `productinfo` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL,
  `subtype` varchar(50) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `company` varchar(200) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productinfo`
--

INSERT INTO `productinfo` (`id`, `name`, `type`, `subtype`, `image`, `company`, `description`, `price`) VALUES
(1, 'Asus ZenBook Pro15', 'Computer', 'Laptop', 'AsusZenBookPro15.jpg', 'Asus', 'Processor:  Intel Core i9-8950HK\r\n\r\nGraphics:  Intel UHD Graphics 630 + Nvidia GeForce GTX 1050 Ti\r\n\r\nRAM: 16GB of RAM\r\n\r\nStorage: 1TB PCIe SSD\r\n\r\nDisplay: 15.6-inch LED-backlit 4K UHD (3840 x 2160) 16:9 touchscreen\r\n\r\nPorts: USB Type-C (x2), USB 3.0 (x2), HDMI-out, 3.5mm audio, MicroSD', '2,20,000'),
(2, 'Acer Notebook ', 'Computer', 'Notebook', '862811.jpg', 'Acer', 'i really do not know', '56999'),
(6, 'keyboard234', 'Periferal', 'IO', '862811.jpg', 'Logitech', 'New stylist keyboard!', '7000'),
(7, '128 GB SSD', 'Storage', 'SSD', '862811.jpg', 'Gigabyte', 'Make your pc super fast', '3000'),
(8, '1 TB portable HDD', 'Storage', 'Portable', '862811.jpg', 'Transcend', '1 TB Master Class portable Hard Disc', '130000'),
(9, 'Transcend 1TB Super', 'Storage', 'HDD', '862811.jpg', 'Transcend', 'this is a shit, bro!!', '20000'),
(10, 'MaxGreen 2810 ATX Casing', 'Hardware', 'Casing', '862811.jpg', 'MaxGreen', 'Beast!', '2000'),
(11, 'Transcend 500gb', 'Storage', 'HDD', '862811.jpg', 'Transcend', 'fdsfdsfdsfdsf', '5000');

-- --------------------------------------------------------

--
-- Table structure for table `prosubtype`
--

CREATE TABLE `prosubtype` (
  `subtypeid` int(100) NOT NULL,
  `subtypename` varchar(50) NOT NULL,
  `typeid` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prosubtype`
--

INSERT INTO `prosubtype` (`subtypeid`, `subtypename`, `typeid`) VALUES
(1, 'Laptop', 'Computer'),
(2, 'Notebook', 'Computer'),
(3, 'SSD', 'Storage'),
(4, 'HDD', 'Storage'),
(5, 'Portable', 'Storage'),
(6, 'IO', 'Periferal'),
(7, 'Casing', 'Hardware');

-- --------------------------------------------------------

--
-- Table structure for table `protype`
--

CREATE TABLE `protype` (
  `typeid` int(100) NOT NULL,
  `typename` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `protype`
--

INSERT INTO `protype` (`typeid`, `typename`) VALUES
(1, 'Computer'),
(4, 'Hardware'),
(3, 'Periferal'),
(2, 'Storage');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `utype` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `name`, `username`, `password`, `email`, `utype`) VALUES
(1, 'Ali Arman', 'arman', 'arman001', 'aafrahim@gmail.com', '0'),
(2, 'Tausif Ahmed', 'tausif', 'tausif001', 'tausif@gmail.com', '1'),
(4, 'user', 'user', '1234', 'user@gmail.com', '0'),
(8, 'Yeasin Ali', 'yeasin', '1234', 'yeasin@gmail.com', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companyinfo`
--
ALTER TABLE `companyinfo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `productinfo`
--
ALTER TABLE `productinfo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `prosubtype`
--
ALTER TABLE `prosubtype`
  ADD PRIMARY KEY (`subtypeid`),
  ADD UNIQUE KEY `subtypename` (`subtypename`);

--
-- Indexes for table `protype`
--
ALTER TABLE `protype`
  ADD PRIMARY KEY (`typeid`),
  ADD UNIQUE KEY `typename` (`typename`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companyinfo`
--
ALTER TABLE `companyinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `productinfo`
--
ALTER TABLE `productinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `prosubtype`
--
ALTER TABLE `prosubtype`
  MODIFY `subtypeid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `protype`
--
ALTER TABLE `protype`
  MODIFY `typeid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
