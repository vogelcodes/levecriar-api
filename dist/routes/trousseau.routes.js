"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var date_fns_1 = require("date-fns");
var Trousseau_1 = __importDefault(require("../models/Trousseau"));
var trousseauRouter = express_1.Router();
var trousseaus = [];
trousseauRouter.post('/', function (request, response) {
    var _a = request.body, name = _a.name, dpp = _a.dpp, location = _a.location, userId = _a.userId;
    var parsedDpp = date_fns_1.parseISO(dpp);
    var trousseau = new Trousseau_1.default(name, parsedDpp, location, userId);
    trousseaus.push(trousseau);
    return response.json(trousseau);
});
exports.default = trousseauRouter;
