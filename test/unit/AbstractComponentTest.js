/**
 * Created by dsmiley on 1/13/14.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('AbstractComponentTest', function () {

    it('check AbstractComponent function and values', function () {
        var component = new LotusMVW.AbstractComponent();
        component.testProperty = null;
        var skinPart = new LotusMVW.SkinPart('testProperty', component, 'testProperty');
        component.skinParts.addItem(skinPart);
        var element = document.createElement('div');
        element.setAttribute('data-attribute-id', '1234');
        element.innerHTML = '<div data-skin-part="testProperty">' +
            '</div>';
        component.created(element);
        expect(component.element === element).toBe(true);
        expect(component.ready).toBe(true);
        expect(component.id > 0).toBe(true);
        expect(component.skinParts.skinPartsByLabel['testProperty'].element === element.firstChild ).toBe(true);
    });
});
