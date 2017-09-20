import { AbstractMediator } from "./AbstractMediator";
import * as Lotus from "lotusjs-components/lib";
import { IComponent } from "../view/IComponent";
/**
 * Created by dsmiley on 7/26/17.
 */
export declare class ButtonMediator extends AbstractMediator {
    constructor(componentInstance: IComponent, context: Lotus.IContext);
    protected onClick(event: Event): void;
    protected addEventListeners(): void;
    protected removeEventListeners(): void;
    toString(): string;
}
