/**
 * Created by dsmiley on 7/24/17.
 */
import * as Lotus from "lotusjs-components/lib";
import { IInjector } from './IInjector';
export declare class Injector implements IInjector {
    context: Lotus.IContext;
    objectMap: Object;
    typeMap: Array<Object>;
    constructor(context: Lotus.IContext);
    mapObject(key: any, constructor: FunctionConstructor, useSingleton?: boolean): void;
    mapSingletonInstance(key: any, instance: any): void;
    inject(key: any): Object;
}
