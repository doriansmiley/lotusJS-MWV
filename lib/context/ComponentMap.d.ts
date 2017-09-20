/**
 * Created by dsmiley on 9/20/17.
 */
import * as Lotus from "lotusjs-components/lib";
import { IContext } from "./IContext";
export declare class ComponentMap extends Lotus.ComponentMap {
    constructor(context: IContext);
    protected mapMediators(tagInstance: Lotus.LotusHTMLElement): void;
}
