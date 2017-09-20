/**
 * Created by dsmiley on 9/20/17.
 */
import * as Lotus from "lotusjs-components/lib";
import {IContext} from "./IContext";

export class ComponentMap extends Lotus.ComponentMap{
    constructor(context:IContext){
        super(context);
    }

    protected mapMediators(tagInstance:Lotus.LotusHTMLElement):void{
        (this.context as IContext).mediatorMap.apply(tagInstance.tagName.toLowerCase(), tagInstance.lotusComponentInstance);
    }
}