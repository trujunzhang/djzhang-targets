CREATE TABLE politicls_caches (
  `id`         INT(11) NOT NULL AUTO_INCREMENT,
  `model_id`   TEXT,
  `url`        TEXT,
  `url_from`   TEXT,
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE politicls_histories (
  `model_id`   INT(22) PRIMARY KEY,
  `ads_id`     TEXT,
  `url`        TEXT,
  `created_at` DATETIME
)
  DEFAULT CHARSET = utf8mb4;

