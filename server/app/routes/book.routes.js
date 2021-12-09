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

    app.get("/api/book/read",
        controller.readBoard
    );

    app.get("/api/book/get/:id",
        controller.getBoard
    );

    app.get("/api/book/all",
        controller.allBoard
    );

    app.get("/api/book/mybooks",
        controller.allBoard
    );

    app.post(
        "/api/book/create",
        [authJwt.verifyToken],
        controller.createBoard
    );

    app.patch(
        "/api/book/edit/:id",
        [authJwt.verifyToken],
        controller.editBoard
    );

    app.delete(
        "/api/book/delete/:id",
        [authJwt.verifyToken],
        controller.deleteBoard
    );
};