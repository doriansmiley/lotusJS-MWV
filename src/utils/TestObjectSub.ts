/**
 * Created by dsmiley on 10/26/17.
 */

import {TestObject} from "./TestObject";
import {EventDispatcherFactory} from "../factory/EventDispatcherFactory";
import {HttpServiceFactory} from "../factory/HttpServiceFactory";
import {inject} from '../reflection/Decorators';
import {injectable} from '../reflection/Decorators';
import {IContext} from "lotusjs-components/lib/context/IContext";

@injectable
export class TestObjectSub extends TestObject{
    @inject()
    public eventDispatcherFactory:EventDispatcherFactory;
    @inject()
    public httpFactory:HttpServiceFactory;
    public context:IContext;

    constructor(context:IContext){
        super();
        this.context = context;
    }
}