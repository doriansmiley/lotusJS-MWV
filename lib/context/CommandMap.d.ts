/**
 * Created by dsmiley on 7/24/17.
 */
import * as Lotus from "lotusjs-components/lib";
import { ICommandMap } from "./ICommandMap";
import * as Lavender from 'lavenderjs/lib';
export declare class CommandMap implements ICommandMap {
    eventFunctionMap: Object;
    instanceMap: Object;
    context: Lotus.IContext;
    constructor(context: Lotus.IContext);
    addCommand(eventType: string, handler: any, functionName?: string, useSingleton?: boolean): void;
    hasCommandMap(eventType: string, handler: Object, functionName: string): boolean;
    removeCommand(eventType: string, handler: Object): void;
    removeAllCommands(): void;
    routeEventToCommand(event: Lavender.IEvent): void;
}
