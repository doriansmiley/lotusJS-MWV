/**
 * Created by dsmiley on 7/24/17.
 */
import * as Lotus from "lotusjs-components/lib";
export interface IInjector {
    context: Lotus.IContext;
    objectMap: Object;
    mapObject(key: any, constructor: Function, useSingleton: boolean, params?: Array<any>): void;
    mapSingletonInstance(key: any, instance: any): void;
    inject(key: any): Object;
}
