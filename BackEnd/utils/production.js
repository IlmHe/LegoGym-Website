'use strict';

module.exports = (legoapp, port) => {
  legoapp.enable('trust proxy');
  legoapp.use ((req, res, next) => {
    if (req.secure) {
      next();
    } else {
      const proxypath = process.env.PROXY_PASS || ''
      res.redirect(301, `https://${req.headers.host}${proxypath}${req.url}`);
    }
  });
  legoapp.listen(port);
};