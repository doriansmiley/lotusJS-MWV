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
var Lavender = require("lavenderjs/lib");
var ComponentEvent_1 = require("../control/events/ComponentEvent");
/**
 * Created by dsmiley on 7/26/17.
 */
var AbstractMediator = /** @class */ (function (_super) {
    __extends(AbstractMediator, _super);
    function AbstractMediator(componentInstance, context) {
        var _this = _super.call(this) || this;
        _this.id = Lavender.UuidUtils.generateUUID();
        _this.componentInstance = componentInstance;
        _this.context = context;
        if (!_this.componentInstance.ready) {
            _this.componentInstance.addEventListener(ComponentEvent_1.ComponentEvent.READY, _this, 'init');
        }
        else {
            _this.init();
        }
        return _this;
    }
    Object.defineProperty(AbstractMediator.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
            this.notify(value, 'id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractMediator.prototype, "componentInstance", {
        get: function () {
            return this._componentInstance;
        },
        set: function (value) {
            this._componentInstance = value;
            this.notify(value, 'componentInstance');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractMediator.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (value) {
            this._context = value;
            this.notify(value, 'context');
        },
        enumerable: true,
        configurable: true
    });
    AbstractMediator.prototype.addEventListeners = function () {
    };
    AbstractMediator.prototype.removeEventListeners = function () {
        if (this.componentInstance.canListen(ComponentEvent_1.ComponentEvent.READY, this, 'init')) {
            this.componentInstance.removeEventListener(ComponentEvent_1.ComponentEvent.READY, this, 'init');
        }
    };
    AbstractMediator.prototype.setUpBindings = function () {
    };
    AbstractMediator.prototype.removeBindings = function () {
        this.binder.unbindAll();
    };
    AbstractMediator.prototype.toString = function () {
        return this.id;
    };
    AbstractMediator.prototype.init = function () {
        this.addEventListeners();
        this.setUpBindings();
    };
    AbstractMediator.prototype.destroy = function () {
        this.removeEventListeners();
        this.removeBindings();
        this.id = null;
        this.componentInstance = null;
    };
    return AbstractMediator;
}(Lavender.Subject));
exports.AbstractMediator = AbstractMediator;
//# sourceMappingURL=AbstractMediator.js.map