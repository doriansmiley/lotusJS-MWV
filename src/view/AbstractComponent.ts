import {IComponent} from "./IComponent";
import * as Lavender from 'lavenderjs/lib';
import * as Lotus from "lotusjs-components/lib";
import {SkinPartList} from "./SkinPartList";
import {ComponentEvent} from "../control/events/ComponentEvent";
/**
 * Created by dsmiley on 7/26/17.
 */
export abstract class AbstractComponent extends Lavender.Subject implements IComponent{
    private _element:Lotus.LotusHTMLElement;
    private _context:Lotus.IContext;
    private _ready:boolean = false;
    private _id:number = Math.random();
    private _skinParts:SkinPartList = new SkinPartList();

    //placeholders for mixins, required for the compiler
    handlersByEventName:Object;
    addEventListener: (  event:string, instance:Object, handler:string ) => void;
    canListen: (  eventType:string, instance:Object, handler:string )  => boolean;
    removeEventListener: ( event:string, instance:Object, handler:string )  => void;
    removeAllEventListeners: ( instance:Object )  =>  void;
    dispatch: ( event:Lavender.IEvent )  =>  void;

    constructor(){
        super();
        Lavender.ObjectUtils.mixin(Lavender.EventDispatcher, AbstractComponent, this);
    }

    get element():Lotus.LotusHTMLElement {
        return this._element;
    }

    set element(val:Lotus.LotusHTMLElement) {
        this._element = val;
        if( this._element !== null && this._element !== undefined ){
            this._element.getComponentInstance = this.getComponentInstance.bind(this);
        }
        this.notify( val, 'element' );
    }

    get context():Lotus.IContext {
        return this._context;
    }

    set context(val:Lotus.IContext) {
        this._context = val;
        this.notify( val, 'context' );
    }

    get ready():boolean {
        return this._ready;
    }

    set ready(val:boolean) {
        this._ready = val;
        this.notify( val, 'ready' );
    }

    get id():number {
        return this._id;
    }

    set id(val:number) {
        this._id = val;
        this.notify( val, 'id' );
    }

    get skinParts():SkinPartList {
        return this._skinParts;
    }

    set skinParts(val:SkinPartList) {
        this._skinParts = val;
        this.notify( val, 'skinParts' );
    }

    public init():void{
        this.addAttributes();
        this.defineSkinParts();
        this.addSkinParts();
    }

    public addAttributes():void{
        for( let i=0; i < this.element.attributes.length; i++ ){
            let attribute = this.element.attributes[i];
            if( attribute.name.indexOf('attribute') >= 0 ){
                let index = attribute.name.indexOf('attribute') + 10;
                let newProp = attribute.name.substring(index);//remove prefix
                //convert dashes to camel case
                //LEGACY: using the data- prefix should trigger camel case on dash automagically
                let camelCased = newProp.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
                let properties:Array<string> = this.getAllPropertyNames(this);
                if( properties.indexOf(camelCased) >= 0 ){
                    this[camelCased] = attribute.value;
                }
            }
        }
    }

    public getAllPropertyNames(obj:Object, iterateSelfBool:boolean=true, iteratePrototypeBool:boolean=true):Array<string>{
        let props:Array<string> = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function(prop) {
                    if (props.indexOf(prop) === -1) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }

    public addSkinParts():void{
        if( this.element.getAttribute('data-skin-part') !== null && this.element.getAttribute('data-skin-part') !== undefined ){
            this.addSkinPart(this.element.getAttribute('data-skin-part'), this.element);
        }
        let skinPartsNodeList = this.element.querySelectorAll('[data-skin-part]');
        for (let i = 0; i < skinPartsNodeList.length; i++) {
            // iterate over matches
            //call addSkinPart on the component passing skin part attribute value and the element
            this.addSkinPart(skinPartsNodeList[i].getAttribute('data-skin-part'), skinPartsNodeList[i]);
        }
    }

    public addSkinPart(part:string, element:Element):void{
        //skip undefined skin parts
        if( this.skinParts.skinPartsByLabel[part] === null || this.skinParts.skinPartsByLabel[part] === undefined ){
            return null;
        }
        //assign the skin part
        this.skinParts.skinPartsByLabel[part].element = element;
        //notify
        this.onSkinPartAdded(part, this.skinParts.skinPartsByLabel[part].element);
    }

    public onReady():void{
        this.ready = true;
        this.dispatch(new ComponentEvent(ComponentEvent.READY));
    }

    public getComponentInstance():IComponent{
        return this;
    }

    public created(element:Lotus.LotusHTMLElement):void{
        console.log('AbstractComponent.created called');
        this.element = element;
        this.init();
        this.onReady();
    }

    public destroy():void{
        this.removeEventListeners();
        this.binder.unbindAll();
        this.binder = null;
        this.element = null;
        this.id = null;
    }

    //stub methods below

    public defineSkinParts():void{

    }

    public onSkinPartAdded(part:string, element:HTMLElement):void{

    }

    public inserted(element:Lotus.LotusHTMLElement):void{
        console.log('AbstractComponent.inserted called');
    }

    public removed(element:Lotus.LotusHTMLElement):void{
        console.log('AbstractComponent.removed called');
    }
    
    public attributeChanged(element:Lotus.LotusHTMLElement):void{
        console.log('AbstractComponent.attributeChanged called');
    }

    public addEventListeners():void{

    }

    public removeEventListeners():void{

    }
}