class DatabaseManager(object):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(DatabaseManager, self).__init__()
        self.host = host
        self.port = port
        self.user = user
        self.passwd = passwd
        self.db = db
        self.collection_name = collection_name

