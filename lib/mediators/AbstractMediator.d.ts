import { IMediator } from "./IMediator";
import * as Lotus from "lotusjs-components/lib";
import * as Lavender from 'lavenderjs/lib';
/**
 * Created by dsmiley on 7/26/17.
 */
export declare abstract class AbstractMediator extends Lavender.Subject implements IMediator {
    private _id;
    private _componentInstance;
    private _context;
    constructor(componentInstance: Lotus.IComponent, context: Lotus.IContext);
    id: string;
    componentInstance: Lotus.IComponent;
    context: Lotus.IContext;
    protected addEventListeners(): void;
    protected removeEventListeners(): void;
    protected setUpBindings(): void;
    protected removeBindings(): void;
    toString(): string;
    init(): void;
    destroy(): void;
}
