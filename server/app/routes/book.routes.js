const { authJwt } = require("../middlewares");
const controller = require("../controllers/book.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/book/all", //controller.allAccess);

  app.get("/api/book/read", //[authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/book/upload",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.uploadBoard
  );

  app.get(
    "/api/book/edit",
    //[authJwt.verifyToken, authJwt.isAdmin],
    //controller.adminBoard
  );

  app.get(
    "/api/book/delete",
    //[authJwt.verifyToken, authJwt.isAdmin],
    //controller.adminBoard
  );
};