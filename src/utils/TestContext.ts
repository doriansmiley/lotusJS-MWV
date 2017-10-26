import {Context} from "../context/Context";
import {EventDispatcherFactory} from "../factory/EventDispatcherFactory";
import {HttpServiceFactory} from "../factory/HttpServiceFactory";
import {TestObject} from "../utils/TestObject";
/**
 * This class is used for testing purposes only. It is not included in distributions
 */
export class TestContext extends Context{

    constructor(model:Object, params:Object){
        super(model,params);
    }

    public toString():string{
        return 'TestContext';
    }

    public mapObjects(){
        this.injector.mapObject(TestObject, TestObject, false);
        this.injector.mapObject('TestObjectWithParams', TestObject, false, ['1234', 'myLabel']);
        this.injector.mapObject('TestObjectWithParams2', TestObject, false, ['4321', 'label']);
        this.injector.mapObject('TestObject', TestObject, false);
        this.injector.mapSingletonInstance(EventDispatcherFactory, EventDispatcherFactory.getInstance());
        this.injector.mapSingletonInstance(HttpServiceFactory, HttpServiceFactory.getInstance());
    }
}