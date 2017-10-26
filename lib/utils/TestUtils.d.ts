import { EventDispatcherFactory } from "../factory/EventDispatcherFactory";
import { HttpServiceFactory } from "../factory/HttpServiceFactory";
import * as Lavender from 'lavenderjs/lib';
import { IContext } from "../context/IContext";
export declare class TestUtils extends Lavender.Subject {
    eventDispatcherFactory: EventDispatcherFactory;
    httpFactory: HttpServiceFactory;
    testObject: TestObject;
    bindingTest: Object;
    context: IContext;
    constructor(context: IContext);
}
export declare class TestObject extends Lavender.Subject {
    id: string;
    constructor();
}
