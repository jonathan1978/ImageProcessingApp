"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./utilities/images"));
var app = express_1.default();
var port = 3000;
app.get('/api/images', function (req, res) {
    var fileName = req.query.fileName;
    if (fileName !== undefined) {
        images_1.default.transform(fileName);
        res.send(fileName);
    }
    else {
        console.log(req.query.fileName);
        res.send('images');
    }
});
//start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
exports.default = app;
