/**
 * Created by dsmiley on 8/30/17.
 */
import 'reflect-metadata';
import {IInjector} from "../context/IInjector";

export type injectionResolver = {property:string, type:Function};

export function inject(injector:IInjector):any{
    return function (target: any, key: string, descriptor: PropertyDescriptor){
        let t = Reflect.getMetadata('design:type', target, key);
        if (!t) {
            // Needed to support react native inheritance
            t = Reflect.getMetadata('design:type', target.constructor, key);
        }
        console.log('attempting to inject type: ' + t.name + 'into property: ' + key);
        var instance:any = injector.inject(t);
        if(instance){
            console.log('injection found for type, value injected')
            target[key] = instance;
        }
    }
}

export function bindable():any{
    return function (target: any, key: string, descriptor: PropertyDescriptor){
        console.log('bindable decorator called');
        // property value
        var _val = target[key];

        //TODO: mixin Lavender.Subject if notify is undefined
        if(!target['notify']){
            console.log('notify is undefined. please extend Lavender.Subject.');
            return;
        }

        // property getter
        var getter = function () {
            console.log('Get: ${key} => ${returnValue}');
            return this['_'+key];
        };

        // property setter
        var setter = function (newVal) {
            console.log('Set: ${key} => ${newVal}');
            this['_'+key] = newVal;
            this['notify']( newVal, key );
        };

        // Delete property.
        if (delete target[key]) {
            //define the private property:
            target['_'+key] = _val;
            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
}