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
-- Table structure for table `opensooq_phone`
--

CREATE TABLE IF NOT EXISTS `opensooq_phone` (
  `id`        INT(11) NOT NULL AUTO_INCREMENT,
  `phone`     TEXT    NOT NULL,
  `member_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = MyISAM
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 22;

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `ads_scrape` (
  `ID`         INT(11)    NOT NULL AUTO_INCREMENT,
  `Model_id`   INT(11)    NOT NULL,
  `Url`        TEXT       NOT NULL,
  `Url_from`   INT(11)    NOT NULL,
  `Created_at` BIGINT(20) NOT NULL,
  PRIMARY KEY (`ID`)
)
  ENGINE = MyISAM
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 42;

--
-- Table structure for table `cities`
--

CREATE TABLE IF NOT EXISTS `cities` (
  `id`   INT(11)      NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = MyISAM
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 22;

--
-- Table structure for table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id`              INT(11)  NOT NULL AUTO_INCREMENT,
  `id_ads`          INT(11)  NOT NULL,
  `id_His_response` INT(11)  NOT NULL,
  `text`            LONGTEXT NOT NULL,
  `Time_added_co`   INT(11)  NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = MyISAM
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 18;

--
-- Table structure for table `section`
--

CREATE TABLE IF NOT EXISTS `section` (
  `id`         INT(11)      NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(100) NOT NULL,
  `type`       VARCHAR(100) NOT NULL,
  `Documentto` VARCHAR(100) NOT NULL,
  `Contents`   VARCHAR(100) NOT NULL,
  `linkmodel`  VARCHAR(50)  NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = MyISAM
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 510;

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

--
-- Table structure for table `members`
--

CREATE TABLE IF NOT EXISTS `members` (
  `id`                 INT(11)     NOT NULL AUTO_INCREMENT,
  `username`           VARCHAR(35) NOT NULL,
  `password`           VARCHAR(32) NOT NULL,
  `groupnumber`        INT(2)      NOT NULL,
  `email`              VARCHAR(50) NOT NULL,
  `timeregister`       INT(11)     NOT NULL,
  `member_code`        VARCHAR(32) NOT NULL,
  `documentingmobile`  INT(11)     NOT NULL,
  `Documentingemail`   INT(11)     NOT NULL,
  `phone`              VARCHAR(20) NOT NULL,
  `sendtime`           INT(1)      NOT NULL,
  `active`             VARCHAR(5)  NOT NULL,
  `now`                VARCHAR(50) NOT NULL,
  `Lastactivity`       INT(50)     NOT NULL,
  `subscribe_1`        INT(1)      NOT NULL,
  `subscribe_2`        INT(1)      NOT NULL,
  `subscribe_3`        INT(1)      NOT NULL,
  `The_pay_commission` INT(11)     NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = MyISAM
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 55;

