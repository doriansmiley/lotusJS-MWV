/**
 * Created by dsmiley on 10/25/17.
 */
import {inject} from '../reflection/Decorators';
import {injectable} from '../reflection/Decorators';
import {bindable} from '../reflection/Decorators';
import {EventDispatcherFactory} from "../factory/EventDispatcherFactory";
import {HttpServiceFactory} from "../factory/HttpServiceFactory";
import * as Lavender from 'lavenderjs/lib';
import {IContext} from "../context/IContext";
import {TestObject} from "./TestObject";
/*
* This class is used for testing purposes only. It is not included in distributions
* */
@injectable
export class TestUtils extends Lavender.Subject{

    @inject()
    public eventDispatcherFactory:EventDispatcherFactory;
    @inject()
    public httpFactory:HttpServiceFactory;
    @inject()
    public testObject:TestObject;
    @inject('TestObject')
    public testObject2:TestObject;
    @bindable
    public bindingTest:Object;
    public context:IContext;

    constructor(context:IContext){
        super();
        this.context = context;
    }

}