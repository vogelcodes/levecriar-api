"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("./users.routes"));
var trousseau_routes_1 = __importDefault(require("./trousseau.routes"));
var routes = express_1.Router();
routes.use('/users', users_routes_1.default);
routes.use('/trousseau', trousseau_routes_1.default);
routes.get('/', function (request, response) {
    return response.send('<h1>API do app Enxoval de <a href="https://enxoval.levecriar.com.br">LeveCriar.com.br</a>');
});
exports.default = routes;
