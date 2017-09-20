import { AbstractMediator } from "./AbstractMediator";
import * as Lotus from "lotusjs-components/lib";
/**
 * Created by dsmiley on 7/26/17.
 */
export declare class ListMediator extends AbstractMediator {
    constructor(componentInstance: Lotus.IComponent, context: Lotus.IContext);
    toString(): string;
}
