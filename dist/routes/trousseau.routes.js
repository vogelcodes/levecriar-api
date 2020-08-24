"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var date_fns_1 = require("date-fns");
var trousseauRouter = express_1.Router();
var trousseaus = [];
trousseauRouter.post('/', function (request, response) {
    var _a = request.body, name = _a.name, dpp = _a.dpp, location = _a.location, userId = _a.userId;
    var parsedDpp = date_fns_1.parseISO(dpp);
    var trousseau = { name: name, dpp: dpp, parsedDpp: parsedDpp, location: location, userId: userId };
    trousseaus.push(trousseau);
    return response.json(trousseau);
});
exports.default = trousseauRouter;
