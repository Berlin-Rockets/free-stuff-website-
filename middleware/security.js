module.exports = function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, PATCH, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization ,Origin, X-Requested-With, Accept, X-Custom-Header,X-API-KEY,X-Requested-With,Access-Control-Allow-Request-Method"
    );
    res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  };
  

  