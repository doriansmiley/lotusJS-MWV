import { AbstractMediator } from "./AbstractMediator";
import * as Lotus from "lotusjs-components/lib";
import { IComponent } from "../view/IComponent";
/**
 * Created by dsmiley on 7/26/17.
 */
export declare class ListMediator extends AbstractMediator {
    constructor(componentInstance: IComponent, context: Lotus.IContext);
    toString(): string;
}
