/*
Navicat MySQL Data Transfer

Source Server         : quysetr
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : moxi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-03 08:59:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(11) NOT NULL,
  `noun` varchar(255) DEFAULT NULL,
  `prices` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `imgurl1` varchar(255) DEFAULT NULL,
  `imgurl2` varchar(255) DEFAULT NULL,
  `imgurl3` varchar(255) DEFAULT NULL,
  `imgurl4` varchar(255) DEFAULT NULL,
  `prices` int(255) DEFAULT NULL,
  `pricesd` varchar(255) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `noun` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=110 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '../images/r2c11.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '1267', '7895', '7.8折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 40片/盒');
INSERT INTO `goodlist` VALUES ('2', '../images/r2c12.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '6345', '7896', '7.9折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 41片/盒');
INSERT INTO `goodlist` VALUES ('3', '../images/r2c13.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '341231', '7897', '8.10折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 42片/盒');
INSERT INTO `goodlist` VALUES ('4', '../images/r2c14.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '6745', '7898', '7.11折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 43片/盒');
INSERT INTO `goodlist` VALUES ('5', '../images/r2c15.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '21312', '7899', '7.12折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 44片/盒');
INSERT INTO `goodlist` VALUES ('6', '../images/r2c16.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '45647', '7900', '5.13折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 45片/盒');
INSERT INTO `goodlist` VALUES ('7', '../images/r2c17.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '53452', '7901', '7.14折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 46片/盒');
INSERT INTO `goodlist` VALUES ('8', '../images/r2c18.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '13241', '7902', '7.15折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 47片/盒');
INSERT INTO `goodlist` VALUES ('9', '../images/r2c19.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '4563', '7903', '3.16折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 48片/盒');
INSERT INTO `goodlist` VALUES ('10', '../images/r2c20.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '5467', '7904', '7.17折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 49片/盒');
INSERT INTO `goodlist` VALUES ('11', '../images/r2c21.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '658', '7905', '7.18折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 50片/盒');
INSERT INTO `goodlist` VALUES ('12', '../images/r2c22.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '124', '7906', '7.19折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 51片/盒');
INSERT INTO `goodlist` VALUES ('13', '../images/r2c23.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '6798', '7907', '5.20折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 52片/盒');
INSERT INTO `goodlist` VALUES ('14', '../images/r2c24.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '3465', '7908', '7.21折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 53片/盒');
INSERT INTO `goodlist` VALUES ('15', '../images/r2c25.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '85', '7909', '7.22折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 54片/盒');
INSERT INTO `goodlist` VALUES ('16', '../images/r2c26.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '45674', '7910', '3.23折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 55片/盒');
INSERT INTO `goodlist` VALUES ('17', '../images/r2c27.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '3452', '7911', '7.24折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 56片/盒');
INSERT INTO `goodlist` VALUES ('18', '../images/r2c28.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '5687', '7912', '7.25折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 57片/盒');
INSERT INTO `goodlist` VALUES ('19', '../images/r2c29.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '3547', '7913', '7.26折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 58片/盒');
INSERT INTO `goodlist` VALUES ('20', '../images/r2c30.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '568', '7914', '9.27折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 59片/盒');
INSERT INTO `goodlist` VALUES ('21', '../images/r2c31.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '457', '7915', '7.28折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 60片/盒');
INSERT INTO `goodlist` VALUES ('22', '../images/r2c32.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '568', '7916', '7.29折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 61片/盒');
INSERT INTO `goodlist` VALUES ('23', '../images/r2c33.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '6547', '7917', '7.30折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 62片/盒');
INSERT INTO `goodlist` VALUES ('24', '../images/r2c34.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '4687', '7918', '3.31折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 63片/盒');
INSERT INTO `goodlist` VALUES ('25', '../images/r2c35.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '46786', '7919', '7.32折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 64片/盒');
INSERT INTO `goodlist` VALUES ('26', '../images/r2c36.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '685', '7920', '7.33折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 65片/盒');
INSERT INTO `goodlist` VALUES ('27', '../images/r2c37.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '8679', '7921', '7.34折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 66片/盒');
INSERT INTO `goodlist` VALUES ('28', '../images/r2c11.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '235', '7922', '7.35折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 67片/盒');
INSERT INTO `goodlist` VALUES ('29', '../images/r2c12.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12395', '7923', '7.36折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 68片/盒');
INSERT INTO `goodlist` VALUES ('30', '../images/r2c13.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '58', '7924', '7.37折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 69片/盒');
INSERT INTO `goodlist` VALUES ('31', '../images/r2c14.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '235', '7925', '7.38折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 70片/盒');
INSERT INTO `goodlist` VALUES ('32', '../images/r2c15.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '568', '7926', '7.39折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 71片/盒');
INSERT INTO `goodlist` VALUES ('33', '../images/r2c16.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '4574', '7927', '7.40折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 72片/盒');
INSERT INTO `goodlist` VALUES ('34', '../images/r2c17.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '37', '7928', '7.41折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 73片/盒');
INSERT INTO `goodlist` VALUES ('35', '../images/r2c18.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '56875', '7929', '7.42折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 74片/盒');
INSERT INTO `goodlist` VALUES ('36', '../images/r2c19.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '36', '7930', '7.43折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 75片/盒');
INSERT INTO `goodlist` VALUES ('37', '../images/r2c20.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '546874', '7931', '7.44折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 76片/盒');
INSERT INTO `goodlist` VALUES ('38', '../images/r2c21.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '523', '7932', '7.45折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 77片/盒');
INSERT INTO `goodlist` VALUES ('39', '../images/r2c22.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '457', '7933', '7.46折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 78片/盒');
INSERT INTO `goodlist` VALUES ('40', '../images/r2c23.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '562', '7934', '7.47折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 79片/盒');
INSERT INTO `goodlist` VALUES ('41', '../images/r2c24.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '457', '7935', '7.48折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 80片/盒');
INSERT INTO `goodlist` VALUES ('42', '../images/r2c25.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '34', '7936', '7.49折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 81片/盒');
INSERT INTO `goodlist` VALUES ('43', '../images/r2c26.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12409', '7937', '7.50折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 82片/盒');
INSERT INTO `goodlist` VALUES ('44', '../images/r2c27.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '645734', '7938', '7.51折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 83片/盒');
INSERT INTO `goodlist` VALUES ('45', '../images/r2c28.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12411', '7939', '7.52折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 84片/盒');
INSERT INTO `goodlist` VALUES ('46', '../images/r2c29.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '253', '7940', '7.53折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 85片/盒');
INSERT INTO `goodlist` VALUES ('47', '../images/r2c30.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '6', '7941', '7.54折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 86片/盒');
INSERT INTO `goodlist` VALUES ('48', '../images/r2c31.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12414', '7942', '7.55折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 87片/盒');
INSERT INTO `goodlist` VALUES ('49', '../images/r2c32.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '63', '7943', '7.56折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 88片/盒');
INSERT INTO `goodlist` VALUES ('50', '../images/r2c33.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '346', '7944', '7.57折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 89片/盒');
INSERT INTO `goodlist` VALUES ('51', '../images/r2c34.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '5', '7945', '7.58折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 90片/盒');
INSERT INTO `goodlist` VALUES ('52', '../images/r2c35.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '7', '7946', '7.59折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 91片/盒');
INSERT INTO `goodlist` VALUES ('53', '../images/r2c36.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12419', '7947', '7.60折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 92片/盒');
INSERT INTO `goodlist` VALUES ('54', '../images/r2c37.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '2354', '7948', '7.61折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 93片/盒');
INSERT INTO `goodlist` VALUES ('55', '../images/r2c11.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '654', '7949', '7.62折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 94片/盒');
INSERT INTO `goodlist` VALUES ('56', '../images/r2c12.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '7', '7950', '7.63折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 95片/盒');
INSERT INTO `goodlist` VALUES ('57', '../images/r2c13.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '32', '7951', '7.64折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 96片/盒');
INSERT INTO `goodlist` VALUES ('58', '../images/r2c14.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '3', '7952', '7.65折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 97片/盒');
INSERT INTO `goodlist` VALUES ('59', '../images/r2c15.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '4', '7953', '7.66折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 98片/盒');
INSERT INTO `goodlist` VALUES ('60', '../images/r2c16.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '7', '7954', '7.67折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 99片/盒');
INSERT INTO `goodlist` VALUES ('61', '../images/r2c17.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '12427', '7955', '7.68折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 100片/盒');
INSERT INTO `goodlist` VALUES ('62', '../images/r2c18.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '534634', '7956', '7.69折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 101片/盒');
INSERT INTO `goodlist` VALUES ('63', '../images/r2c19.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '6', '7957', '7.70折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 102片/盒');
INSERT INTO `goodlist` VALUES ('64', '../images/r2c20.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '12430', '7958', '7.71折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 103片/盒');
INSERT INTO `goodlist` VALUES ('65', '../images/r2c21.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '536434', '7959', '7.72折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 104片/盒');
INSERT INTO `goodlist` VALUES ('66', '../images/r2c22.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '634', '7960', '7.73折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 105片/盒');
INSERT INTO `goodlist` VALUES ('67', '../images/r2c23.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '547', '7961', '7.74折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 106片/盒');
INSERT INTO `goodlist` VALUES ('68', '../images/r2c24.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '54', '7962', '7.75折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 107片/盒');
INSERT INTO `goodlist` VALUES ('69', '../images/r2c25.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '34', '7963', '7.76折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 108片/盒');
INSERT INTO `goodlist` VALUES ('70', '../images/r2c26.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '4', '7964', '7.77折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 109片/盒');
INSERT INTO `goodlist` VALUES ('71', '../images/r2c27.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '34', '7965', '7.78折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 110片/盒');
INSERT INTO `goodlist` VALUES ('72', '../images/r2c28.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '34', '7966', '7.79折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 111片/盒');
INSERT INTO `goodlist` VALUES ('73', '../images/r2c29.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '12439', '7967', '7.80折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 112片/盒');
INSERT INTO `goodlist` VALUES ('74', '../images/r2c30.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '4', '7968', '7.81折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 113片/盒');
INSERT INTO `goodlist` VALUES ('75', '../images/r2c31.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '5', '7969', '7.82折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 114片/盒');
INSERT INTO `goodlist` VALUES ('76', '../images/r2c32.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '6756', '7970', '7.83折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 115片/盒');
INSERT INTO `goodlist` VALUES ('77', '../images/r2c33.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '2', '7971', '7.84折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 116片/盒');
INSERT INTO `goodlist` VALUES ('78', '../images/r2c34.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '47', '7972', '7.85折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 117片/盒');
INSERT INTO `goodlist` VALUES ('79', '../images/r2c35.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '67', '7973', '7.86折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 118片/盒');
INSERT INTO `goodlist` VALUES ('80', '../images/r2c36.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '12446', '7974', '7.87折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 119片/盒');
INSERT INTO `goodlist` VALUES ('81', '../images/r2c37.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '457', '7975', '7.88折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 120片/盒');
INSERT INTO `goodlist` VALUES ('82', '../images/r2c11.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '3', '7976', '7.89折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 121片/盒');
INSERT INTO `goodlist` VALUES ('83', '../images/r2c12.jpg', '../images/zc1.jpg', '../images/zc2.jpg', '../images/zc3.jpg', '../images/zc4.jpg', '34', '7977', '7.90折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 122片/盒');
INSERT INTO `goodlist` VALUES ('84', '../images/r2c13.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '654', '7978', '7.91折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 123片/盒');
INSERT INTO `goodlist` VALUES ('85', '../images/r2c14.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12451', '7979', '7.92折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 124片/盒');
INSERT INTO `goodlist` VALUES ('86', '../images/r2c15.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '7567', '7980', '7.93折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 125片/盒');
INSERT INTO `goodlist` VALUES ('87', '../images/r2c16.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '687', '7981', '7.94折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 126片/盒');
INSERT INTO `goodlist` VALUES ('88', '../images/r2c17.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '76', '7982', '7.95折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 127片/盒');
INSERT INTO `goodlist` VALUES ('89', '../images/r2c18.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '87', '7983', '7.96折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 128片/盒');
INSERT INTO `goodlist` VALUES ('90', '../images/r2c19.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12456', '7984', '7.97折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 129片/盒');
INSERT INTO `goodlist` VALUES ('91', '../images/r2c20.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '534', '7985', '7.98折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 130片/盒');
INSERT INTO `goodlist` VALUES ('92', '../images/r2c21.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '64', '7986', '7.99折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 131片/盒');
INSERT INTO `goodlist` VALUES ('93', '../images/r2c22.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '7', '7987', '7.100折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 132片/盒');
INSERT INTO `goodlist` VALUES ('94', '../images/r2c23.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '65', '7988', '7.101折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 133片/盒');
INSERT INTO `goodlist` VALUES ('95', '../images/r2c24.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12461', '7989', '7.102折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 134片/盒');
INSERT INTO `goodlist` VALUES ('96', '../images/r2c25.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '25', '7990', '7.103折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 135片/盒');
INSERT INTO `goodlist` VALUES ('97', '../images/r2c26.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '64576', '7991', '7.104折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 136片/盒');
INSERT INTO `goodlist` VALUES ('98', '../images/r2c27.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12464', '7992', '7.105折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 137片/盒');
INSERT INTO `goodlist` VALUES ('99', '../images/r2c28.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '745', '7993', '7.106折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 138片/盒');
INSERT INTO `goodlist` VALUES ('100', '../images/r2c29.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '456', '7994', '7.107折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 139片/盒');
INSERT INTO `goodlist` VALUES ('101', '../images/r2c30.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '4', '7995', '7.108折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 140片/盒');
INSERT INTO `goodlist` VALUES ('102', '../images/r2c31.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '575', '7996', '7.109折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 141片/盒');
INSERT INTO `goodlist` VALUES ('103', '../images/r2c32.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '57', '7997', '7.110折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 142片/盒');
INSERT INTO `goodlist` VALUES ('104', '../images/r2c33.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '754', '7998', '7.111折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 143片/盒');
INSERT INTO `goodlist` VALUES ('105', '../images/r2c34.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '7', '7999', '7.112折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 144片/盒');
INSERT INTO `goodlist` VALUES ('106', '../images/r2c35.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '12472', '8000', '7.113折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 145片/盒');
INSERT INTO `goodlist` VALUES ('107', '../images/r2c36.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '748', '8001', '7.114折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 146片/盒');
INSERT INTO `goodlist` VALUES ('108', '../images/r2c37.jpg', '../images/zz1.jpg', '../images/zz2.jpg', '../images/zz3.jpg', '../images/zc4.jpg', '5', '8002', '7.115折', '【香港直邮】【2件装 包邮包税】日本EVE白兔制药止痛药 147片/盒');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `userlock` varchar(255) DEFAULT NULL,
  `passwords` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '919304298@qq.com', '18977957634', '小橘子', 'x123456');
INSERT INTO `user` VALUES ('4', null, '13313262008', null, 'x12345');
INSERT INTO `user` VALUES ('5', '852369@qq.com', '15236987410', '大西瓜', 'l2541');
INSERT INTO `user` VALUES ('6', '123456@qq.com', null, null, 'x123456');
SET FOREIGN_KEY_CHECKS=1;
