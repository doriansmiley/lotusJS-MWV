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
var ComponentMap_1 = require("./ComponentMap");
var Context = /** @class */ (function (_super) {
    __extends(Context, _super);
    function Context(config, params) {
        return _super.call(this, config, params) || this;
    }
    Context.prototype.startUp = function () {
        //override the component map instance to use our version
        this.componentMap = new ComponentMap_1.ComponentMap(this);
        _super.prototype.startUp.call(this);
        //IMPORTANT: must occur first so application event bus is configured
        this.eventDispatcher = EventDispatcherFactory_1.EventDispatcherFactory.getInstance().getEventDispatcher();
        this.commandMap = new CommandMap_1.CommandMap(this); //create factory if we require sub classes one day
        this.injector = new Injector_1.Injector(this); //create factory if we require sub classes one day
        this.mediatorMap = new MediatorMap_1.MediatorMap(this);
        this.mapCommands();
        this.mapObjects();
        this.mapMediators();
        this.mapTags();
    };
    Context.prototype.mapTags = function () {
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