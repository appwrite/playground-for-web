var express = require("express");

var app = express();
const middleware = require("./middleware")

middleware();

var server = app.listen(8000, function() {
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});