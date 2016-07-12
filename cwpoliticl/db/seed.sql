CREATE TABLE politicls_caches (
  `id`         INT(11) NOT NULL AUTO_INCREMENT,
  `url`        TEXT,
  `url_from`   TEXT,
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE politicls_histories (
  `url`        TEXT,
  `created_at` DATETIME
)
  DEFAULT CHARSET = utf8mb4;

