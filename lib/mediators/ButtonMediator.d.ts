import { AbstractMediator } from "./AbstractMediator";
import * as Lotus from "lotusjs-components/lib";
/**
 * Created by dsmiley on 7/26/17.
 */
export declare class ButtonMediator extends AbstractMediator {
    constructor(componentInstance: Lotus.IComponent, context: Lotus.IContext);
    protected onClick(event: Event): void;
    protected addEventListeners(): void;
    protected removeEventListeners(): void;
    toString(): string;
}
