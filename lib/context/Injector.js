"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Injector = /** @class */ (function () {
    function Injector(context) {
        this.typeMap = [];
        this.context = context;
        this.objectMap = {};
    }
    Injector.prototype.mapObject = function (key, constructor, useSingleton, params) {
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
                this.typeMap.push({ constructor: constructor, useSingleton: useSingleton, instance: null, type: key, params: params });
            }
        }
        else {
            //instantiate singleton instance upon request is more efficient
            this.objectMap[key] = { constructor: constructor, useSingleton: useSingleton, instance: null, params: params };
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
                        map['instance'] = new ((_a = map.constructor).bind.apply(_a, [void 0].concat(map['params'])))();
                    }
                    return map['instance'];
                }
                else {
                    return new ((_b = map.constructor).bind.apply(_b, [void 0].concat(map['params'])))();
                }
            }
        }
        else {
            if (this.objectMap[key] !== null && this.objectMap[key] !== undefined) {
                if (this.objectMap[key].useSingleton) {
                    if (this.objectMap[key].instance === null) {
                        this.objectMap[key].instance = new ((_c = this.objectMap[key].constructor).bind.apply(_c, [void 0].concat(this.objectMap[key].params)))();
                    }
                    return this.objectMap[key].instance;
                }
                else {
                    return new ((_d = this.objectMap[key].constructor).bind.apply(_d, [void 0].concat(this.objectMap[key].params)))();
                }
            }
        }
        throw new Error('Lotus.Injector.prototype.getObject: could not find object for key: ' + key);
        var _a, _b, _c, _d;
    };
    return Injector;
}());
exports.Injector = Injector;
//# sourceMappingURL=Injector.js.map