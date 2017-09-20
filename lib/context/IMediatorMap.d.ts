/**
 * Created by dsmiley on 7/26/17.
 */
import * as Lotus from "lotusjs-components/lib";
export interface IMediatorMap {
    readonly tagConstructorMap: Object;
    readonly mediatorInstanceMap: Object;
    context: Lotus.IContext;
    add(tagName: string, mediatorConstructor: Function, useSingleton: boolean): void;
    remove(tagName: string, mediatorConstructor: Function): string;
    apply(tagName: string, componentInstance: Lotus.IComponent): void;
    hasMediatorMap(tagName: string, mediatorConstructor: Function): boolean;
}
