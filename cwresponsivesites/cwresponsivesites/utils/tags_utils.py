# coding=utf-8
class TagsUtils(object):
    def __init__(self, tags):
        self.tags = tags
        super(TagsUtils, self).__init__()

    def fix_tags(self):
        """
        We need to remove the ‘#’ from all tags pushed into the system
        :param tags:
        :return:
        """
        list = []
        for tag in self.tags:
            list.append(self._fix_tag(tag))

        return list

    def _fix_tag(self, tag):
        tag = tag.replace('#', '').replace('$', '').strip()
        return tag
