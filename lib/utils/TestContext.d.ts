import { Context } from "../context/Context";
import { IContext } from "../context/IContext";
/**
 * This class is used for testing purposes only. It is not included in distributions
 */
export declare class TestContext extends Context {
    private static INSTANCE;
    constructor(model: Object, params: Object);
    mapObjects(): void;
    static getInstance(model?: Object, params?: Object): IContext;
}
