"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hoge = exports.hoge = void 0;
var hoge = function (a, b) {
    return a + b;
};
exports.hoge = hoge;
var Hoge = /** @class */ (function () {
    function Hoge() {
    }
    Hoge.prototype.hoge = function () {
        console.log("hoge");
    };
    return Hoge;
}());
exports.Hoge = Hoge;
//# sourceMappingURL=hoge.js.map