DROP TABLE IF EXISTS haraj_cache;
CREATE TABLE haraj_cache (
  guid       CHAR(32) PRIMARY KEY,
  ID         TEXT,
  url        TEXT,
  url_from   TEXT,
  created_at DATETIME
)
  DEFAULT CHARSET = utf8;