-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fi
-- Generation Time: May 06, 2022 at 07:24 PM
-- Server version: 10.5.15-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jannhakk`
--

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `CategoryId` int(11) NOT NULL,
  `CategoryName` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`CategoryId`, `CategoryName`) VALUES
(1, 'Back'),
(2, 'Legs'),
(3, 'Chest'),
(4, 'Fullbody'),
(5, 'Arms'),
(6, 'Ironman'),
(7, 'WizardPower');

-- --------------------------------------------------------

--
-- Table structure for table `GymMoves`
--

CREATE TABLE `GymMoves` (
  `GymMoveId` int(11) NOT NULL,
  `MoveName` varchar(500) DEFAULT NULL,
  `Category` int(5) DEFAULT NULL,
  `MovePicture` varchar(200) DEFAULT NULL,
  `Likes` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `GymMoves`
--

INSERT INTO `GymMoves` (`GymMoveId`, `MoveName`, `Category`, `MovePicture`, `Likes`) VALUES
(7, 'Bench press', 5, '../Images/GymMoves/gymMoveBenchPress.jpg', 16),
(8, 'Fencing', 4, '../Images/GymMoves/gymMoveFencing.jpg', 6),
(9, 'Flying', 7, '../Images/GymMoves/gymMoveFlying.jpg', 3),
(10, 'Hyper extension', 1, '../Images/GymMoves/gymMoveHyperExtension.jpg', 2),
(11, 'Plank', 4, '../Images/GymMoves/gymMovePlank.jpg', 0),
(12, 'Pull up', 5, '../Images/GymMoves/gymMovePullUp.jpg', 0),
(13, 'Push up', 3, '../Images/GymMoves/gymMovePushUp.jpg', 0),
(14, 'Rowing', 4, '../Images/GymMoves/gymMoveRowing.jpg', 0),
(15, 'Sit up', 3, '../Images/GymMoves/gymMoveSitUp.jpg', 0),
(16, 'Train pulling', 6, '../Images/GymMoves/gymMoveTrainPulling.jpg', 0),
(17, 'Weight lifting', 5, '../Images/GymMoves/gymMoveWeightLifting.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `PostId` int(11) NOT NULL,
  `PostText` varchar(500) DEFAULT NULL,
  `PostImage` text DEFAULT NULL,
  `Category` int(5) DEFAULT NULL,
  `CreatedById` int(11) DEFAULT NULL,
  `PostLike` int(5) NOT NULL DEFAULT 0,
  `PostDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`PostId`, `PostText`, `PostImage`, `Category`, `CreatedById`, `PostLike`, `PostDate`) VALUES
(37, 'Test11', '5cf16c08548b5ac96d27c2b8774bb84b', 1, 1, 0, '2022-05-06 07:01:34'),
(38, 'Test11', 'a7ee026fb02c06bb5820578555621c82', 1, 1, 0, '2022-05-06 07:37:03'),
(39, 'Test11', '45e52435fb4e01bc0af4fe7974afce46', 1, 1, 0, '2022-05-06 08:02:23'),
(40, 'Test11', '3d6047befff53752fff3ce553f9fd0ae', 1, 1, 0, '2022-05-06 08:06:07'),
(43, 'Test11', '5657a5d43686e8d52038368b32d75cd8', 4, 26, 0, '2022-05-06 09:35:39');

-- --------------------------------------------------------

--
-- Table structure for table `ProfilePics`
--

CREATE TABLE `ProfilePics` (
  `ProfilePicId` int(11) NOT NULL,
  `PicName` varchar(50) DEFAULT NULL,
  `FilePath` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ProfilePics`
--

INSERT INTO `ProfilePics` (`ProfilePicId`, `PicName`, `FilePath`) VALUES
(1, 'LegoBoba', '../Images/ProfilePics/LegoBobaProPic.jpg'),
(2, 'LegoC3PO', '../Images/ProfilePics/LegoC3POProPic.jpg'),
(3, 'LegoCatmione', '../Images/ProfilePics/LegoCatmioneProPic.jpg'),
(4, 'LegoChewbacca', '../Images/ProfilePics/LegoChewbaccaProPic.jpg'),
(5, 'LegoDarthMaul', '../Images/ProfilePics/LegoDartMaulProPic.jpg'),
(6, 'LegoDarthVader', '../Images/ProfilePics/LegoDartVaderProPic.jpg'),
(7, 'LegoDumbledore', '../Images/ProfilePics/LegoDumbledoreProPic.jpg'),
(8, 'LegoGilderoy', '../Images/ProfilePics/LegoGilderoyProPic.jpg'),
(9, 'LegoHagrid', '../Images/ProfilePics/LegoHagridProPic.jpg'),
(10, 'LegoHarry', '../Images/ProfilePics/LegoHarryProPic.jpg'),
(11, 'LegoHermione', '../Images/ProfilePics/LegoHermioneProPic.jpg'),
(12, 'LegoLuke', '../Images/ProfilePics/LegoLukeProPic.jpg'),
(13, 'LegoMalfoy', '../Images/ProfilePics/LegoMalfoyProPic.jpg'),
(14, 'LegoMando', '../Images/ProfilePics/LegoMandoProPic.jpg'),
(15, 'LegoR2D2', '../Images/ProfilePics/LegoR2D2ProPic.jpg'),
(16, 'LegoRemus', '../Images/ProfilePics/LegoRemusProPic.jpg'),
(17, 'LegoRon', '../Images/ProfilePics/LegoRonProPic.jpg'),
(18, 'LegoSnape', '../Images/ProfilePics/LegoSnapeProPic.jpg'),
(19, 'LegoStormtrooper', '../Images/ProfilePics/LegoStormtrooperProPic.jpg'),
(20, 'LegoTusken', '../Images/ProfilePics/LegoTuskenProPic.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserId` int(11) NOT NULL,
  `Username` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `ProfileText` varchar(500) DEFAULT NULL,
  `Role` int(11) NOT NULL DEFAULT 1,
  `ProfilePic` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserId`, `Username`, `Email`, `Password`, `ProfileText`, `Role`, `ProfilePic`) VALUES
(1, 'legolover123', 'legolover123@asd.fi', '$2a$10$5RzpyimIeuzNqW7G8seBiOzBiWBvrSWroDomxMa0HzU6K2ddSgixS', 'we like legos!!', 0, 1),
(2, 'LegoHagrid123', 'hagrig@lego.fi', '$2a$10$H7bXhRqd68DjwFIVkw3G1OpfIdRWIRb735GvvzCBeuMhac/ZniGba', 'I like Norbert', 1, 4),
(20, 'LegoTester112', 'tester112@email.com', '$2b$12$5IVH6Yt/o3sZR4.LdNSflOnkbzuXm8xvvOFPwLrLv9aHSW2u0OEWu', 'test', 1, 3),
(21, 'LegoTester113', 'tester113@email.com', '$2b$12$6Vq59dRyg0BxwEUfa.2NtOQAIuoxW28AAz3xjrQUB2ptFNKdeUXjS', 'test', 1, 2),
(22, 'LegoTester114', 'tester114@email.com', '$2b$12$5MOKJcUOLvTy50K/XCwaUuTFXFUbRnN9dIsrrC3ov6ybLVNFp91TG', 'test', 1, 2),
(23, 'LegoTester115', 'tester115@email.com', '$2b$12$PIQb9gURc49eu/hltOCireKjGJdveKgyzRrIFa.oGqzMOCOWfCZCe', 'test', 1, 2),
(24, 'LegoTester119', 'tester119@email.com', '$2b$12$oYqZmjR1UGyyhChouWlwleCOcj6IPrSGM5C6sJO8DSoLjH2.ZxoSq', 'test', 1, 15),
(25, 'LegoTester120', 'tester120@email.com', '$2b$12$nxCImYjBItqKPASqcsoPUuaOgkKcdru.rYMxvPE1UeiOBXftC2DCu', 'test', 1, 19),
(26, 'LegoTester122', 'tester122@email.com', '$2b$12$UiELeTboX/IhpgJLs2u9k.Egd8NxIbtKOAa7pTbtp.Jmy7UBnrO5a', 'test', 1, 17);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`CategoryId`);

--
-- Indexes for table `GymMoves`
--
ALTER TABLE `GymMoves`
  ADD PRIMARY KEY (`GymMoveId`),
  ADD KEY `Category` (`Category`);

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`PostId`),
  ADD KEY `CreatedById` (`CreatedById`),
  ADD KEY `Category` (`Category`);

--
-- Indexes for table `ProfilePics`
--
ALTER TABLE `ProfilePics`
  ADD PRIMARY KEY (`ProfilePicId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserId`),
  ADD KEY `ProfilePic` (`ProfilePic`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Category`
--
ALTER TABLE `Category`
  MODIFY `CategoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `GymMoves`
--
ALTER TABLE `GymMoves`
  MODIFY `GymMoveId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `PostId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `ProfilePics`
--
ALTER TABLE `ProfilePics`
  MODIFY `ProfilePicId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `GymMoves`
--
ALTER TABLE `GymMoves`
  ADD CONSTRAINT `GymMoves_ibfk_1` FOREIGN KEY (`Category`) REFERENCES `Category` (`CategoryId`);

--
-- Constraints for table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `Posts_ibfk_1` FOREIGN KEY (`CreatedById`) REFERENCES `Users` (`UserId`),
  ADD CONSTRAINT `Posts_ibfk_2` FOREIGN KEY (`Category`) REFERENCES `Category` (`CategoryId`);

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`ProfilePic`) REFERENCES `ProfilePics` (`ProfilePicId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
