/**
 * Created by dsmiley on 9/20/17.
 */
import * as Lotus from "lotusjs-components/lib";
import { IMediatorMap } from "./IMediatorMap";
import { IInjector } from "./IInjector";
import { ICommandMap } from "./ICommandMap";
export declare class Context extends Lotus.Context {
    commandMap: ICommandMap;
    injector: IInjector;
    mediatorMap: IMediatorMap;
    constructor(config: Object, params: Object);
    startUp(): void;
    mapCommands(): void;
    mapObjects(): void;
    mapMediators(): void;
}
