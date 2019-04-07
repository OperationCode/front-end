const { createServer } = require('http');
const { parse } = require('url');
const { join } = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? 3000 : 3001;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const rootStaticFiles = ['/robots.txt', '/favicon.ico'];

    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, err => {
    if (err) {
      throw err;
    }
  });
});
