const path = require('path');
const express = require('express');

const expressMiddleWare = router => {
  router.use('/static', express.static(path.join(__dirname, '../public/static')));
};

module.exports = expressMiddleWare;
