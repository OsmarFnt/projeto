CREATE DATABASE  IF NOT EXISTS `estatistica` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `estatistica`;

-- Host: 127.0.0.1    Database: estatistica
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `Regiao`
--

DROP TABLE IF EXISTS `regiao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regiao` (
  `reg_codigo` int NOT NULL AUTO_INCREMENT,
  `reg_descricao` varchar(10) DEFAULT NULL,
  `reg_sigla` varchar(2) DEFAULT NULL,
  `reg_areakm2` int DEFAULT NULL,
  `reg_valorpib` numeric DEFAULT NULL,
  PRIMARY KEY (`reg_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Regiao`
--

LOCK TABLES `regiao` WRITE;
/*!40000 ALTER TABLE `regiao` DISABLE KEYS */;
INSERT INTO `regiao` VALUES (1,'Norte','NT',3870000,387.5),(2,'Sul','SL',576774,1.196),(3,'Sudeste','SD',954511,6260),(4,'Nordeste','ND',1558000,1.005);
/*!40000 ALTER TABLE `regiao` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cidade`
--
DROP TABLE IF EXISTS `cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidade` (
  `cid_codigo` int NOT NULL AUTO_INCREMENT,
  `cid_descricao` varchar(15) DEFAULT NULL,
  `cid_estado` char(2) DEFAULT NULL,
  `cid_habitantes` int DEFAULT NULL,
  `cid_economia` varchar(10) DEFAULT NULL,
  `cid_anofundacao` int DEFAULT NULL,
  `reg_codigo` int DEFAULT NULL,
  PRIMARY KEY (`cid_codigo`),
  KEY `fk_regiao` (`reg_codigo`),
  CONSTRAINT `fk_regiao` FOREIGN KEY (`reg_codigo`) REFERENCES `regiao` (`reg_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES (1,'Franca','SP',358539,'Calçados',1805,3),(2,'Porto Alegre','RS',1492530,'Agro',1772,2),(3,'Recife','PE',1555000,'Turismo',1537,4),(4,'Manaus','AM',2020000,'Agro',1669,1);
/*!40000 ALTER TABLE `cidade` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;