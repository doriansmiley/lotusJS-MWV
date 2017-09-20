import { IMediatorMap } from "./IMediatorMap";
import * as Lotus from "lotusjs-components/lib";
/**
 * Created by dsmiley on 7/26/17.
 */
export declare class MediatorMap implements IMediatorMap {
    protected _tagConstructorMap: Object;
    protected _mediatorInstanceMap: Object;
    context: Lotus.IContext;
    constructor(context: Lotus.IContext);
    readonly tagConstructorMap: Object;
    readonly mediatorInstanceMap: Object;
    add(tagName: string, mediatorConstructor: Function, useSingleton?: boolean): void;
    remove(tagName: string, mediatorConstructor: Function): string;
    apply(tagName: string, componentInstance: Lotus.IComponent): void;
    hasMediatorMap(tagName: string, mediatorConstructor: Function): boolean;
}
