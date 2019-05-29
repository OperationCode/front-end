// import React from 'react';
import RssParser from 'rss-parser';

const parser = new RssParser();

const Podcastdata = {
  general: [],
};

parser.parseURL('http://operationcode.libsyn.com/rss', (error, feed) => {
  feed.items.forEach(entry => {
    // console.log(entry);
    Podcastdata.general.push({
      image: entry.itunes.image,
      source: entry.link,
      name: entry.title,
      story: entry.contentSnippet,
    });
  });
});

export default Podcastdata;
