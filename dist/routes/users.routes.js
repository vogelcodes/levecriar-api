"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = __importDefault(require("../models/User"));
var usersRouter = express_1.Router();
var users = [];
usersRouter.post('/', function (request, response) {
    var _a = request.body, name = _a.name, email = _a.email;
    var user = new User_1.default(name, email);
    users.push(user);
    return response.json(user);
});
exports.default = usersRouter;
