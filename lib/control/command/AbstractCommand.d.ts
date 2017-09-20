import { ICommand } from "./ICommand";
import * as Lotus from "lotusjs-components/lib";
import * as Lavender from 'lavenderjs/lib';
import { IService } from "../service/IService";
/**
 * Created by dsmiley on 7/28/17.
 */
export declare abstract class AbstractCommand extends Lavender.EventDispatcher implements ICommand {
    protected service: IService;
    protected opModel: Lavender.AsyncOperationModel;
    protected parser: Lavender.IParser;
    protected errorModel: Lavender.ErrorModel;
    context: Lotus.IContext;
    constructor(context: Lotus.IContext);
    execute(event: Lavender.IEvent): string;
    protected executeServiceMethod(): string;
    protected parseResponse(result: Lavender.IResult): Object;
    protected dispatchSuccess(parsedResult: Object): void;
    success(result: Lavender.IResult): void;
    fault(fault: Lavender.IFault): void;
    onProgress(progress: number): void;
    protected getFaultString(): string;
    protected getErrorMessage(): string;
    protected executionError(): void;
    protected getExecErrorString(): string;
    destroy(): void;
}
