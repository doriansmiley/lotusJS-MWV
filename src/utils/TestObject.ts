/**
 * Created by dsmiley on 10/25/17.
 */
import * as Lavender from 'lavenderjs/lib';

export class TestObject{
    public id:string = Lavender.UuidUtils.generateUUID();
    public label:string = Lavender.UuidUtils.generateUUID();

    constructor(id?:string, label?:string){
        if(id){
            this.id = id;
        }
        if(label){
            this.label = label;
        }
    }
}