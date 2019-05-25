// import React from 'react';
import RssParser from 'rss-parser';

const parser = new RssParser();

const podcastdata = {
  general: [],
};

parser.parseURL('http://operationcode.libsyn.com/rss', (error, feed) => {
  feed.items.forEach(entry => {
    podcastdata.general.push({
      image: entry.itunes.image,
      source: entry.link,
      name: entry.title,
      story: entry.content,
    });
  });
});

export default podcastdata;
