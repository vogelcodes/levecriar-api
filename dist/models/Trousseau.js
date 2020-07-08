"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Trousseau = /** @class */ (function () {
    function Trousseau(name, dpp, location, userId) {
        this.id = uuidv4_1.uuid();
        this.name = name;
        this.dpp = dpp;
        this.location = location;
        this.userId = userId;
        this.list = [];
    }
    return Trousseau;
}());
exports.default = Trousseau;
