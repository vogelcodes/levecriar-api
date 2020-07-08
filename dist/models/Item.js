"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Item = /** @class */ (function () {
    function Item(name, category, qty, trsId) {
        this.id = uuidv4_1.uuid();
        this.name = name;
        this.category = category;
        this.qty = qty;
        this.trsId = trsId;
    }
    return Item;
}());
exports.default = Item;
