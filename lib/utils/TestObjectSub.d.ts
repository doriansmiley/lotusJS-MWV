/**
 * Created by dsmiley on 10/26/17.
 */
import { TestObject } from "./TestObject";
import { EventDispatcherFactory } from "../factory/EventDispatcherFactory";
import { HttpServiceFactory } from "../factory/HttpServiceFactory";
import { IContext } from "lotusjs-components/lib/context/IContext";
export declare class TestObjectSub extends TestObject {
    eventDispatcherFactory: EventDispatcherFactory;
    httpFactory: HttpServiceFactory;
    context: IContext;
    constructor(context: IContext);
}
