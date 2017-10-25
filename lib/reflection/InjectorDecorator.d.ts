/**
 * Created by dsmiley on 8/30/17.
 */
import 'reflect-metadata';
export declare type injectionResolver = {
    property: string;
    type: Function;
    context: string;
    instance: any;
};
export declare const injections: Array<injectionResolver>;
export declare function inject(context: string): any;
export declare function bindable(): any;
