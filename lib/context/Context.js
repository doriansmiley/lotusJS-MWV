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
/**
 * Created by dsmiley on 9/20/17.
 */
var Lotus = require("lotusjs-components/lib");
var CommandMap_1 = require("./CommandMap");
var Injector_1 = require("./Injector");
var MediatorMap_1 = require("./MediatorMap");
var EventDispatcherFactory_1 = require("../factory/EventDispatcherFactory");
var Context = /** @class */ (function (_super) {
    __extends(Context, _super);
    function Context(config, params) {
        var _this = _super.call(this, config, params) || this;
        //IMPORTANT: must occur first so application event bus is configured
        _this.eventDispatcher = EventDispatcherFactory_1.EventDispatcherFactory.getInstance().getEventDispatcher();
        _this.commandMap = new CommandMap_1.CommandMap(_this); //create factory if we require sub classes one day
        _this.injector = new Injector_1.Injector(_this); //create factory if we require sub classes one day
        _this.mediatorMap = new MediatorMap_1.MediatorMap(_this);
        _this.startUp();
        return _this;
    }
    Context.prototype.startUp = function () {
        _super.prototype.startUp.call(this);
        this.mapCommands();
        this.mapObjects();
        this.mapMediators();
    };
    Context.prototype.mapCommands = function () {
    };
    Context.prototype.mapObjects = function () {
    };
    Context.prototype.mapMediators = function () {
    };
    return Context;
}(Lotus.Context));
exports.Context = Context;
//# sourceMappingURL=Context.js.map