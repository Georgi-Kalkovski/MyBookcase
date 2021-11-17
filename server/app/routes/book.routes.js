const { authJwt } = require("../middlewares");
const controller = require("../controllers/book.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/book/all",
        //controller.booksAccess
    );

    app.get("/api/book/mybooks",
        //[authJwt.verifyToken],
        //controller.myBooksAccess
    );

    app.get("/api/book/read",
        //controller.readBoard
    );

    app.get(
        "/api/book/upload",
        [authJwt.verifyToken],
        controller.uploadBoard
    );

    app.get(
        "/api/book/edit",
        //[authJwt.verifyToken],
        //controller.editBoard
    );

    app.get(
        "/api/book/delete",
        //[authJwt.verifyToken],
        //controller.deleteBoard
    );
};