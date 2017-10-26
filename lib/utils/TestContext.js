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
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("../context/Context");
var EventDispatcherFactory_1 = require("../factory/EventDispatcherFactory");
var HttpServiceFactory_1 = require("../factory/HttpServiceFactory");
var TestObject_1 = require("../utils/TestObject");
/**
 * This class is used for testing purposes only. It is not included in distributions
 */
var TestContext = /** @class */ (function (_super) {
    __extends(TestContext, _super);
    function TestContext(model, params) {
        return _super.call(this, model, params) || this;
    }
    TestContext.prototype.toString = function () {
        return 'TestContext';
    };
    TestContext.prototype.mapObjects = function () {
        this.injector.mapObject(TestObject_1.TestObject, TestObject_1.TestObject, false);
        this.injector.mapObject('TestObjectWithParams', TestObject_1.TestObject, false, ['1234', 'myLabel']);
        this.injector.mapObject('TestObjectWithParams2', TestObject_1.TestObject, false, ['4321', 'label']);
        this.injector.mapObject('TestObject', TestObject_1.TestObject, false);
        this.injector.mapSingletonInstance(EventDispatcherFactory_1.EventDispatcherFactory, EventDispatcherFactory_1.EventDispatcherFactory.getInstance());
        this.injector.mapSingletonInstance(HttpServiceFactory_1.HttpServiceFactory, HttpServiceFactory_1.HttpServiceFactory.getInstance());
    };
    return TestContext;
}(Context_1.Context));
exports.TestContext = TestContext;
//# sourceMappingURL=TestContext.js.map