import { EventDispatcherFactory } from "../factory/EventDispatcherFactory";
import { HttpServiceFactory } from "../factory/HttpServiceFactory";
import * as Lavender from 'lavenderjs/lib';
import { Context } from "../context/Context";
export declare class TestUtils extends Lavender.Subject {
    eventDispatcherFactory: EventDispatcherFactory;
    httpFactory: HttpServiceFactory;
    context: Context;
    bindingTest: Object;
    constructor();
}
