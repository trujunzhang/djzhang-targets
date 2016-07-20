CREATE TABLE fiveecommerces_cache (
  `id`            INT(11) NOT NULL AUTO_INCREMENT,
  `url`           TEXT,
  `thumbnail_url` TEXT,
  `url_from`      TEXT,
  `created_at`    DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE fiveecommerces_history (
  `id`         INT(11) NOT NULL AUTO_INCREMENT,
  `url`        TEXT,
  `post_id`    TEXT,
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE fiveecommerces_page (
  `id`         INT(11) NOT NULL AUTO_INCREMENT,
  `url_from`   TEXT,
  `page_index` INT(11),
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;

