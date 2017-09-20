/**
 * Created by dsmiley on 7/24/17.
 */
import * as Lavender from 'lavenderjs/lib';
import {IMediatorMap} from "./IMediatorMap";
import * as Lotus from "lotusjs-components/lib";
import {ICommandMap} from "./ICommandMap";
import {IInjector} from "./IInjector";

export interface IContext extends Lotus.IContext{
    config:Object;
    eventDispatcher:Lavender.IEventDispatcher;
    commandMap:ICommandMap;
    injector:IInjector
    mediatorMap:IMediatorMap;

    mapCommands();
    mapObjects();
    mapMediators();
}