"use strict";
/**
 * Created by dsmiley on 10/26/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var TestObject_1 = require("./TestObject");
var EventDispatcherFactory_1 = require("../factory/EventDispatcherFactory");
var HttpServiceFactory_1 = require("../factory/HttpServiceFactory");
var Decorators_1 = require("../reflection/Decorators");
var Decorators_2 = require("../reflection/Decorators");
var TestObjectSub = /** @class */ (function (_super) {
    __extends(TestObjectSub, _super);
    function TestObjectSub(context) {
        var _this = _super.call(this) || this;
        _this.context = context;
        return _this;
    }
    __decorate([
        Decorators_1.inject(),
        __metadata("design:type", EventDispatcherFactory_1.EventDispatcherFactory)
    ], TestObjectSub.prototype, "eventDispatcherFactory", void 0);
    __decorate([
        Decorators_1.inject(),
        __metadata("design:type", HttpServiceFactory_1.HttpServiceFactory)
    ], TestObjectSub.prototype, "httpFactory", void 0);
    TestObjectSub = __decorate([
        Decorators_2.injectable,
        __metadata("design:paramtypes", [Object])
    ], TestObjectSub);
    return TestObjectSub;
}(TestObject_1.TestObject));
exports.TestObjectSub = TestObjectSub;
//# sourceMappingURL=TestObjectSub.js.map