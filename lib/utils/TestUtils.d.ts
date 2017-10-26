import { EventDispatcherFactory } from "../factory/EventDispatcherFactory";
import { HttpServiceFactory } from "../factory/HttpServiceFactory";
import * as Lavender from 'lavenderjs/lib';
import { IContext } from "../context/IContext";
import { TestObject } from "./TestObject";
export declare class TestUtils extends Lavender.Subject {
    eventDispatcherFactory: EventDispatcherFactory;
    httpFactory: HttpServiceFactory;
    testObject: TestObject;
    testObject2: TestObject;
    testObject3: TestObject;
    testObject4: TestObject;
    bindingTest: Object;
    context: IContext;
    constructor(context: IContext);
}
