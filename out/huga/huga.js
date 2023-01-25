"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Huga = void 0;
var hoge_1 = require("../hoge");
var Huga = /** @class */ (function (_super) {
    __extends(Huga, _super);
    function Huga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Huga.prototype.hoge = function () {
        console.log("huga");
    };
    return Huga;
}(hoge_1.Hoge));
exports.Huga = Huga;
//# sourceMappingURL=huga.js.map