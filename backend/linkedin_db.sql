-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 01:28 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `linkedin_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `CompanyID` int(11) NOT NULL,
  `CompanyName` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `JobID` int(11) NOT NULL,
  `CompanyID` int(11) DEFAULT NULL,
  `JobTitle` varchar(100) DEFAULT NULL,
  `JobDescription` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `PostID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `CompanyID` int(11) DEFAULT NULL,
  `PostContent` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Bio` text DEFAULT NULL,
  `Experience` text DEFAULT NULL,
  `Education` text DEFAULT NULL,
  `Skills` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `Username`, `Email`, `Password`, `Bio`, `Experience`, `Education`, `Skills`) VALUES
(1, 'ahmad', 'ahmadhandoush499@gmail.com', '$2y$10$rf1xVyGk716FgZ90l3yB8.lE1LMSdtw89udYMl2X7wk5rAs55uSAq', NULL, NULL, NULL, NULL),
(3, 'nivine', 'nivine@gmail.com', '$2y$10$5P6gTltfDDBlS8IoidBmqOXrfQgWAAGs4uzIDUEqMULjQuY6nr9f.', NULL, NULL, NULL, NULL),
(4, 'sara', 'sara@gmail.com', '$2y$10$Gbrfyt6KGsfFTpn/5ZZbmeFEZHrKaWjl4Crvcr9b2xHzNJrbuWYSe', NULL, NULL, NULL, NULL),
(5, 'walid', 'walid@gmail.com', '$2y$10$EQwyLXejecwFz/rlEBodSeBz.L95wxT7G8Lg3uPiAd0Yu/wMjHMkq', NULL, NULL, NULL, NULL),
(6, 'omar', 'omar@gmail.com', '$2y$10$cty9tKHuJ5lbQ04DJI1dguD6820fPD6LHJv2tN0rOHIpJKIMSdOkG', NULL, NULL, NULL, NULL),
(7, 'kareem', 'kareem@gmail.com', '$2y$10$Ac7MbOB.fFO/EI3AnA89ce91CsPER0BBBXnEU1qfFqI0PzbITdmSe', NULL, NULL, NULL, NULL),
(8, 'sami', 'sami@gmail.com', '$2y$10$qDxCeX7n4wohRWHrOjbw/uZkQzaOUqwUkIaNjd6RevnnWb0sSM2pe', NULL, NULL, NULL, NULL),
(9, 'popo', 'popo@gmail.com', '$2y$10$rg3/Gs7q5NoYIqajqv9RTOsoQXymFZfdut3RHVrBAKe.ZslwjPihC', NULL, NULL, NULL, NULL),
(10, 'mhamad', 'mhamad@gmail.com', '$2y$10$mBJy8xZaeoiZiNNJrc87aeia5UAIsuQ24HMMAgBkEvbSSceqLupK.', NULL, NULL, NULL, NULL),
(11, 'oioi', 'oioi@gmail.com', '$2y$10$oxolxdnwiBq4WYe8z7/FpuP7.xC0z4kAvdALTPCmXvwAVf5tKxlBK', NULL, NULL, NULL, NULL),
(12, 'joujou', 'joujou@gmail.com', '$2y$10$aA2wgRclW5K0hLSTcbowU.xMAKIt5xPjB7L3uiAsSI/.6M8fje/cC', NULL, NULL, NULL, NULL),
(13, 'liza', 'liza@gmail.com', '$2y$10$hNYK5kXCqG/yxcMjVu7Ybe6ss3QlMp7FbFUPtxI9aYsZFz2LzOQji', NULL, NULL, NULL, NULL),
(14, 'uiui', 'uiui@gmail.com', '$2y$10$PjVDjg2iMBD63IAanTV6neUjEgXTbyZGuVzCHDEOcNwa5pyW8oboS', NULL, NULL, NULL, NULL),
(15, 'lina', 'lina@gmail.com', '$2y$10$HsUcgfDQlfkWSKIDY6vM3OQR1Fzx7f30rzxbOqkSzJHU20kx9KneS', NULL, NULL, NULL, NULL),
(16, 'jamila', 'jamila@gmail.com', '$2y$10$/LsqHm1vVISAZVrQJOBWDuLz0h3aYWRI58GU/nE0/tfbHoARelvDy', NULL, NULL, NULL, NULL),
(17, 'mira', 'mira@gmail.com', '$2y$10$3e1Rg6APESLeaVO4qPcNnuvFE4aLFp5/jRT.ODEHdaZPNUMAEpuQ.', NULL, NULL, NULL, NULL),
(18, 'rita', 'rita@gmail.com', '$2y$10$6eG/jlMvmqsbuQgqqEobYevpYGX9FNfMImKZ5rOAjotKLCz47KeOy', NULL, NULL, NULL, NULL),
(19, 'reem', 'reem@gmail.com', '$2y$10$gF75F8z9pSOZPS0ywTBBY.R67GKjEroyyGxc7rS/FER5JCAju/pRK', NULL, NULL, NULL, NULL),
(20, 'ali', 'ali@gmail.com', '$2y$10$h8iK7saXsfpNdDoMhQCUf.1lUhXWbxkGRcF3.dPYJ5N6S/yMQRREC', NULL, NULL, NULL, NULL),
(21, 'samar', 'samar@gmail.com', '$2y$10$WTEZtdcO54ArsNVfoMWJ0.2kU4FMa1chFPDX3S/keGgU/LPbgLT3a', NULL, NULL, NULL, NULL),
(22, 'kamil', 'kamil@gmail.com', '$2y$10$dfE2wyMe.L5QlD67.GxkdO/tcTRGWtWTuUdsIdsL/4j974SYuNPhO', NULL, NULL, NULL, NULL),
(23, 'fadi', 'fadi@gmail.com', '$2y$10$zABGWILJAv9Z42AXXl.9TuAc9.Tbdo3Ar/Lx9.BPy3byJDgvxokfe', NULL, NULL, NULL, NULL),
(24, 'rawaa', 'rawaa@gmail.com', '$2y$10$U64gDkouRCO08PN3.QO30uo4JASAmnkCyBlp.2eIMee7Q.oTKez2G', NULL, NULL, NULL, NULL),
(25, 'jane', 'jane@gmail.com', '$2y$10$GbBZFAoQ86wwZyUhr.A3IujZoJJO6ulzdPF17yG6rjSO1wT1NivKm', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`CompanyID`),
  ADD UNIQUE KEY `CompanyName` (`CompanyName`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`JobID`),
  ADD KEY `CompanyID` (`CompanyID`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`PostID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `CompanyID` (`CompanyID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `CompanyID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `JobID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `PostID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`CompanyID`) REFERENCES `companies` (`CompanyID`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`CompanyID`) REFERENCES `companies` (`CompanyID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
