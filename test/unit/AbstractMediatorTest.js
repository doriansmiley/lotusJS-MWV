/**
 * Created by dsmiley on 9/15/16.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('AbstractMediatorTest', function () {

    it('check functions', function () {
        var view = new LotusMVW.Button();
        var context = new Lotus.Context(new Lavender.Config());
        var mediator = new LotusMVW.AbstractMediator(view, context);
        expect(mediator.componentInstance).toBe(view);
        expect(mediator.context).toBe(context);
        expect(mediator.id.length > 0).toBe(true);
        expect(mediator.toString()).toBe(mediator.id);
        mediator.destroy();
        expect(mediator.id).toBe(null);
        expect(mediator.componentInstance).toBe(null);

    });
});