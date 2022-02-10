-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: eris
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assessment_details`
--

DROP TABLE IF EXISTS `assessment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessment_details` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `AssessmentID` int NOT NULL,
  `IsFall` tinyint DEFAULT NULL,
  `IsTopple` tinyint DEFAULT NULL,
  `IsSlide` tinyint DEFAULT NULL,
  `IsSpread` tinyint DEFAULT NULL,
  `IsFlow` tinyint DEFAULT NULL,
  `IsCompound` tinyint DEFAULT NULL,
  `isErosion` tinyint DEFAULT NULL,
  `IsSurfacialSloughing` tinyint DEFAULT NULL,
  `IsScouredToe` tinyint DEFAULT NULL,
  `IsWashout` tinyint DEFAULT NULL,
  `IsAdvancing` tinyint DEFAULT NULL,
  `IsRetrogressing` tinyint DEFAULT NULL,
  `IsEnlarging` tinyint DEFAULT NULL,
  `IsWidening` tinyint DEFAULT NULL,
  `IsMoving` tinyint DEFAULT NULL,
  `IsConfined` tinyint DEFAULT NULL,
  `IsPavementGroundCracks` tinyint DEFAULT NULL,
  `CrackLength` int DEFAULT NULL,
  `CrackHorizontalDisplacement` int DEFAULT NULL,
  `CrackVerticalDisplacement` int DEFAULT NULL,
  `CrackDepth` int DEFAULT NULL,
  `CrackSettlement` int DEFAULT NULL,
  `CrackBulge` int DEFAULT NULL,
  `IsIndentedByRocks` tinyint DEFAULT NULL,
  `IsRock` tinyint DEFAULT NULL,
  `HasBedding` tinyint DEFAULT NULL,
  `HasJoints` tinyint DEFAULT NULL,
  `HasFractures` tinyint DEFAULT NULL,
  `IsSoil` tinyint DEFAULT NULL,
  `ClayEstimate` decimal(5,3) DEFAULT NULL,
  `SiltEstimate` decimal(5,3) DEFAULT NULL,
  `SandEstimate` decimal(5,3) DEFAULT NULL,
  `GravelEstimate` decimal(5,3) DEFAULT NULL,
  `TreesCoverageOnSlope` decimal(5,3) DEFAULT NULL,
  `BushesShrubsCoverageOnSlope` decimal(5,3) DEFAULT NULL,
  `GroundcoverCoverageOnSlope` decimal(5,3) DEFAULT NULL,
  `SlopeHeight` decimal(7,2) DEFAULT NULL,
  `OriginalSlope` decimal(7,2) DEFAULT NULL,
  `LandslideWidth` decimal(7,2) DEFAULT NULL,
  `LandslideLength` decimal(7,2) DEFAULT NULL,
  `MainScarpHeight` decimal(7,2) DEFAULT NULL,
  `LandslideSlope` decimal(7,2) DEFAULT NULL,
  `RoadwayEncroachedLength` decimal(7,2) DEFAULT NULL,
  `RoadwayEncroachedWidth` decimal(7,2) DEFAULT NULL,
  `IsDry` tinyint DEFAULT NULL,
  `IsMoist` tinyint DEFAULT NULL,
  `IsWet` tinyint DEFAULT NULL,
  `IsFlowingWater` tinyint DEFAULT NULL,
  `IsSeep` tinyint DEFAULT NULL,
  `IsSpring` tinyint DEFAULT NULL,
  `IsHighwayOpen` tinyint DEFAULT NULL,
  `IsShoulderClosed` tinyint DEFAULT NULL,
  `IsLaneClosed` tinyint DEFAULT NULL,
  `ClosedLanes` int DEFAULT NULL,
  `IsOneWayClosed` tinyint DEFAULT NULL,
  `IsTwoWayClosed` tinyint DEFAULT NULL,
  `HasCloggedInlet` tinyint DEFAULT NULL,
  `HasCompromisedDrains` tinyint DEFAULT NULL,
  `HasSurfaceRunoff` tinyint DEFAULT NULL,
  `HasTorrentSurgeFlood` tinyint DEFAULT NULL,
  `HasImpactedAdjacentUtilities` tinyint DEFAULT NULL,
  `HasImpactedAdjacentProperties` tinyint DEFAULT NULL,
  `HasImpactedAdjacentStructures` tinyint DEFAULT NULL,
  `HasMaybeImpactedAdjacentUtilities` tinyint DEFAULT NULL,
  `HasMaybeImpactedAdjacentProperties` tinyint DEFAULT NULL,
  `HasMaybeImpactedAdjacentStructures` tinyint DEFAULT NULL,
  `IsImmediateActionOpenHighwayTraffic` tinyint DEFAULT NULL,
  `IsImmediateActionOpenHighwayShoulder` tinyint DEFAULT NULL,
  `IsImmediateActionCloseHighwayOneDirection` tinyint DEFAULT NULL,
  `IsImmediateActionCloseHighWayBothDirections` tinyint DEFAULT NULL,
  `IsImmediateActionRemoveLandslideDebris` tinyint DEFAULT NULL,
  `IsImmediateActionPlaceKRailOrFence` tinyint DEFAULT NULL,
  `IsImmediateActionCoverSlopeWithPlastic` tinyint DEFAULT NULL,
  `IsImmediateActionDivertSurfaceWaterRunoff` tinyint DEFAULT NULL,
  `IsImmediateActionRemoveCulvertBlockage` tinyint DEFAULT NULL,
  `IsImmediateActionDewaterWithPumpTrench` tinyint DEFAULT NULL,
  `IsImmediateActionDewaterWithHorizontalDrains` tinyint DEFAULT NULL,
  `IsImmediateActionConstructTemporaryShoring` tinyint DEFAULT NULL,
  `IsImmediateActionButtressToeOfLandslide` tinyint DEFAULT NULL,
  `IsImmediateActionPlaceRockSlopeProtection` tinyint DEFAULT NULL,
  `IsImmediateActionRoutineVisualMonitor` tinyint DEFAULT NULL,
  `IsImmediateActionReconstructSlopeToOriginalCondition` tinyint DEFAULT NULL,
  `IsImmediateActionReconstructSlopeWIthGeosynthetics` tinyint DEFAULT NULL,
  `IsFollowUpActionOpenHighwayTraffic` tinyint DEFAULT NULL,
  `IsFollowUpActionOpenHighwayShoulder` tinyint DEFAULT NULL,
  `IsFollowUpActionDewaterWithHorizontalDrains` tinyint DEFAULT NULL,
  `IsFollowUpActionConstructTemporaryShoring` tinyint DEFAULT NULL,
  `IsFollowUpActionButtressToeOfLandslide` tinyint DEFAULT NULL,
  `IsFollowUpActionPlaceRockSlopeProtection` tinyint DEFAULT NULL,
  `IsFollowUpActionRoutineVisualMonitor` tinyint DEFAULT NULL,
  `IsFollowUpActionReconstructSlopeToOriginalCondition` tinyint DEFAULT NULL,
  `IsFollowUpActionReconstructSlopeWIthGeosynthetics` tinyint DEFAULT NULL,
  `IsFollowUpActionRepairCulvertDrainagePipe` tinyint DEFAULT NULL,
  `IsFollowUpActionInstallErosionControl` tinyint DEFAULT NULL,
  `IsFollowUpActionSurveySite` tinyint DEFAULT NULL,
  `IsFollowUpActionGeologicalMapping` tinyint DEFAULT NULL,
  `IsFollowUpActionSubsurfaceExploration` tinyint DEFAULT NULL,
  `IsFollowUpActionDesignAndPlans` tinyint DEFAULT NULL,
  `OpenedLanesCount` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_assessment_details_assessment_profile_idx` (`AssessmentID`),
  CONSTRAINT `FK_assessment_details_assessment_profile` FOREIGN KEY (`AssessmentID`) REFERENCES `assessment_profile` (`AssessmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessment_details`
--

LOCK TABLES `assessment_details` WRITE;
/*!40000 ALTER TABLE `assessment_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `assessment_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assessment_profile`
--

DROP TABLE IF EXISTS `assessment_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessment_profile` (
  `AssessmentID` int NOT NULL AUTO_INCREMENT,
  `SNumber` varchar(10) NOT NULL,
  `EA` varchar(5) NOT NULL,
  `District` varchar(2) NOT NULL,
  `County` varchar(3) NOT NULL,
  `ProjectID` varchar(10) NOT NULL,
  `Route` varchar(3) DEFAULT NULL,
  `PostMile` decimal(5,2) DEFAULT NULL,
  `DateIncidentReported` date DEFAULT NULL,
  `Latitude` varchar(45) DEFAULT NULL,
  `Longitude` varchar(45) DEFAULT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `DistrictContactLastName` varchar(50) DEFAULT NULL,
  `DistrictContactFirstName` varchar(50) DEFAULT NULL,
  `DistrictContactSNumber` varchar(10) DEFAULT NULL,
  `DistrictContactCellPhone` varchar(20) DEFAULT NULL,
  `DistrictContactPhone` varchar(20) DEFAULT NULL,
  `Notes` varchar(150) DEFAULT NULL,
  `AssessmentStatus` varchar(30) NOT NULL,
  `IsUploaded` tinyint NOT NULL,
  PRIMARY KEY (`AssessmentID`),
  KEY `FK_assessment_profile_login_idx` (`SNumber`),
  CONSTRAINT `FK_assessment_profile_login` FOREIGN KEY (`SNumber`) REFERENCES `login` (`SNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessment_profile`
--

LOCK TABLES `assessment_profile` WRITE;
/*!40000 ALTER TABLE `assessment_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `assessment_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `SNumber` varchar(10) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  PRIMARY KEY (`SNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo` (
  `PhotoID` int NOT NULL AUTO_INCREMENT,
  `AssessmentID` int NOT NULL,
  `FilePath` varchar(100) NOT NULL,
  `AssociatedMeasurement` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`PhotoID`),
  KEY `FK_photo_assessment_profile_idx` (`AssessmentID`),
  CONSTRAINT `FK_photo_assessment_profile` FOREIGN KEY (`AssessmentID`) REFERENCES `assessment_profile` (`AssessmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-23 21:05:09
