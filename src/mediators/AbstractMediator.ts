import {IMediator} from "./IMediator";
import * as Lotus from "lotusjs-components/lib";
import * as Lavender from 'lavenderjs/lib';
import {IComponent} from "../view/IComponent";
import {ComponentEvent} from "../control/events/ComponentEvent";
import {injectable} from "../reflection/InjectorDecorator";
/**
 * Created by dsmiley on 7/26/17.
 */
export abstract class AbstractMediator extends Lavender.Subject implements IMediator{
    private _id:string;
    private _componentInstance:IComponent;
    private _context:Lotus.IContext;

    constructor(componentInstance:IComponent, context:Lotus.IContext){
        super();
        this.id = Lavender.UuidUtils.generateUUID();
        this.componentInstance = componentInstance;
        this.context = context;
        if(!this.componentInstance.ready){
            this.componentInstance.addEventListener(ComponentEvent.READY, this, 'init');
        }else{
            this.init();
        }
    }


    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
        this.notify(value, 'id');
    }

    get componentInstance():IComponent {
        return this._componentInstance;
    }

    set componentInstance(value:IComponent) {
        this._componentInstance = value;
        this.notify(value, 'componentInstance');
    }

    get context():Lotus.IContext {
        return this._context;
    }

    set context(value:Lotus.IContext) {
        this._context = value;
        this.notify(value, 'context');
    }

    protected addEventListeners():void{

    }

    protected removeEventListeners():void{
        if(this.componentInstance.canListen(ComponentEvent.READY, this, 'init')){
            this.componentInstance.removeEventListener(ComponentEvent.READY, this, 'init');
        }
    }

    protected setUpBindings():void{

    }

    protected removeBindings():void{
        this.binder.unbindAll();
    }

    public toString():string{
        return this.id;
    }

    public init():void{
        this.addEventListeners();
        this.setUpBindings();
    }

    public destroy():void{
        this.removeEventListeners();
        this.removeBindings();
        this.id = null;
        this.componentInstance = null;
    }
}