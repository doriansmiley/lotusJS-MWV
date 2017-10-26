/**
 * Created by dsmiley on 10/25/17.
 */
import {inject} from '../reflection/InjectorDecorator';
import {injectable} from '../reflection/InjectorDecorator';
import {bindable} from '../reflection/InjectorDecorator';
import {EventDispatcherFactory} from "../factory/EventDispatcherFactory";
import {HttpServiceFactory} from "../factory/HttpServiceFactory";
import {TestContext} from "../utils/TestContext";
import * as Lavender from 'lavenderjs/lib';
import {Context} from "../context/Context";
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
    public context:Context;
    @bindable
    public bindingTest:Object;

    constructor(){
        super();
    }

}