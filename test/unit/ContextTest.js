/**
 * Created by dsmiley on 1/13/14.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('ContextTest', function () {

    it('check Context function and values', function () {
        var context = new LotusMVW.Context({});
        expect(context.commandMap instanceof LotusMVW.CommandMap).toBe(true);
        expect(context.componentMap instanceof Lotus.ComponentMap).toBe(true);
        expect(context.eventDispatcher.constructor.name).toBe(Lavender.EventDispatcher.name);
        expect(context.injector instanceof LotusMVW.Injector).toBe(true);
        expect(context.mediatorMap instanceof LotusMVW.MediatorMap).toBe(true);

        //TODO: test sandboxed contexts where the same injection injects different class instances
    });
});
