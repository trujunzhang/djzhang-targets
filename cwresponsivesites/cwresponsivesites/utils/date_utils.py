class DateUtils(object):
    @classmethod
    def get_utc_date(cls):
        from datetime import datetime
        dt = datetime.utcnow()
        return dt
