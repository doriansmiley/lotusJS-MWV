/**
 * Created by dsmiley on 1/13/14.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('ItemViewEventTest ', function () {

    it('check ComponentEvent function and values', function () {
        var layoutEvent = new LotusMVW.ComponentEvent(LotusMVW.ComponentEvent.READY);
        expect( layoutEvent.type ).toBe(LotusMVW.ComponentEvent.READY);
    });
});
