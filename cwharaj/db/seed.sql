CREATE TABLE ads_caches (
  guid       CHAR(32) PRIMARY KEY,
  ID         TEXT,
  url        TEXT,
  url_from   TEXT,
  created_at DATETIME
)
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE ads_histories (
  guid       CHAR(32) PRIMARY KEY,
  ID         TEXT,
  url        TEXT,
  created_at DATETIME
)
  DEFAULT CHARSET = utf8mb4;


--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `MemberID` int(11) NOT NULL,
  `AdvID` int(11) NOT NULL,
  `Comment` text NOT NULL,
  `Date` bigint(20) NOT NULL,
  `ReportCount` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=42 ;


--
-- Table structure for table `section`
--

CREATE TABLE IF NOT EXISTS `section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `Documentto` varchar(100) NOT NULL,
  `Contents` varchar(100) NOT NULL,
  `linkmodel` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=510 ;

--
-- Table structure for table `ads`
--

CREATE TABLE IF NOT EXISTS `ads` (
  `id`                   INT(11)      NOT NULL AUTO_INCREMENT,
  `ads_title`            VARCHAR(100) NOT NULL,
  `ads_city`             VARCHAR(100) NOT NULL,
  `ads_tags_R`           VARCHAR(100) NOT NULL,
  `ads_tags_F`           VARCHAR(100) NOT NULL,
  `ads_tags_FF`          VARCHAR(100) NOT NULL,
  `ads_contact`          VARCHAR(100) NOT NULL,
  `ads_body`             LONGTEXT     NOT NULL,
  `image_link`           LONGTEXT     NOT NULL,
  `type_ads_other_final` VARCHAR(100) NOT NULL,
  `un_model`             VARCHAR(100) NOT NULL,
  `status`               INT(100)     NOT NULL,
  `fixing`               INT(100)     NOT NULL,
  `Time_added`           INT(11)      NOT NULL,
  `His_announcement`     INT(11)      NOT NULL,
  `type_ads_or`          INT(1)       NOT NULL,
  `close_ads`            INT(11)      NOT NULL,
  `Last_updated_Ad`      INT(11)      NOT NULL,
  `closecomment`         INT(11)      NOT NULL,
  `fixed_home`           INT(11)      NOT NULL,
  `fixed_tub`            INT(11)      NOT NULL,
  `fixed_sec`            INT(11)      NOT NULL,
  `fixed_sec2`           INT(11)      NOT NULL,
  `fixed_sec3`           INT(11)      NOT NULL,
  `timer_mazad`          INT(11)      NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = MyISAM
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 24;

