"use strict";
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
/**
 * Created by dsmiley on 10/25/17.
 */
var InjectorDecorator_1 = require("../reflection/InjectorDecorator");
var InjectorDecorator_2 = require("../reflection/InjectorDecorator");
var EventDispatcherFactory_1 = require("../factory/EventDispatcherFactory");
var HttpServiceFactory_1 = require("../factory/HttpServiceFactory");
var Lavender = require("lavenderjs/lib");
var Context_1 = require("../context/Context");
/*
* This class is used for testing purposes only. It is not included in distributions
* */
var TestUtils = /** @class */ (function (_super) {
    __extends(TestUtils, _super);
    function TestUtils() {
        return _super.call(this) || this;
    }
    __decorate([
        InjectorDecorator_1.inject('TestContext'),
        __metadata("design:type", EventDispatcherFactory_1.EventDispatcherFactory)
    ], TestUtils.prototype, "eventDispatcherFactory", void 0);
    __decorate([
        InjectorDecorator_1.inject('TestContext'),
        __metadata("design:type", HttpServiceFactory_1.HttpServiceFactory)
    ], TestUtils.prototype, "httpFactory", void 0);
    __decorate([
        InjectorDecorator_1.inject('TestContext'),
        __metadata("design:type", Context_1.Context)
    ], TestUtils.prototype, "context", void 0);
    __decorate([
        InjectorDecorator_2.bindable(),
        __metadata("design:type", Object)
    ], TestUtils.prototype, "bindingTest", void 0);
    return TestUtils;
}(Lavender.Subject));
exports.TestUtils = TestUtils;
//# sourceMappingURL=TestUtils.js.map