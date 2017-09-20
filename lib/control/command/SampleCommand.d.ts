import { AbstractCommand } from "./AbstractCommand";
import * as Lavender from 'lavenderjs/lib';
import { IContext } from "../../context/IContext";
/**
 * Created by dsmiley on 7/28/17.
 */
export declare class SampleCommand extends AbstractCommand {
    protected model: Object;
    constructor(context: IContext);
    protected executeServiceMethod(): string;
    protected parseResponse(result: Lavender.IResult): Object;
    protected getFaultString(): string;
    protected getErrorMessage(): string;
    protected getExecErrorString(): string;
}
