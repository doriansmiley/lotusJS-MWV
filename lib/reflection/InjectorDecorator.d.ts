/**
 * Created by dsmiley on 8/30/17.
 */
import 'reflect-metadata';
import { IInjector } from "../context/IInjector";
export declare type injectionResolver = {
    property: string;
    type: Function;
};
export declare function inject(injector: IInjector): any;
export declare function bindable(): any;
