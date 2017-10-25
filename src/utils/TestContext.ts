import {Context} from "../context/Context";
import {EventDispatcherFactory} from "../factory/EventDispatcherFactory";
import {HttpServiceFactory} from "../factory/HttpServiceFactory";
import {IContext} from "../context/IContext";
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
        this.injector.mapSingletonInstance(EventDispatcherFactory, EventDispatcherFactory.getInstance());
        this.injector.mapSingletonInstance(HttpServiceFactory, HttpServiceFactory.getInstance());
        this.injector.mapSingletonInstance(Context, this);
    }
}