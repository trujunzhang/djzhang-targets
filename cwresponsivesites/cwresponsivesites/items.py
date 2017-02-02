# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html


from enum import Enum
import scrapy
import logging

from cwresponsivesites.utils.date_utils import DateUtils
from cwresponsivesites.utils.slugify import slugify


class CacheItem(scrapy.Item):
    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()

    url = scrapy.Field()
    created_at = scrapy.Field()
    thumbnail_url = scrapy.Field()
    post_id = scrapy.Field()

    @classmethod
    def get_default(cls, url, url_from, thumbnail_url=''):
        from cwresponsivesites.utils.crawl_utils import CrawlUtils
        return CacheItem(
            url_from=url_from,
            thumbnail_url=thumbnail_url,
            url=url,
            post_id=CrawlUtils.get_guid(url),
            created_at=DateUtils.get_utc_date().replace(microsecond=0).isoformat(' ')
        )


class HistoryItem(scrapy.Item):
    url = scrapy.Field()
    created_at = scrapy.Field()
    post_id = scrapy.Field()

    @classmethod
    def get_default(cls, url):
        from cwresponsivesites.utils.crawl_utils import CrawlUtils
        return HistoryItem(
            url=url,
            post_id=CrawlUtils.get_guid(url),
            created_at=DateUtils.get_utc_date().replace(microsecond=0).isoformat(' '),
        )


class LogsItemTypes(Enum):
    content = 'content'  # empty
    image = 'image'  # empty
    title = 'title'  # empty
    tags = 'tags'  # empty
    newpost = 'newpost'  # exception
    image_downloader = 'image downloader'  # exception
    response_status404 = 'response_status_404'
    repeated_scraped_url = 'repeated_scraped_url'
    no_author_id = 'no_author_id'


class LogsItem(scrapy.Item):
    created_at = scrapy.Field()
    message = scrapy.Field()
    detail = scrapy.Field()
    url = scrapy.Field()
    log_type = scrapy.Field()

    @classmethod
    def get_default(cls, message, detail, url, log_type):
        return LogsItem(
            message=message,
            detail=detail,
            url=url,
            log_type=log_type.value,
            created_at=DateUtils.get_utc_date().replace(microsecond=0).isoformat(' '),
        )


class PageItem(scrapy.Item):
    """
    When scraping the whole pages for a website,
    We imagine that the website have 1000 pages, scrape 10 pages per time from the newest to the oldest.

    page_index variable record the index of the pages currently. Next time page_index will be (page_index + 10)
    """
    url_from = scrapy.Field()
    # Record the current page index
    page_index = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_empty_item(cls, url_from):
        return PageItem(
            url_from=url_from,
            page_index=1,
            created_at=DateUtils.get_utc_date().replace(microsecond=0).isoformat(' '),
        )

    @classmethod
    def get_default(cls, url_from, page_index):
        return PageItem(
            url_from=url_from,
            page_index=page_index,
            created_at=DateUtils.get_utc_date().replace(microsecond=0).isoformat(' '),
        )


class PostMeta(scrapy.Item):
    _id = scrapy.Field()
    url = scrapy.Field()
    value = scrapy.Field()

    @classmethod
    def get_default(cls, id, url, image_meta):
        return PostMeta(
            _id=id,
            url=url,
            value=image_meta
        )


class WDPost(scrapy.Item):
    url = scrapy.Field()
    title = scrapy.Field()
    image_src = scrapy.Field()
    image_uuid = scrapy.Field()
    content = scrapy.Field()

    url_from = scrapy.Field()

    # cloudianry images
    cloudinaryId = scrapy.Field()

    @classmethod
    def get_default(cls, url, url_from, title, image_src, thumbnail_url, content, topicsName, have_tags=True):
        if not image_src:
            image_src = thumbnail_url

        image_uuid = None
        if image_src:
            # Some image url contains empty or special charactor,need to encode it.
            from twisted.python._url import URL
            try:
                # 16/09/2016:
                #     TypeError: expected unicode for scheme, got 'http' (image_src = URL.fromText(image_src).asURI().asText())
                #     So throwing an exception here.
                image_src = URL.fromText(image_src).asURI().asText()
            except Exception as e:
                pass

            from cwresponsivesites.utils.crawl_utils import CrawlUtils
            image_uuid = CrawlUtils.get_guid(image_src)

        return WDPost(
            url=url,
            url_from=url_from,
            title=title,
            image_src=image_src,
            image_uuid=image_uuid,
            content=content
        )


class TopicItem(scrapy.Item):
    _id = scrapy.Field()
    name = scrapy.Field()
    slug = scrapy.Field()

    # Topics.config.STATUS_APPROVED = 1;
    # Topics.config.STATUS_DELETED = 2;
    status = scrapy.Field()
    is_ignore = scrapy.Field()

    statistic = scrapy.Field()

    @classmethod
    def __filter_topics_keys(self, topics_filter_keys, name):
        topics_keys = topics_filter_keys.lower().strip().split(',')
        for key in topics_keys:
            if key in name.lower():
                return True

        return False

    @classmethod
    def get_default(cls, topics_filter_keys, name):
        name = name.strip()

        from cwresponsivesites.utils.crawl_utils import CrawlUtils

        guid = CrawlUtils.get_guid(name.lower())
        return TopicItem(
            _id=guid,
            name=name,
            slug=slugify(name),
            status=1,
            is_ignore=TopicItem.__filter_topics_keys(topics_filter_keys, name=name),
            statistic={"postCount": 1}
        )


class MongoPost(scrapy.Item):
    url = scrapy.Field()

    _id = scrapy.Field()
    createdAt = scrapy.Field()
    author = scrapy.Field()
    postedAt = scrapy.Field()
    body = scrapy.Field()
    title = scrapy.Field()
    dummySlug = scrapy.Field()
    isDummy = scrapy.Field()
    userId = scrapy.Field()
    thumbnailUrl = scrapy.Field()
    slug = scrapy.Field()
    isFuture = scrapy.Field()
    viewCount = scrapy.Field()
    clickCount = scrapy.Field()
    sticky = scrapy.Field()
    inactive = scrapy.Field()
    commentCount = scrapy.Field()
    upvotes = scrapy.Field()
    downvotes = scrapy.Field()
    baseScore = scrapy.Field()
    score = scrapy.Field()
    htmlBody = scrapy.Field()

    sourceFrom = scrapy.Field()

    # cloudianry images
    cloudinaryId = scrapy.Field()

    @classmethod
    def convert(cls, item, topic_ids):
        title = item['title'].strip()
        content = item['content']

        from cwresponsivesites.utils.crawl_utils import CrawlUtils

        dummySlug = slugify(title)
        slug = dummySlug

        sourceFrom = CrawlUtils.get_domain(item['url'])

        return MongoPost(
            url=item['url'],
            _id=CrawlUtils.get_guid(item['url']),
            createdAt=DateUtils.get_utc_date(),
            author=item['url_from'],
            postedAt=DateUtils.get_utc_date(),
            body=item['content'],
            title=title,
            dummySlug=dummySlug,
            isDummy=True,
            userId='yv57iwi6Zq8jaM7uD',
            thumbnailUrl=item['image_src'],
            slug=slug,
            isFuture=False,
            viewCount=0,
            clickCount=0,
            sticky=False,
            inactive=False,
            commentCount=0,
            upvotes=0,
            downvotes=0,
            baseScore=0,
            score=0,
            htmlBody=content,
            cloudinaryId=item['cloudinaryId'],
            sourceFrom=sourceFrom
        )
