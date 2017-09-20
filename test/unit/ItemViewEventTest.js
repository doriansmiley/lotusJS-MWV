/**
 * Created by dsmiley on 1/13/14.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('ItemViewEventTest ', function () {

    it('check ItemViewEvent function and values', function () {
        var item = {};
        var layoutEvent = new LotusMVW.ItemViewEvent(LotusMVW.ItemViewEvent.ITEM_SELECTED, {item:item});
        expect( layoutEvent.type ).toBe(LotusMVW.ItemViewEvent.ITEM_SELECTED);
        expect( layoutEvent.payload.item ).toBe(item);
    });
});
