CREATE TABLE harajs_cache (
  guid       CHAR(32) PRIMARY KEY,
  ID         TEXT,
  url        TEXT,
  url_from   TEXT,
  created_at DATETIME
)
  DEFAULT CHARSET = utf8;


CREATE TABLE harajs_history (
  guid       CHAR(32) PRIMARY KEY,
  ID         TEXT,
  url        TEXT,
  created_at DATETIME
)
  DEFAULT CHARSET = utf8;


CREATE TABLE harajs (
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
  DEFAULT CHARSET = utf8;
