"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by dsmiley on 8/30/17.
 */
require("reflect-metadata");
exports.injections = [];
function inject(context) {
    return function (target, key, descriptor) {
        var t = Reflect.getMetadata('design:type', target, key);
        if (!t) {
            // Needed to support react native inheritance
            t = Reflect.getMetadata('design:type', target.constructor, key);
        }
        console.log('attempting to inject type: ' + t.name + 'into property: ' + key);
        exports.injections.push({ property: key, type: t, context: context, instance: target });
    };
}
exports.inject = inject;
function bindable() {
    return function (target, key, descriptor) {
        console.log('bindable decorator called');
        // property value
        var _val = target[key];
        //TODO: mixin Lavender.Subject if notify is undefined
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
    };
}
exports.bindable = bindable;
//# sourceMappingURL=InjectorDecorator.js.map