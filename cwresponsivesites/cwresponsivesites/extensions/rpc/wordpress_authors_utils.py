class WDAuthorsUtils(object):
    def __init__(self):
        self.dict = self._read_authors_from_cvs()
        super(WDAuthorsUtils, self).__init__()

    def _read_authors_from_cvs(self):
        dict = {}

        import inspect, os
        path = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))  # script directory

        import csv
        from os.path import expanduser
        csv_path = '{}/{}'.format(expanduser("~"), 'politicl.users.csv')

        import logging
        logging.debug("  The politicl.users.csv's path: {}, exist:{}".format(csv_path, os.path.exists(csv_path)))

        with open(csv_path) as f_obj:
            reader = csv.DictReader(f_obj, delimiter=',')
            for line in reader:
                nickname = line["user_nicename"]
                if (nickname):
                    user_id = line["ID"]
                    display_name = line["display_name"]
                    author = {
                        'id': user_id,
                        'name': display_name
                    }
                    dict[nickname.lower()] = author

        return dict

    def _get_authors(self, users):
        """
        Decrepated:

        Issue:(8/22/2016)
           Sometimes, when reading whole authors from the wordpress host, it can lost some authors.
           So replace it with reading the csv file exported from the wordpress using "Export User Data" plugin.

           See '_read_authors_from_cvs()' method.
        :return:
        """
        dict = {}
        for user in users:
            role = user.roles[0]
            if role == 'author':
                nickname = user.nicename
                user_id = user.id
                display_name = user.display_name
                author = {
                    'id': user_id,
                    'name': display_name
                }
                dict[nickname] = author

        return dict

    def get_author_id(self, type):
        type = type.lower()
        if type in self.dict:
            author = self.dict[type]
            return author['id']

    def get_author_name(self, type):
        if type in self.dict:
            author = self.dict[type]
            return author['name']
