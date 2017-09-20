import {AbstractMediator} from "./AbstractMediator";
import * as Lotus from "lotusjs-components/lib";
/**
 * Created by dsmiley on 7/26/17.
 */
export class ListMediator extends AbstractMediator{
    constructor(componentInstance:Lotus.IComponent, context:Lotus.IContext){
        super(componentInstance,context);
    }

    public toString():string{
        return 'Lotus.ListMediator';
    }
}