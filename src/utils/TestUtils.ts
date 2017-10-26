/**
 * Created by dsmiley on 10/25/17.
 */
import {inject} from '../reflection/InjectorDecorator';
import {injectable} from '../reflection/InjectorDecorator';
import {bindable} from '../reflection/InjectorDecorator';
import {EventDispatcherFactory} from "../factory/EventDispatcherFactory";
import {HttpServiceFactory} from "../factory/HttpServiceFactory";
import * as Lavender from 'lavenderjs/lib';
import {IContext} from "../context/IContext";
/*
* This class is used for testing purposes only. It is not included in distributions
* */
@injectable
export class TestUtils extends Lavender.Subject{

    @inject
    public eventDispatcherFactory:EventDispatcherFactory;
    @inject
    public httpFactory:HttpServiceFactory;
    @inject
    public testObject:TestObject;
    @bindable
    public bindingTest:Object;
    public context:IContext;

    constructor(context:IContext){
        super();
        this.context = context;
    }

}

export class TestObject extends Lavender.Subject{
    public id = Lavender.UuidUtils.generateUUID();
    constructor(){
        super();
    }
}