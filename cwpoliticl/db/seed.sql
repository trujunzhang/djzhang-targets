CREATE TABLE politicls_cache (
  `id`            INT(11) NOT NULL AUTO_INCREMENT,
  `url`           TEXT,
  `thumbnail_url` TEXT,
  `url_from`      TEXT,
  `created_at`    DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE politicls_history (
  `id`         INT(11) NOT NULL AUTO_INCREMENT,
  `url`        TEXT,
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;

