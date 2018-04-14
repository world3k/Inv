-- MySQL dump 10.13  Distrib 5.6.39, for Linux (x86_64)
--
-- Host: localhost    Database: crm
-- ------------------------------------------------------
-- Server version	5.6.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `crm_attachment`
--
Use crm;
DROP TABLE IF EXISTS `crm_attachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crm_attachment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content_type` varchar(64) DEFAULT NULL,
  `file_path` varchar(100) DEFAULT NULL,
  `file_size` bigint(20) DEFAULT NULL,
  `original_name` varchar(255) DEFAULT NULL,
  `suffix` varchar(20) DEFAULT NULL,
  `att_type` varchar(20) DEFAULT NULL,
  `upload_time` datetime DEFAULT NULL,
  `member_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_mo4u1f5i9c0uq531tkeqaw5kd` (`file_path`),
  KEY `FKmkoq53o6qwxpmiyerl1vm7vus` (`member_id`),
  CONSTRAINT `FKmkoq53o6qwxpmiyerl1vm7vus` FOREIGN KEY (`member_id`) REFERENCES `crm_member` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_attachment`
--

LOCK TABLES `crm_attachment` WRITE;
/*!40000 ALTER TABLE `crm_attachment` DISABLE KEYS */;
/*!40000 ALTER TABLE `crm_attachment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_member`
--

DROP TABLE IF EXISTS `crm_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crm_member` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `user_name` varchar(64) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `hiredate` datetime DEFAULT NULL,
  `real_name` varchar(64) NOT NULL,
  `telephone` varchar(64) DEFAULT NULL,
  `avatar` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_3w4x463xehrckku45kvs911ml` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_member`
--

LOCK TABLES `crm_member` WRITE;
/*!40000 ALTER TABLE `crm_member` DISABLE KEYS */;
INSERT INTO `crm_member` VALUES (1,'9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0','admin','','768870379@qq.com','GIRL','2017-06-30 00:00:00','Administrator','18676037292',''),(31,'9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0','gson','\0','wmails@126.com','BOY','2017-05-08 00:00:00','郭华','13203314875',NULL),(36,'8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92','shijie','','shijie@qq.com','BOY','2018-04-11 11:46:15','shijie','shijie',NULL);
/*!40000 ALTER TABLE `crm_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_member_role`
--

DROP TABLE IF EXISTS `crm_member_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crm_member_role` (
  `member_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  KEY `FKb17jj8ou6rp2lkxb5xen5tixe` (`role_id`),
  KEY `FK76a8mc5mub4tu1gndxph4ypls` (`member_id`),
  CONSTRAINT `FK76a8mc5mub4tu1gndxph4ypls` FOREIGN KEY (`member_id`) REFERENCES `crm_member` (`id`),
  CONSTRAINT `FKb17jj8ou6rp2lkxb5xen5tixe` FOREIGN KEY (`role_id`) REFERENCES `crm_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_member_role`
--

LOCK TABLES `crm_member_role` WRITE;
/*!40000 ALTER TABLE `crm_member_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `crm_member_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_resource`
--

DROP TABLE IF EXISTS `crm_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crm_resource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fun_urls` varchar(1024) DEFAULT NULL,
  `menu_url` varchar(128) DEFAULT NULL,
  `res_key` varchar(128) NOT NULL,
  `res_name` varchar(128) NOT NULL,
  `res_type` varchar(20) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ic22mdco0hjpt8qjosdnyhxcx` (`res_key`),
  KEY `FKo4megp72bdlng5bpjmo56v1wk` (`parent_id`),
  CONSTRAINT `FKo4megp72bdlng5bpjmo56v1wk` FOREIGN KEY (`parent_id`) REFERENCES `crm_resource` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_resource`
--

LOCK TABLES `crm_resource` WRITE;
/*!40000 ALTER TABLE `crm_resource` DISABLE KEYS */;
INSERT INTO `crm_resource` VALUES (1,'','','system','System Maintenance','MENU','',NULL,0),(3,'/system/member/list','/system/member','system-member','User Management','MENU','',1,NULL),(10,'/system/role/list,/system/role/resource/tree','/system/role','system-role','Role Management','MENU','',1,NULL),(11,'/system/resource/list','/system/resource','system-resource','Resource Management','MENU','',1,NULL),(12,'','','role-create','Create Role','FUNCTION','',10,NULL),(13,'','/system/role/delete','role-delete','Delete Role','FUNCTION','',10,NULL),(14,'/system/role/update,/system/role/save','','role-save','Save Change','FUNCTION','',10,NULL),(17,'/system/role/resource/save','','reole-resource-save','Assign Resource','FUNCTION','',10,NULL),(18,'/system/resource/form,/system/resource/parent/tree,/system/resource/save','','resource-create','Resource Name','FUNCTION','',11,NULL),(19,'/system/resource/form,/system/resource/parent/tree,/system/resource/save','','resource-edit','Modify','FUNCTION','',11,NULL),(20,'/system/resource/delete','','resource-delete','Delete','FUNCTION','',11,NULL),(21,'/system/member/form,/system/member/save','','member-create','Create User','FUNCTION','',3,NULL),(22,'/system/member/delete','','member-delete','Delete User','FUNCTION','',3,NULL),(23,'/system/member/form,/system/member/update','','member-edit','Modify User','FUNCTION','',3,NULL),(26,'/system/member/password/reset','','member-reset-password','Reset Password','FUNCTION','',3,NULL),(28,'','','inv','Inventory','MENU','',NULL,NULL),(29,'/inv/region/list','/inv/region','inv-region','region','MENU','',28,NULL);
/*!40000 ALTER TABLE `crm_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_role`
--

DROP TABLE IF EXISTS `crm_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crm_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(512) DEFAULT NULL,
  `role_name` varchar(30) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_r0jsnwb00o0n376ghyuahuqfg` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_role`
--

LOCK TABLES `crm_role` WRITE;
/*!40000 ALTER TABLE `crm_role` DISABLE KEYS */;
INSERT INTO `crm_role` VALUES (1,'有系统所有权限','管理员',''),(2,'主要是上课，可以查看学员管理模块','教员','');
/*!40000 ALTER TABLE `crm_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_role_resource`
--

DROP TABLE IF EXISTS `crm_role_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crm_role_resource` (
  `role_id` bigint(20) NOT NULL,
  `resource_id` bigint(20) NOT NULL,
  KEY `FKjwyt61kixx52wper9y0li38c2` (`resource_id`),
  KEY `FKasi3s87a7p562cyw0jt3m0isf` (`role_id`),
  CONSTRAINT `FKasi3s87a7p562cyw0jt3m0isf` FOREIGN KEY (`role_id`) REFERENCES `crm_role` (`id`),
  CONSTRAINT `FKjwyt61kixx52wper9y0li38c2` FOREIGN KEY (`resource_id`) REFERENCES `crm_resource` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_role_resource`
--

LOCK TABLES `crm_role_resource` WRITE;
/*!40000 ALTER TABLE `crm_role_resource` DISABLE KEYS */;
INSERT INTO `crm_role_resource` VALUES (1,1),(1,3),(1,21),(1,22),(1,23),(1,10),(1,12),(1,13),(1,14),(1,17),(1,11),(1,18),(1,19),(1,20);
/*!40000 ALTER TABLE `crm_role_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(512) DEFAULT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ixr2itih2n9q41fv3qx6mbkrp` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'Center America','Center America'),(2,'North America','North America'),(3,'South America','South America'),(4,'Africa/Middle East','Africa/Middle East'),(5,'Asia','Asia'),(6,'Europe','Europe');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-14  8:29:30
