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


CREATE TABLE ads (
  guid        CHAR(32) PRIMARY KEY,
  url         TEXT,
  created_at  DATETIME,
  updated_at  DATETIME,

  ID          TEXT,
  city        TEXT,
  time        TEXT,
  title       TEXT,
  pictures    TEXT,
  subject     TEXT,
  contact     TEXT,
  number      TEXT,
  url_from    TEXT,

  address     TEXT,
  memberName  TEXT,
  description TEXT,
  section     TEXT
)
  DEFAULT CHARSET = utf8mb4;
