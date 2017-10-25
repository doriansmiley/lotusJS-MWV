/**
 * Created by dsmiley on 1/13/14.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('Decorator Tests ', function () {

    it('check Decorator functions', function (done) {
        //setup the context
        var contenxt = new LotusMVW.TestContext({})
        var testUtils = new LotusMVW.TestUtils();
        //test injections
        expect( testUtils.eventDispatcherFactory instanceof  LotusMVW.EventDispatcherFactory).toBe(true);
        expect( testUtils.httpFactory instanceof  LotusMVW.HttpServiceFactory).toBe(true);
        expect( testUtils.context instanceof  LotusMVW.TestContext).toBe(true);
        //test binding injection
        expect( typeof testUtils.notify == 'function').toBe(true);
        var handler = {
            onValueChange:function(value){
                done()
            }
        }
        testUtils.binder.bind(testUtils, 'bindingTest', handler, 'onValueChange');
        testUtils.bindingTest = {test:'test'};
    });
});
