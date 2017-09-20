/**
 * Created by dsmiley on 9/20/17.
 */
import * as Lotus from "lotusjs-components/lib";
import {IMediatorMap} from "./IMediatorMap";
import {IInjector} from "./IInjector";
import {ICommandMap} from "./ICommandMap";
import {CommandMap} from "./CommandMap";
import {Injector} from "./Injector";
import {MediatorMap} from "./MediatorMap";
import {EventDispatcherFactory} from "../factory/EventDispatcherFactory";

export class Context extends Lotus.Context{
    public commandMap:ICommandMap;
    public injector:IInjector
    public mediatorMap:IMediatorMap;

    constructor(config:Object, params:Object){
        super(config, params)
        //IMPORTANT: must occur first so application event bus is configured
        this.eventDispatcher = EventDispatcherFactory.getInstance().getEventDispatcher();
        this.commandMap = new CommandMap(this);//create factory if we require sub classes one day
        this.injector = new Injector(this);//create factory if we require sub classes one day
        this.mediatorMap = new MediatorMap(this);
        this.startUp();
    }

    public startUp(){
        super.startUp();
        this.mapCommands();
        this.mapObjects();
        this.mapMediators();
    }

    public mapCommands(){

    }

    public mapObjects(){

    }

    public mapMediators(){

    }
}