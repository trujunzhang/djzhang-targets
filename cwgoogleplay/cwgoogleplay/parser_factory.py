from enum import Enum


class ParserTypes(Enum):
    browser = 1
    response = 2


class ParserFactory:
    def __init__(self):
        pass

    # This is the factory method
    @staticmethod
    def get_Parser(parserType):

        from cwgoogleplay.parser.browse_parser import BrowseParser
        from cwgoogleplay.parser.response_parser import ResponseParse

        if ParserTypes.browser == parserType:
            return BrowseParser()
        elif ParserTypes.response == parserType:
            return ResponseParse()
        else:
            return None
