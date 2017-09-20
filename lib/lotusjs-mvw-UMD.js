(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Lavender"), require("Lotus"));
	else if(typeof define === 'function' && define.amd)
		define("LotusMVW", ["Lavender", "Lotus"], factory);
	else if(typeof exports === 'object')
		exports["LotusMVW"] = factory(require("Lavender"), require("Lotus"));
	else
		root["LotusMVW"] = factory(root["Lavender"], root["Lotus"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
var Lotus = __webpack_require__(2);
var Lavender = __webpack_require__(0);
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
            _this.componentInstance.addEventListener(Lotus.ComponentEvent.READY, _this, 'init');
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
        if (this.componentInstance.canListen(Lotus.ComponentEvent.READY, this, 'init')) {
            this.componentInstance.removeEventListener(Lotus.ComponentEvent.READY, this, 'init');
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommandMap = /** @class */ (function () {
    function CommandMap(context) {
        //Note: this could be improved by creating read only accessor methods for instanceMap and eventFunctionMap
        this.eventFunctionMap = {};
        this.instanceMap = {};
        this.context = context;
    }
    CommandMap.prototype.addCommand = function (eventType, handler, functionName, useSingleton) {
        if (functionName === void 0) { functionName = 'execute'; }
        if (useSingleton === void 0) { useSingleton = false; }
        if (this.eventFunctionMap[eventType] === null || this.eventFunctionMap[eventType] === undefined) {
            this.eventFunctionMap[eventType] = [];
        }
        if (this.hasCommandMap(eventType, handler, functionName)) {
            return; //don't add the handler/function twice
        }
        this.eventFunctionMap[eventType].push({ eventType: eventType, handler: handler, functionName: functionName, useSingleton: useSingleton });
        if (useSingleton) {
            if (this.instanceMap[eventType] === null || this.instanceMap[eventType] === undefined) {
                this.instanceMap[eventType] = {};
            }
            if (this.instanceMap[eventType][handler] === null || this.instanceMap[eventType][handler] === undefined) {
                this.instanceMap[eventType][handler] = new handler(this.context);
            }
        }
        if (!this.context.eventDispatcher.canListen(eventType, this, 'routeEventToCommand')) {
            this.context.eventDispatcher.addEventListener(eventType, this, 'routeEventToCommand');
        }
    };
    CommandMap.prototype.hasCommandMap = function (eventType, handler, functionName) {
        var hasCommand = false;
        if (this.eventFunctionMap[eventType] !== null && this.eventFunctionMap[eventType] !== undefined) {
            var mapArray = this.eventFunctionMap[eventType];
            for (var itemIndex = 0; itemIndex < mapArray.length; itemIndex++) {
                var item = mapArray[itemIndex];
                if (item.handler == handler && item.functionName == functionName) {
                    hasCommand = true;
                    break;
                }
            }
        }
        return hasCommand;
    };
    CommandMap.prototype.removeCommand = function (eventType, handler) {
        if (this.eventFunctionMap[eventType] !== null && this.eventFunctionMap[eventType] !== undefined) {
            var mapArray = this.eventFunctionMap[eventType];
            for (var itemIndex = mapArray.length - 1; itemIndex >= 0; itemIndex--) {
                var item = mapArray[itemIndex];
                if (item.handler == handler) {
                    //remove the item form the array
                    switch (itemIndex) {
                        case 0:
                            mapArray.shift();
                            break;
                        case mapArray.length - 1:
                            mapArray.pop();
                            break;
                        default:
                            var head = mapArray.slice(0, itemIndex);
                            var tail = mapArray.slice(itemIndex + 1);
                            mapArray = head.concat(tail);
                            break;
                    }
                }
            }
            if (this.eventFunctionMap[eventType].length <= 0) {
                this.context.eventDispatcher.removeEventListener(eventType, this, 'routeEventToCommand');
                delete this.eventFunctionMap[eventType];
            }
        }
    };
    CommandMap.prototype.removeAllCommands = function () {
        this.eventFunctionMap = {};
        this.instanceMap = {};
        this.context.eventDispatcher.removeAllEventListeners(this);
    };
    CommandMap.prototype.routeEventToCommand = function (event) {
        if (this.eventFunctionMap[event.type] !== null && this.eventFunctionMap[event.type] !== undefined) {
            var mapArray = this.eventFunctionMap[event.type];
            for (var itemIndex = 0; itemIndex < mapArray.length; itemIndex++) {
                var item = mapArray[itemIndex];
                if (item.useSingleton) {
                    this.instanceMap[item.event.type][item.handler][item.functionName]();
                }
                else {
                    var instance = void 0;
                    if (typeof item.handler === 'object') {
                        instance = item.handler;
                    }
                    else {
                        //IMPORTANT: only constructor function will get the context! This is by design as it's assumed preconstructed objects have all required dependencies
                        instance = new item.handler(this.context);
                    }
                    instance[item.functionName](event);
                }
            }
        }
    };
    return CommandMap;
}());
exports.CommandMap = CommandMap;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Injector = /** @class */ (function () {
    function Injector(context) {
        this.typeMap = [];
        this.context = context;
        this.objectMap = {};
    }
    Injector.prototype.mapObject = function (key, constructor, useSingleton) {
        if (useSingleton === void 0) { useSingleton = false; }
        if (typeof key == 'function') {
            var mapIndex = -1;
            this.typeMap.forEach(function (value, index) {
                if (value.constructor == constructor) {
                    mapIndex = index;
                    return false;
                }
            });
            //TODO:refactror to overrite index
            if (mapIndex < 0) {
                this.typeMap.push({ constructor: constructor, useSingleton: useSingleton, instance: null, type: key });
            }
        }
        else {
            //instantiate singleton instance upon request is more efficient
            this.objectMap[key] = { constructor: constructor, useSingleton: useSingleton, instance: null };
        }
    };
    Injector.prototype.mapSingletonInstance = function (key, instance) {
        if (typeof key == 'function') {
            var mapIndex = -1;
            this.typeMap.forEach(function (value, index) {
                if (value.instance == instance) {
                    mapIndex = index;
                    return false;
                }
            });
            //TODO:refactror to overrite index
            if (mapIndex < 0) {
                this.typeMap.push({ constructor: null, useSingleton: true, instance: instance });
            }
        }
        else {
            //map injector as sigleton using the supplied instance
            //this method is very useful for mapping objects that are themselves singletons and may have already been constructed
            //prime example is the model wich generally is constructed before injections are defined
            this.objectMap[key] = { constructor: null, useSingleton: true, instance: instance };
        }
    };
    Injector.prototype.inject = function (key) {
        if (typeof key == 'function') {
            var map;
            this.typeMap.forEach(function (value, index) {
                if (value.type == key || value.instance instanceof key) {
                    map = value;
                    return false;
                }
            });
            if (map) {
                if (map['useSingleton']) {
                    if (map['instance'] === null) {
                        map['instance'] = new map.constructor();
                    }
                    return map['instance'];
                }
                else {
                    return new map.constructor();
                }
            }
        }
        else {
            if (this.objectMap[key] !== null && this.objectMap[key] !== undefined) {
                if (this.objectMap[key].useSingleton) {
                    if (this.objectMap[key].instance === null) {
                        this.objectMap[key].instance = new this.objectMap[key].constructor();
                    }
                    return this.objectMap[key].instance;
                }
                else {
                    return new this.objectMap[key].constructor();
                }
            }
        }
        throw new Error('Lotus.Injector.prototype.getObject: could not find object for key: ' + key);
    };
    return Injector;
}());
exports.Injector = Injector;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Lavender = __webpack_require__(0);
/**
 * Created by dsmiley on 7/26/17.
 */
var MediatorMap = /** @class */ (function () {
    function MediatorMap(context) {
        //Note: this could be improved by creating read only accessor methods for tagMap and eventFunctionMap
        this._tagConstructorMap = {};
        this._mediatorInstanceMap = {};
        this.context = context;
    }
    Object.defineProperty(MediatorMap.prototype, "tagConstructorMap", {
        get: function () {
            return this._tagConstructorMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMap.prototype, "mediatorInstanceMap", {
        get: function () {
            return this._mediatorInstanceMap;
        },
        enumerable: true,
        configurable: true
    });
    MediatorMap.prototype.add = function (tagName, mediatorConstructor, useSingleton) {
        if (useSingleton === void 0) { useSingleton = false; }
        if (this.hasMediatorMap(tagName, mediatorConstructor)) {
            return; //don't add the mediatorConstructor/function twice
        }
        this.tagConstructorMap[tagName] = { useSingleton: useSingleton, constructor: mediatorConstructor, id: Lavender.UuidUtils.generateUUID(), name: mediatorConstructor.toString() };
    };
    MediatorMap.prototype.remove = function (tagName, mediatorConstructor) {
        if (!this.hasMediatorMap(tagName, mediatorConstructor)) {
            return; //don't add the mediatorConstructor/function twice
        }
        var mapId = this.tagConstructorMap[tagName].id;
        this.tagConstructorMap[tagName] = null;
        delete this.tagConstructorMap[tagName];
        if (this._mediatorInstanceMap[mapId] === null || this._mediatorInstanceMap[mapId] === undefined) {
            return; //mo mediators were applied to this mapping
        }
        //iterate in reverse over all instance and destroy
        for (var i = 0; i < this._mediatorInstanceMap[mapId].length; i++) {
            this._mediatorInstanceMap[mapId][i].destroy();
        }
        //make the array eligible for garbage collection
        this._mediatorInstanceMap[mapId] = null;
        delete this._mediatorInstanceMap[mapId];
        return mapId; //return mapId to help enable better tests
    };
    MediatorMap.prototype.apply = function (tagName, componentInstance) {
        var map = this.tagConstructorMap[tagName];
        if (!map) {
            return; //no mediator found for this tag
        }
        if (this._mediatorInstanceMap[map.id] === null || this._mediatorInstanceMap[map.id] === undefined) {
            this._mediatorInstanceMap[map.id] = [];
        }
        if (map.useSingleton) {
            if (this._mediatorInstanceMap[map.id].length == 0) {
                this._mediatorInstanceMap[map.id].push(new map.constructor(componentInstance, this.context));
            }
        }
        else {
            this._mediatorInstanceMap[map.id].push(new map.constructor(componentInstance, this.context));
        }
    };
    MediatorMap.prototype.hasMediatorMap = function (tagName, mediatorConstructor) {
        return (this.tagConstructorMap.hasOwnProperty(tagName) && this.tagConstructorMap[tagName].name == mediatorConstructor.toString());
    };
    return MediatorMap;
}());
exports.MediatorMap = MediatorMap;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
var Lavender = __webpack_require__(0);
var ActionSuccessEvent_1 = __webpack_require__(8);
var ActionErrorEvent_1 = __webpack_require__(7);
/**
 * Created by dsmiley on 7/28/17.
 */
var AbstractCommand = /** @class */ (function (_super) {
    __extends(AbstractCommand, _super);
    function AbstractCommand(context) {
        var _this = _super.call(this) || this;
        _this.context = context;
        _this.service = context.injector.inject('service');
        _this.parser = context.injector.inject('parser');
        _this.opModel = context.injector.inject('opModel');
        _this.errorModel = context.injector.inject('errorModel');
        return _this;
    }
    AbstractCommand.prototype.execute = function (event) {
        if (this.service === null || this.service === undefined || this.opModel === null || this.opModel === undefined || this.parser === null || this.parser === undefined) {
            this.executionError();
        }
        this.opModel.asyncOperationComplete = false;
        this.opModel.asyncOperationCount += 1;
        return this.executeServiceMethod();
    };
    //method must return a requestID
    //Override this method in subclasses
    AbstractCommand.prototype.executeServiceMethod = function () {
        return null;
    };
    //Override this method in subclasses
    //it should parse the result and return the resulting Object tree
    AbstractCommand.prototype.parseResponse = function (result) {
        return null;
    };
    AbstractCommand.prototype.dispatchSuccess = function (parsedResult) {
        var doneEvent = new ActionSuccessEvent_1.ActionSuccessEvent(ActionSuccessEvent_1.ActionSuccessEvent.SUCCESS, { result: parsedResult });
        this.dispatch(doneEvent);
    };
    AbstractCommand.prototype.success = function (result) {
        try {
            //result is instance of Lavender.HttpSuccess
            var parsedResult = this.parseResponse(result);
            this.dispatchSuccess(parsedResult);
        }
        catch (e) {
            var errorMessage = this.getErrorMessage() + "\n" + e.message + "\n" + e.stack;
            var errorEvent = new ActionErrorEvent_1.ActionErrorEvent(ActionErrorEvent_1.ActionErrorEvent.ERROR, { message: errorMessage });
            this.dispatch(errorEvent);
            var error = { name: 'error', message: errorMessage };
            this.errorModel.errors.addItem(error);
            this.errorModel.appError = true;
        }
        finally {
            this.opModel.asyncOperationCount -= 1;
            if (this.opModel.asyncOperationCount == 0) {
                this.opModel.asyncOperationComplete = true;
            }
            this.destroy();
        }
    };
    AbstractCommand.prototype.fault = function (fault) {
        //fault is an instance of Lavender.HttpFault
        this.opModel.asyncOperationCount -= 1;
        if (this.opModel.asyncOperationCount == 0) {
            this.opModel.asyncOperationComplete = true;
        }
        var errorMessage = this.getFaultString() + fault.message;
        var errorEvent = new ActionErrorEvent_1.ActionErrorEvent(ActionErrorEvent_1.ActionErrorEvent.ERROR, { message: errorMessage });
        this.dispatch(errorEvent);
        var error = { name: fault.status, message: errorMessage };
        this.errorModel.errors.addItem(error);
        this.errorModel.appError = true;
        this.destroy();
    };
    //Override this method in subclasses
    AbstractCommand.prototype.onProgress = function (progress) {
    };
    //Override this method in subclasses
    AbstractCommand.prototype.getFaultString = function () {
        return null;
    };
    //Override this method in subclasses
    AbstractCommand.prototype.getErrorMessage = function () {
        return null;
    };
    AbstractCommand.prototype.executionError = function () {
        // These properties weren't injected or supplied in the constructor or manually.
        // They are needed so we throw an error.
        var msg = this.getExecErrorString();
        if (this.service === null || this.service === undefined) {
            msg += " service";
        }
        if (this.opModel === null || this.opModel) {
            msg += ", opModel";
        }
        if (this.parser === null || this.parser === undefined) {
            msg += ", parser";
        }
        msg += ".";
        throw new Error(msg);
    };
    //Override this method in subclasses
    AbstractCommand.prototype.getExecErrorString = function () {
        return 'Lavender.AbstractServiceAction.prototype.executionError: the following are required: ';
    };
    AbstractCommand.prototype.destroy = function () {
        if (this.canListen(ActionErrorEvent_1.ActionErrorEvent.ERROR, this, 'onError')) {
            this.removeEventListener(ActionErrorEvent_1.ActionErrorEvent.ERROR, this, 'onError');
        }
        if (this.canListen(ActionSuccessEvent_1.ActionSuccessEvent.SUCCESS, this, 'onSuccess')) {
            this.removeEventListener(ActionSuccessEvent_1.ActionSuccessEvent.SUCCESS, this, 'onSuccess');
        }
        this.context = null;
        this.opModel = null;
        this.service = null;
        this.parser = null;
        this.errorModel = null;
    };
    return AbstractCommand;
}(Lavender.EventDispatcher));
exports.AbstractCommand = AbstractCommand;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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
 * Created by dsmiley on 5/18/17.
 */
var Lavender = __webpack_require__(0);
var ActionErrorEvent = /** @class */ (function (_super) {
    __extends(ActionErrorEvent, _super);
    function ActionErrorEvent(type, payload) {
        var _this = _super.call(this, type, payload) || this;
        if (!payload || payload.message === null || payload.message === undefined) {
            throw new Error('Lavender.ActionErrorEvent: payload.message is required');
        }
        return _this;
    }
    ActionErrorEvent.prototype.clone = function (type, payload) {
        return new ActionErrorEvent(this.type, this.payload);
    };
    ActionErrorEvent.ERROR = 'actionError';
    return ActionErrorEvent;
}(Lavender.AbstractEvent));
exports.ActionErrorEvent = ActionErrorEvent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
 * Created by dsmiley on 5/18/17.
 */
var Lavender = __webpack_require__(0);
var ActionSuccessEvent = /** @class */ (function (_super) {
    __extends(ActionSuccessEvent, _super);
    function ActionSuccessEvent(type, payload) {
        var _this = _super.call(this, type, payload) || this;
        if (payload === null || payload === undefined) {
            throw new Error('Lavender.ActionSuccessEvent: payload is required');
        }
        return _this;
    }
    ActionSuccessEvent.prototype.clone = function (type, payload) {
        return new ActionSuccessEvent(this.type, this.payload);
    };
    ActionSuccessEvent.SUCCESS = 'actionSuccess';
    return ActionSuccessEvent;
}(Lavender.AbstractEvent));
exports.ActionSuccessEvent = ActionSuccessEvent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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
var Lavender = __webpack_require__(0);
var HttpServiceFactory_1 = __webpack_require__(11);
/**
 * Created by dsmiley on 7/27/17.
 * This is a sample asynchronous action used in unit tests. It can be used as a template though for all asynch actions
 */
var SampleService = /** @class */ (function (_super) {
    __extends(SampleService, _super);
    function SampleService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.serviceMap = (config.hasOwnProperty('serviceMap')) ? config['serviceMap'] :
            {
                'echoJSON': ':3000/echoJSON/key/{0}',
                'localRequest': ':3000/printondemand/1234/photos/{0}'
            };
        return _this;
    }
    SampleService.prototype.getURLWithParams = function (key, args) {
        return (args !== null && args !== undefined) ? Lavender.StringUtil.substitute(this.getURL(key), args) : this.getURL(key);
    };
    SampleService.prototype.getURL = function (key) {
        return this.config.baseUrl + this.serviceMap[key];
    };
    SampleService.prototype.echoJSON = function (jsonKey, key, responder, paramObj, format, contentType, cache) {
        if (paramObj === void 0) { paramObj = {}; }
        if (format === void 0) { format = 'json'; }
        if (contentType === void 0) { contentType = 'application/json'; }
        if (cache === void 0) { cache = false; }
        //this is a sample service method to be used as an example only. You service methods will be dependent on your service API and model objects
        //note the use of the key param. This is a very importnat feature and I highly recommend that whatever service you created implements a similar method
        //don't hard code or otherwise tightly couple the URL creation inside this method. The use of a builder pattern ensures the end point can be changed based on environment
        var url = this.getURLWithParams(key, [jsonKey]);
        return this.sendRequest(true, responder, url, paramObj, format, contentType, cache);
    };
    SampleService.prototype.testRequestUsingIncludedAPI = function (key, responder, format, contentType, cache) {
        if (format === void 0) { format = 'json'; }
        if (contentType === void 0) { contentType = 'application/json'; }
        if (cache === void 0) { cache = false; }
        var url = this.getURLWithParams(key, ['54232fc2-7345-4921-8079']); //hard coded args
        return this.sendRequest(false, responder, url, null, format, contentType, cache);
    };
    SampleService.prototype.sendRequest = function (isPostRequest, responder, url, paramObj, format, contentType, cache) {
        if (paramObj === void 0) { paramObj = {}; }
        if (format === void 0) { format = 'json'; }
        if (contentType === void 0) { contentType = 'application/json'; }
        if (cache === void 0) { cache = false; }
        var params = JSON.stringify(paramObj);
        if (cache === null || cache === undefined) {
            cache = false;
        }
        var httpRequestInstance = HttpServiceFactory_1.HttpServiceFactory.getInstance().getHttpService(this.config.serviceCode);
        httpRequestInstance.addResponder(responder);
        var requestType = (isPostRequest) ? 'POST' : 'GET';
        return httpRequestInstance.send(requestType, url, params, contentType, format, cache);
    };
    return SampleService;
}(Lavender.AbstractHttpService));
exports.SampleService = SampleService;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Lavender = __webpack_require__(0);
/**
 * Created by dsmiley on 7/27/17.
 */
var EventDispatcherFactory = /** @class */ (function () {
    function EventDispatcherFactory() {
        if (EventDispatcherFactory.INSTANCE != null) {
            throw ('EventDispatcherFactory.INSTANCE: Singleton class has already been instantiated');
        }
        else {
            //perform any required object set up
        }
    }
    EventDispatcherFactory.getInstance = function () {
        if (EventDispatcherFactory.INSTANCE == null) {
            EventDispatcherFactory.INSTANCE = new EventDispatcherFactory();
        }
        return EventDispatcherFactory.INSTANCE;
    };
    EventDispatcherFactory.prototype.getEventDispatcher = function (eventDispatcherCode) {
        if (eventDispatcherCode === void 0) { eventDispatcherCode = 'Lavender.EventDispatcher'; }
        var dispatcher;
        //config.daoCode defaults to jquery
        switch (eventDispatcherCode) {
            case "Lavender.EventDispatcher":
            default:
                dispatcher = new Lavender.EventDispatcher();
        }
        return dispatcher;
    };
    EventDispatcherFactory.INSTANCE = null;
    return EventDispatcherFactory;
}());
exports.EventDispatcherFactory = EventDispatcherFactory;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Lavender = __webpack_require__(0);
/**
 * Created by dsmiley on 7/27/17.
 */
var HttpServiceFactory = /** @class */ (function () {
    function HttpServiceFactory() {
        if (HttpServiceFactory.INSTANCE != null) {
            throw ('HttpServiceFactory.INSTANCE: Singleton class has already been instantiated');
        }
        else {
            //perform any required object set up
        }
    }
    HttpServiceFactory.getInstance = function () {
        if (HttpServiceFactory.INSTANCE == null) {
            HttpServiceFactory.INSTANCE = new HttpServiceFactory();
        }
        return HttpServiceFactory.INSTANCE;
    };
    //override this method to return custon IService implementations
    HttpServiceFactory.prototype.getHttpService = function (code) {
        if (code === void 0) { code = 'Lavender.XhrHttpService'; }
        var httpService;
        switch (code) {
            case "Lavender.XhrHttpService":
            default:
                httpService = new Lavender.XhrHttpService();
                break;
        }
        return httpService;
    };
    HttpServiceFactory.INSTANCE = null;
    return HttpServiceFactory;
}());
exports.HttpServiceFactory = HttpServiceFactory;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

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
var Lotus = __webpack_require__(2);
var ComponentMap = /** @class */ (function (_super) {
    __extends(ComponentMap, _super);
    function ComponentMap(context) {
        return _super.call(this, context) || this;
    }
    ComponentMap.prototype.mapMediators = function (tagInstance) {
        this.context.mediatorMap.apply(tagInstance.tagName.toLowerCase(), tagInstance.lotusComponentInstance);
    };
    return ComponentMap;
}(Lotus.ComponentMap));
exports.ComponentMap = ComponentMap;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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
var Lotus = __webpack_require__(2);
var CommandMap_1 = __webpack_require__(3);
var Injector_1 = __webpack_require__(4);
var MediatorMap_1 = __webpack_require__(5);
var EventDispatcherFactory_1 = __webpack_require__(10);
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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
var AbstractCommand_1 = __webpack_require__(6);
/**
 * Created by dsmiley on 7/28/17.
 */
var SampleCommand = /** @class */ (function (_super) {
    __extends(SampleCommand, _super);
    function SampleCommand(context) {
        return _super.call(this, context) || this;
    }
    SampleCommand.prototype.executeServiceMethod = function () {
        //since services will always be injected by the IOC container always user the interface type
        return this.service.testRequestUsingIncludedAPI('localRequest', this);
    };
    SampleCommand.prototype.parseResponse = function (result) {
        //since serilization objects will always be injected by the IOC container always user the interface type
        return this.parser.parse(result); //use this.parser.parse to deserialize results. You'll of course need to implement the parser, our tests just use a generic function that returns the result
        //most commands would also receive a model injection and the command would update it here
    };
    SampleCommand.prototype.getFaultString = function () {
        return 'Lotus.SampleCommand a service request error occured';
    };
    SampleCommand.prototype.getErrorMessage = function () {
        return 'Lotus.SampleCommand an execution error occured ';
    };
    SampleCommand.prototype.getExecErrorString = function () {
        return 'Lotus.SampleCommand the following are required: ';
    };
    return SampleCommand;
}(AbstractCommand_1.AbstractCommand));
exports.SampleCommand = SampleCommand;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by dsmiley on 7/27/17.
 */
var SerializeFactory = /** @class */ (function () {
    function SerializeFactory() {
        if (SerializeFactory.INSTANCE != null) {
            throw ('SerializeFactory.INSTANCE: Singleton class has already been instantiated');
        }
        else {
            //perform any required object set up
        }
    }
    SerializeFactory.getInstance = function () {
        if (SerializeFactory.INSTANCE == null) {
            SerializeFactory.INSTANCE = new SerializeFactory();
        }
        return SerializeFactory.INSTANCE;
    };
    /*
     * Stub for override, this method is just an example of how this factory can be used
     * */
    SerializeFactory.prototype.getServiceResultParser = function (parserCode) {
        var parser;
        switch (parserCode) {
            case 'local':
            case 'remote':
            default:
                parser = {};
                break;
        }
        return parser;
    };
    /*
     * Stub for override, this method is just an example of how this factory can be used
     * */
    SerializeFactory.prototype.getServiceExporter = function (exporterCode) {
        var exporter;
        //we resuse parserCode which should really probably be called serializationCode
        switch (exporterCode) {
            case 'local':
            case 'remote':
            default:
                exporter = {};
                break;
        }
        return exporter;
    };
    SerializeFactory.INSTANCE = null;
    return SerializeFactory;
}());
exports.SerializeFactory = SerializeFactory;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SampleService_1 = __webpack_require__(9);
/**
 * Created by dsmiley on 7/27/17.
 */
var ServiceFactory = /** @class */ (function () {
    function ServiceFactory() {
        if (ServiceFactory.INSTANCE != null) {
            throw ('ServiceFactory.INSTANCE: Singleton class has already been instantiated');
        }
        else {
            //perform any required object set up
        }
    }
    ServiceFactory.getInstance = function () {
        if (ServiceFactory.INSTANCE == null) {
            ServiceFactory.INSTANCE = new ServiceFactory();
        }
        return ServiceFactory.INSTANCE;
    };
    ServiceFactory.prototype.getService = function (config) {
        var service;
        switch (config.serviceCode) {
            default:
                service = new SampleService_1.SampleService(config);
        }
        return service;
    };
    ServiceFactory.INSTANCE = null;
    return ServiceFactory;
}());
exports.ServiceFactory = ServiceFactory;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
var AbstractMediator_1 = __webpack_require__(1);
/**
 * Created by dsmiley on 7/26/17.
 */
var ButtonMediator = /** @class */ (function (_super) {
    __extends(ButtonMediator, _super);
    function ButtonMediator(componentInstance, context) {
        var _this = this;
        console.log('ButtonMediator constructor called');
        _this = _super.call(this, componentInstance, context) || this;
        return _this;
    }
    ButtonMediator.prototype.onClick = function (event) {
        console.log('Im the button mediator, I can handle the component click and dispatch an application event.');
    };
    ButtonMediator.prototype.addEventListeners = function () {
        _super.prototype.addEventListeners.call(this);
        this.componentInstance.addEventListener('click', this, 'onClick');
    };
    ButtonMediator.prototype.removeEventListeners = function () {
        _super.prototype.removeEventListeners.call(this);
        this.componentInstance.removeEventListener('click', this, 'onClick');
    };
    ButtonMediator.prototype.toString = function () {
        return 'Lotus.ButtonMediator';
    };
    return ButtonMediator;
}(AbstractMediator_1.AbstractMediator));
exports.ButtonMediator = ButtonMediator;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
var AbstractMediator_1 = __webpack_require__(1);
/**
 * Created by dsmiley on 7/26/17.
 */
var ListMediator = /** @class */ (function (_super) {
    __extends(ListMediator, _super);
    function ListMediator(componentInstance, context) {
        return _super.call(this, componentInstance, context) || this;
    }
    ListMediator.prototype.toString = function () {
        return 'Lotus.ListMediator';
    };
    return ListMediator;
}(AbstractMediator_1.AbstractMediator));
exports.ListMediator = ListMediator;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by dsmiley on 8/30/17.
 */
__webpack_require__(22);
function inject(target, key) {
    //set target[key] equal to a new instance of the mapped constructor of target's type
    var t = Reflect.getMetadata('design:type', target, key);
    if (!t) {
        // Needed to support react native inheritance
        t = Reflect.getMetadata('design:type', target.constructor, key);
    }
    if (!target['resolveInjections']) {
        target['resolveInjections'] = new Array();
    }
    target['resolveInjections'].push({ property: key, type: t });
    //console.log('key: ' + key);
    //console.log('t.name: ' + t.name);
    //console.log('target.constructor.name: ' + target.constructor.name);
    //console.log('target.constructor.prototype: ' + target.constructor.prototype);
}
exports.inject = inject;
function injectable(target) {
    // the new constructor behaviour
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Object.getPrototypeOf(this.constructor.prototype).constructor.apply(this, args);
        console.log("injectable constructor called, attempting to resolve injections: " + this.constructor.prototype);
        if (this.resolveInjections) {
            console.log("injections found!!!!: ");
            //TODO: move this method to a decorator that sets up this.resolveInjections as an accessor and adds this functionality to the constructor
            this.resolveInjections.forEach(function (value, index) {
                var instance = this.context.injector.inject(value.type);
                if (instance) {
                    this[value.property] = instance;
                }
            }.bind(this));
        }
        return this;
    };
    // copy prototype so intanceof operator still works
    f.prototype = target.prototype;
    return f;
}
exports.injectable = injectable;
function bindable(target, key) {
    console.log('bindable decorator called');
    // property value
    var _val = target[key];
    if (!target['notify']) {
        console.log('notify is undefined. please extend Lavender.Subject.');
        return;
    }
    // property getter
    var getter = function () {
        console.log('Get: ${key} => ${returnValue}');
        return this['_' + key];
    };
    // property setter
    var setter = function (newVal) {
        console.log('Set: ${key} => ${newVal}');
        this['_' + key] = newVal;
        this['notify'](newVal, key);
    };
    // Delete property.
    if (delete target[key]) {
        //define the private property:
        target['_' + key] = _val;
        // Create new property with getter and setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
exports.bindable = bindable;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(3));
__export(__webpack_require__(5));
__export(__webpack_require__(12));
__export(__webpack_require__(13));
__export(__webpack_require__(19));
__export(__webpack_require__(10));
__export(__webpack_require__(15));
__export(__webpack_require__(11));
__export(__webpack_require__(16));
__export(__webpack_require__(9));
__export(__webpack_require__(8));
__export(__webpack_require__(7));
__export(__webpack_require__(6));
__export(__webpack_require__(14));
__export(__webpack_require__(1));
__export(__webpack_require__(17));
__export(__webpack_require__(18));


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    // feature test for Symbol support
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var HashMap;
    (function (HashMap) {
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        HashMap.create = supportsCreate
            ? function () { return MakeDictionary(Object.create(null)); }
            : supportsProto
                ? function () { return MakeDictionary({ __proto__: null }); }
                : function () { return MakeDictionary({}); };
        HashMap.has = downLevel
            ? function (map, key) { return hasOwn.call(map, key); }
            : function (map, key) { return key in map; };
        HashMap.get = downLevel
            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
            : function (map, key) { return map[key]; };
    })(HashMap || (HashMap = {}));
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
    var Metadata = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param propertyKey (Optional) The property key to decorate.
      * @param attributes (Optional) The property descriptor for the target key.
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Example = Reflect.decorate(decoratorsArray, Example);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(Example, "staticMethod",
      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(Example.prototype, "method",
      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
      *
      */
    function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsObject(target))
                throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
            if (IsNull(attributes))
                attributes = undefined;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
        }
        else {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsConstructor(target))
                throw new TypeError();
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
    // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class Example {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param propertyKey (Optional) The property key for the target.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, Example);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
      *
      */
    function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        if (!metadataMap.delete(metadataKey))
            return false;
        if (metadataMap.size > 0)
            return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0)
            return true;
        Metadata.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                    throw new TypeError();
                target = decorated;
            }
        }
        return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                    throw new TypeError();
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
            if (!Create)
                return undefined;
            targetMetadata = new _Map();
            Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
            if (!Create)
                return undefined;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
    }
    // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
    }
    // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        return ToBoolean(metadataMap.has(MetadataKey));
    }
    // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
    }
    // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return undefined;
        return metadataMap.get(MetadataKey);
    }
    // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // 3.1.6.1 OrdinaryMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
            return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
            return ownKeys;
        if (ownKeys.length <= 0)
            return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
    function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
                keys.length = k;
                return keys;
            }
            var nextValue = IteratorValue(next);
            try {
                keys[k] = nextValue;
            }
            catch (e) {
                try {
                    IteratorClose(iterator);
                }
                finally {
                    throw e;
                }
            }
            k++;
        }
    }
    // 6 ECMAScript Data Typ0es and Values
    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
    function Type(x) {
        if (x === null)
            return 1 /* Null */;
        switch (typeof x) {
            case "undefined": return 0 /* Undefined */;
            case "boolean": return 2 /* Boolean */;
            case "string": return 3 /* String */;
            case "symbol": return 4 /* Symbol */;
            case "number": return 5 /* Number */;
            case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
            default: return 6 /* Object */;
        }
    }
    // 6.1.1 The Undefined Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // 6.1.2 The Null Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
    function IsNull(x) {
        return x === null;
    }
    // 6.1.5 The Symbol Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // 6.1.7 The Object Type
    // https://tc39.github.io/ecma262/#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // 7.1 Type Conversion
    // https://tc39.github.io/ecma262/#sec-type-conversion
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // https://tc39.github.io/ecma262/#sec-toprimitive
    function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
            case 0 /* Undefined */: return input;
            case 1 /* Null */: return input;
            case 2 /* Boolean */: return input;
            case 3 /* String */: return input;
            case 4 /* Symbol */: return input;
            case 5 /* Number */: return input;
        }
        var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
                throw new TypeError();
            return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    // 7.1.1.1 OrdinaryToPrimitive(O, hint)
    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
    function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                    return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        throw new TypeError();
    }
    // 7.1.2 ToBoolean(argument)
    // https://tc39.github.io/ecma262/2016/#sec-toboolean
    function ToBoolean(argument) {
        return !!argument;
    }
    // 7.1.12 ToString(argument)
    // https://tc39.github.io/ecma262/#sec-tostring
    function ToString(argument) {
        return "" + argument;
    }
    // 7.1.14 ToPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-topropertykey
    function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3 /* String */);
        if (IsSymbol(key))
            return key;
        return ToString(key);
    }
    // 7.2 Testing and Comparison Operations
    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
    // 7.2.2 IsArray(argument)
    // https://tc39.github.io/ecma262/#sec-isarray
    function IsArray(argument) {
        return Array.isArray
            ? Array.isArray(argument)
            : argument instanceof Object
                ? argument instanceof Array
                : Object.prototype.toString.call(argument) === "[object Array]";
    }
    // 7.2.3 IsCallable(argument)
    // https://tc39.github.io/ecma262/#sec-iscallable
    function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
    }
    // 7.2.4 IsConstructor(argument)
    // https://tc39.github.io/ecma262/#sec-isconstructor
    function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
    }
    // 7.2.7 IsPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-ispropertykey
    function IsPropertyKey(argument) {
        switch (Type(argument)) {
            case 3 /* String */: return true;
            case 4 /* Symbol */: return true;
            default: return false;
        }
    }
    // 7.3 Operations on Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-objects
    // 7.3.9 GetMethod(V, P)
    // https://tc39.github.io/ecma262/#sec-getmethod
    function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null)
            return undefined;
        if (!IsCallable(func))
            throw new TypeError();
        return func;
    }
    // 7.4 Operations on Iterator Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
    function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
            throw new TypeError(); // from Call
        var iterator = method.call(obj);
        if (!IsObject(iterator))
            throw new TypeError();
        return iterator;
    }
    // 7.4.4 IteratorValue(iterResult)
    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
    function IteratorValue(iterResult) {
        return iterResult.value;
    }
    // 7.4.5 IteratorStep(iterator)
    // https://tc39.github.io/ecma262/#sec-iteratorstep
    function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
    }
    // 7.4.6 IteratorClose(iterator, completion)
    // https://tc39.github.io/ecma262/#sec-iteratorclose
    function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
            f.call(iterator);
    }
    // 9.1 Ordinary Object Internal Methods and Internal Slots
    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
    function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
            return proto;
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype)
            return proto;
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
        // If the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
            return proto;
        // If we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O)
            return proto;
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (function () {
            function MapIterator(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
            }
            MapIterator.prototype["@@iterator"] = function () { return this; };
            MapIterator.prototype[iteratorSymbol] = function () { return this; };
            MapIterator.prototype.next = function () {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    else {
                        this._index++;
                    }
                    return { value: result, done: false };
                }
                return { value: undefined, done: true };
            };
            MapIterator.prototype.throw = function (error) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                throw error;
            };
            MapIterator.prototype.return = function (value) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                return { value: value, done: true };
            };
            return MapIterator;
        }());
        return (function () {
            function Map() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            }
            Object.defineProperty(Map.prototype, "size", {
                get: function () { return this._keys.length; },
                enumerable: true,
                configurable: true
            });
            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
            Map.prototype.get = function (key) {
                var index = this._find(key, /*insert*/ false);
                return index >= 0 ? this._values[index] : undefined;
            };
            Map.prototype.set = function (key, value) {
                var index = this._find(key, /*insert*/ true);
                this._values[index] = value;
                return this;
            };
            Map.prototype.delete = function (key) {
                var index = this._find(key, /*insert*/ false);
                if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                        this._keys[i - 1] = this._keys[i];
                        this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    return true;
                }
                return false;
            };
            Map.prototype.clear = function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            };
            Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
            Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
            Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
            Map.prototype["@@iterator"] = function () { return this.entries(); };
            Map.prototype[iteratorSymbol] = function () { return this.entries(); };
            Map.prototype._find = function (key, insert) {
                if (this._cacheKey !== key) {
                    this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(undefined);
                }
                return this._cacheIndex;
            };
            return Map;
        }());
        function getKey(key, _) {
            return key;
        }
        function getValue(_, value) {
            return value;
        }
        function getEntry(key, value) {
            return [key, value];
        }
    }
    // naive Set shim
    function CreateSetPolyfill() {
        return (function () {
            function Set() {
                this._map = new _Map();
            }
            Object.defineProperty(Set.prototype, "size", {
                get: function () { return this._map.size; },
                enumerable: true,
                configurable: true
            });
            Set.prototype.has = function (value) { return this._map.has(value); };
            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
            Set.prototype.delete = function (value) { return this._map.delete(value); };
            Set.prototype.clear = function () { this._map.clear(); };
            Set.prototype.keys = function () { return this._map.keys(); };
            Set.prototype.values = function () { return this._map.values(); };
            Set.prototype.entries = function () { return this._map.entries(); };
            Set.prototype["@@iterator"] = function () { return this.keys(); };
            Set.prototype[iteratorSymbol] = function () { return this.keys(); };
            return Set;
        }());
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (function () {
            function WeakMap() {
                this._key = CreateUniqueKey();
            }
            WeakMap.prototype.has = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.has(table, this._key) : false;
            };
            WeakMap.prototype.get = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.get(table, this._key) : undefined;
            };
            WeakMap.prototype.set = function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            };
            WeakMap.prototype.delete = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? delete table[this._key] : false;
            };
            WeakMap.prototype.clear = function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            };
            return WeakMap;
        }());
        function CreateUniqueKey() {
            var key;
            do
                key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create)
                    return undefined;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 0xff | 0;
            return buffer;
        }
        function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                    return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                    return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
            }
            return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                    result += "-";
                if (byte < 16)
                    result += "0";
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
    }
    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
    function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
    }
    // patch global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    if (hasOwn.call(Reflect, p)) {
                        __global.Reflect[p] = Reflect[p];
                    }
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof global !== "undefined" ? global :
        typeof self !== "undefined" ? self :
            Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21), __webpack_require__(23)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=lotusjs-mvw-UMD.js.map