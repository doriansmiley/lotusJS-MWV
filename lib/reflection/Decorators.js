"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by dsmiley on 8/30/17.
 */
require("reflect-metadata");
function inject(injectorKey) {
    return function (target, propertyKey, descriptor) {
        //set target[key] equal to a new instance of the mapped constructor of target's type
        var t = Reflect.getMetadata('design:type', target, propertyKey);
        if (!t) {
            // Needed to support react native inheritance
            t = Reflect.getMetadata('design:type', target.constructor, propertyKey);
        }
        if (!target['resolveInjections']) {
            target['resolveInjections'] = new Array();
        }
        target['resolveInjections'].push({ property: propertyKey, type: (injectorKey) ? injectorKey : t });
    };
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
    f.prototype = Object.create(target.prototype);
    // Remember the constructor property was set wrong, let's fix it
    f.prototype.constructor = f;
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
//# sourceMappingURL=Decorators.js.map