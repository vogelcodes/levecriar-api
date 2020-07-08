"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var User = /** @class */ (function () {
    function User(name, email) {
        this.id = uuidv4_1.uuid();
        this.email = email;
        this.name = name;
    }
    return User;
}());
exports.default = User;
