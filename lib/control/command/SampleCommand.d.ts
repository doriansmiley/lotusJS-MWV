import { AbstractCommand } from "./AbstractCommand";
import * as Lotus from "lotusjs-components/lib";
import * as Lavender from 'lavenderjs/lib';
/**
 * Created by dsmiley on 7/28/17.
 */
export declare class SampleCommand extends AbstractCommand {
    protected model: Object;
    constructor(context: Lotus.IContext);
    protected executeServiceMethod(): string;
    protected parseResponse(result: Lavender.IResult): Object;
    protected getFaultString(): string;
    protected getErrorMessage(): string;
    protected getExecErrorString(): string;
}
